import { useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { CourseType } from "./Programs";
import { Link, Element, Events, scrollSpy, scroller } from 'react-scroll';

const Course = () => {
  const [courses, setCourses] = useState<CourseType[] | null>(null);
  const {id} = useParams();
  const [activeTopic, setActiveTopic] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const fetchData = async () => {
      await fetch('/courses.json')
      .then((response) => response.json())
      .then((data) => {
        setCourses(data);
        if(id && data[Number(id)]) {
          setActiveTopic(courses![Number(id)].description[0].title);
        }
      })
      .catch((error) => console.error('Error fetching the JSON:', error));
    }

    fetchData()
  }, [id]);

  useEffect(() => {
    Events.scrollEvent.register('begin', function() {
      console.log('begin', arguments);
    });

    Events.scrollEvent.register('end', function() {
      console.log('end', arguments);
    });

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);
  
  const handleScroll = () => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer && courses) {
      const scrollPosition = scrollContainer.scrollTop + scrollContainer.clientHeight;
      const scrollHeight = scrollContainer.scrollHeight;

      if (scrollPosition >= scrollHeight) {
        const currentCourse = courses[Number(id)];
        const nextIndex = currentCourse.description.findIndex(t => t.title === activeTopic) + 1;
        if (nextIndex < currentCourse.description.length) {
          setActiveTopic(currentCourse.description[nextIndex].title);
          scroller.scrollTo(currentCourse.description[nextIndex].title, {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
            containerId: 'scrollableContainer'
          });
        }
      }
    }
  };
  
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleScroll);
      }
    };
  }, [activeTopic]);
  
  return courses && (
    <div className="py-28 md:ml-[100px] md:w-[calc(100%-200px)]  ml-[50px] w-[calc(100%-100px)]">
      <div className="w-full h-[230px]">
        <div className="h-[140px] w-full bg-orange-200 rounded-xl p-4 space-y-4">
          <p className="font-semibold text-slate-700">Home | Programs | {courses![Number(id)].name}</p>
          <div className="pb-[10px] space-y-2">
            <p className="font-bold text-4xl text-slate-800">{courses![Number(id)].name}</p>
            <p className="font-semibold text-slate-600 text-lg">Duration : 3 years</p>
          </div>
        </div>
      </div>

      <div className="flex gap-8 flex-col md:flex-row h-[500px] overflow-hidden">
        <div className="flex-[1] bg-white rounded p-2">
          <div className="w-full space-y-4">
            {courses && courses![Number(id)].description.map(course => (
              <Link
                key={course.title}
                activeClass="active"
                to={course.title}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                containerId="scrollableContainer"
                className={`block p-2 ${activeTopic === course.title ? 'text-orange-600 font-bold transition-[2s]' : ' text-slate-800'} hover:cursor-pointer font-semibold hover:pl-4 duration-150 hover:text-orange-600`}
                onSetActive={() => setActiveTopic(course.title)}
              >
                {course.title}
              </Link>
            ))}
          </div>
        </div>

        <div id="scrollableContainer" ref={scrollContainerRef}  className="flex-[2.5] overflow-y-scroll custom-scroll-bar p-4 border-orange-600 border-solid border-[1px] rounded shadow-[0_0_5px_rgba(255,75,0,0.45)]">
          {courses && courses![Number(id)].description.map(course => (
            <Element key={course.title} name={course.title} className="p-4 border-b-2 h-[300px] space-y-2">
              <h2 className="font-bold text-3xl text-slate-800">{course.title}</h2>
              <p className="font-semibold text-lg text-slate-600">{course.content}</p>
            </Element>
          ))}
        </div>

      </div>
      
    </div>
  )
}

export default Course
