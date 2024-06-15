import djangoService from "@/Django/django"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { faCalendar} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2 } from "lucide-react"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod";
import { stdClass } from "@/schema/zod"
import { Textarea } from "@/components/ui/textarea"
import { CourseType } from "../Programs"

const Class = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [formattedDate, setFormattedDate] = useState('');
  const [formattedWeek, setFormattedWeek] = useState(''); 
  const [isSubmiting, setIsSubmitting] = useState(false);
  // const [course, setCourse] = useState('');
  const [error, setError] = useState('');
  const [courses, setCourses] = useState<CourseType[] | null>(null);

  useEffect(() => {
    fetch('/courses.json')
      .then((response) => response.json())
      .then((data) => setCourses(data))
      .catch((error) => console.error('Error fetching the JSON:', error));
  }, []);

  const form = useForm<z.infer<typeof stdClass>>({
    resolver: zodResolver(stdClass),
    defaultValues: {
      course : '',
      startTime : '',
      endTime : '',
      description : '',
    },
  })

  const onSubmit = async (values: z.infer<typeof stdClass>) => {
    setIsSubmitting(true);
    try {
      const userData = await djangoService.facultyClass({
        facultyName : "Vikrant sir",
        course : values.course,
        date : date?.toLocaleDateString("en-GB", {
          year: "numeric",
          month: "numeric",
          day: "numeric",
        }) || "",
        startTime : values.startTime,
        endTime : values.endTime,
        description : values.description,
      });
      if(userData) {
        setError('');
      }
      setIsSubmitting(false);
    } catch (error : any) {
      if(Number(error.message) >= 400) {
        console.log("fields are required");
        setError("Error While submitting, Please Try Again Or Do It Later");
      }
      setIsSubmitting(false);
    }
    console.log(values)
  }

  useEffect(() => {
    const formatDate = date?.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    const formatWeek = date?.toLocaleDateString("en-US", {
      weekday: "long"
    });

    if(formatDate) setFormattedDate(formatDate);
    if(formatWeek) setFormattedWeek(formatWeek);
  }, [date])

  return (
    <div className="relative m-1 w-[clac(100%-280px)]">
      <div className="absolute w-full bg-orange-500 h-72 rounded">
        <h1 className="font-bold text-3xl pl-3 pt-3 text-white">
          Classes | <span className="font-thin">Set your class schedules</span>
        </h1>
      </div>
      <div className="absolute border-slate-400 border-[1px] border-solid flex flex-col bg-gray-100 w-[calc(100%-100px)] top-24 left-1/2 -translate-x-1/2 min-h-[calc(100vh-11rem)] rounded p-3">
        <div className="font-semibold text-2xl text-slate-700 bg-white mb-1 rounded p-2 pl-2 shadow-md"><FontAwesomeIcon icon={faCalendar}/> {formattedDate}<span className="divider-vertical border-solid border-[1px] border-orange-300 mx-2"></span><span className="font-thin text-md">{formattedWeek}</span>
        </div>
        <div className="flex bg-gray-100 justify-between w-full gap-1">
          <div className="flex-[1.7] bg-white rounded p-8 space-y-8 shadow-md">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  name="course"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>Course | Required</FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={(value) => {
                            field.onChange(value)
                            // setCourse(value);
                          }}
                        >
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select Course" />
                          </SelectTrigger>
                          <SelectContent>
                            {courses?.map(value => (
                              <SelectItem value={value.name} key={value.name} className="hover:cursor-pointer hover:font-semibold hover:pl-10 duration-75">{value.name}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
                <div className="flex justify-between items-center gap-2">
                  <FormField
                    name="startTime"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel>Start Time | Required</FormLabel>
                        <FormControl>
                          <Input 
                            type="time" 
                            placeholder="" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="endTime"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel>End Time | Required</FormLabel>
                        <FormControl>
                          <Input 
                            type="time" 
                            placeholder="" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description | Required</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Add any important information to student."
                          className="resize-y"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        You can <span className="text-lime-600 font-semibold">@mention</span> other users and faculty members.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {error && <div className="text-red-500 font-bold ">{error}</div>}
                <Button type="submit" disabled={isSubmiting} className="bg-orange-600 rounded">
                  {
                    isSubmiting ? (
                      <><Loader2 className="mr-2 h4 w4 animate-spin"/> Please wait</>
                    ) : (
                      "Add Schedule"
                    )
                  }
                </Button>
              </form>
            </Form>
          </div>
          <div className="flex-1 bg-white rounded shadow-md">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              classNames={{
                month : "space-y-4 w-full border-[1px] border-gray-200 border-solid rounded-lg pt-2",
                head_cell:"text-muted-foreground rounded-md w-9 font-normal text-[0.8rem] w-full",
                row: "flex w-full",
                cell: "h-14 w-14 text-center text-sm relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-orange-100 [&:has([aria-selected])]:bg-orange-100 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20 w-full rounded-full hover:bg-orange-100 flex items-center justify-center hover:cursor-pointer",
                day_selected:"bg-orange-500 text-orange-500-foreground hover:bg-orange-600 hover:text-orange-600-foreground focus:bg-orange-500 focus:text-orange-500-foreground text-white",
                day: "w-12 h-12 rounded-full",
                day_today: "bg-accent text-accent-foreground text-orange-500 font-semibold",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Class
