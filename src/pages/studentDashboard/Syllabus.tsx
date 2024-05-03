import { useSelector, useDispatch } from "react-redux"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { AuthState } from "@/features/authSlice"

const Syllabus = () => {
  const userData = useSelector((state : AuthState) => state.userData);
  return (
    <div>
      {userData.course.syllabus.map((data : any) => 
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>{data.title}</AccordionTrigger>
            <AccordionContent>
              {data.description}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      )}
    </div>
  )
}

export default Syllabus
