import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { qualification } from "@/schema/zod"
import { useEffect, useState } from "react"
import { Loader2 } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import djangoService from "@/Django/django"
import { useSelector } from "react-redux"
import { RootState } from "@/store/store"
import { toast } from "sonner"

interface Props {
  degree : string;
}

const QualificationForm = ({degree} : Props) => {
  const [isSubmiting, setIsSubmitting] = useState(false);
  const [yearFrom, setYearFrom] = useState('');
  const [status, setStatus] = useState<string>('');
  const [totalMarks, setToatalMarks] = useState('');
  const [obtainedMarks, setObtainedMarks] = useState('');
  const [error, setError] = useState('');
  const userData = useSelector((state : RootState) => state.authSlice.userData);
  const [year, setYear] = useState<number[] | null>(null)

  useEffect(() => {
    fetch('/year.json')
      .then((response) => response.json())
      .then((data) => setYear(data))
      .catch((error) => console.error('Error fetching the JSON:', error));
  }, []);

  const form = useForm<z.infer<typeof qualification>>({
    resolver: zodResolver(qualification),
    defaultValues: {
      status : undefined,
      schoolName : '',
      rollCode : '',
      totalMarks : '',
      obtainedMarks : '',
    },
  })

  const onSubmit = async (values: z.infer<typeof qualification>) => {
    setIsSubmitting(true);
    try {
      const response = await djangoService.userQualification({
        id : userData?.id || '',
        degree : degree,
        status : values.status || '',
        year : values.year,
        schoolName : values.schoolName,
        rollCode : values.rollCode,
        totalMarks : values.totalMarks,
        obtainedMarks : values.obtainedMarks
      });
      console.log(values.year)
      if(response) {
        console.log(response);
        setError('');
        toast("Your Qualifications Saved Successfully..!", {
          description : "",
          action: {
            label: "ok",
            onClick: () => console.log(''),
          },
        })
      }
      setIsSubmitting(false);
    } catch (error : any) {
      if(Number(error.message) >= 400) {
        console.log("fields are required");
        setError("Error While adding data, Please Try Again Or Do It Later");
      }
      setIsSubmitting(false);
    }
    console.log(values)
  }
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className="hover:no-underline font-bold text-lg text-slate-600">{degree} Qualification</AccordionTrigger>
        <AccordionContent className="space-y-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
              <FormField
                name="status"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Qualification Status Name | Required</FormLabel>
                      <Select
                        onValueChange={(value) => {
                          field.onChange(value)
                          setStatus(value)
                        }}
                      >
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="passed" className="hover:cursor-pointer hover:font-semibold hover:pl-10 duration-75">Passed</SelectItem>
                          <SelectItem value="appearing" className="hover:cursor-pointer hover:font-semibold hover:pl-10 duration-75">Appearing</SelectItem>
                          <SelectItem value="notAttempted" className="hover:cursor-pointer hover:font-semibold hover:pl-10 duration-75">Not Attempted</SelectItem>
                        </SelectContent>
                      </Select>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
              <div className={status !== '' ? status !=="notAttempted" ? "block space-y-4" : "hidden" : "hidden"}>
                <FormField
                  name="year"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        {status === "passed" ? "Session" : status === "appearing" && "Current Session"} | Required</FormLabel>
                        <div className="flex gap-2">
                          <Select
                            onValueChange={(value) => {
                              setYearFrom(value);
                            }}
                          >
                            <SelectTrigger className="w-[180px]">
                              <SelectValue placeholder="From" />
                            </SelectTrigger>
                            <SelectContent>
                            {year?.map(value => {
                              if(value <= 2024) {
                                return <SelectItem value={String(value)} key={value} className="hover:cursor-pointer hover:font-semibold hover:pl-10 duration-75">{value}</SelectItem>
                              }
                            })}
                            </SelectContent>
                          </Select>
                          <Select
                            onValueChange={(value) => {
                              field.onChange(yearFrom + '-' + value)
                            }}
                          >
                            <SelectTrigger className="w-[180px]">
                              <SelectValue placeholder="To" />
                            </SelectTrigger>
                            <SelectContent>
                            {year?.map(value => {
                              if(Number(value) > Number(yearFrom) && Number(value) <= Number(yearFrom) + 5) {
                                return <SelectItem value={String(value)} key={value} className="hover:cursor-pointer hover:font-semibold hover:pl-10 duration-75">{value}</SelectItem>
                              }
                            })}
                            </SelectContent>
                          </Select>
                        </div>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
                <FormField
                  name="schoolName"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>School / College Name | Required</FormLabel>
                      <FormControl>
                      <Input 
                        type="text" 
                        placeholder="eg : Abcd School" 
                        {...field} 
                      />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
                <FormField
                  name="rollCode"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className=" flex-[1]">
                      <FormLabel>Roll Code | Required</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="eg : 12345678" className="custom-number-input" {...field} />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
                <div className="flex gap-2">
                  <FormField
                    name="totalMarks"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem className=" flex-[1]">
                        <FormLabel>Total Marks | Required</FormLabel>
                        <FormControl>
                          <Input type="number" placeholder="eg : 500" className="custom-number-input" {...field} 
                          onChange={(e) => {
                            field.onChange(e);
                            setToatalMarks(e.target.value);
                          }}
                          />
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="obtainedMarks"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem className=" flex-[1]">
                        <FormLabel>Obtained Marks | Required</FormLabel>
                        <FormControl>
                          <Input type="number" placeholder="eg : 400" className="custom-number-input" {...field}
                          onChange={(e) => {
                            field.onChange(e);
                            setObtainedMarks(e.target.value);
                          }}
                          />
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />
                  <div className="flex flex-col gap-2 ">
                    <h1 className="font-semibold">Total Percentage</h1>
                    <p className="bg-gray-300 w-[180px] h-10 hover:cursor-not-allowed border-solid border-[1px] border-gray-200 rounded-md pl-3 py-2">{totalMarks ? (Number(Number(obtainedMarks) * 100 / Number(totalMarks)).toFixed(2)) : '0'}%</p>
                  </div>
                </div>
              </div>
              {error && <div className="text-red-500 font-bold ">{error}</div>}
              <Button type="submit" disabled={isSubmiting} className="bg-orange-600 rounded">
                {
                  isSubmiting ? (
                    <><Loader2 className="mr-2 h4 w4 animate-spin"/> Please wait</>
                  ) : (
                    "Save Details"
                  )
                }
              </Button>
            </form>
          </Form>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default QualificationForm
