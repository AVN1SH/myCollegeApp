import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  // FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { personalDetails } from "@/schema/zod"
// import { useDebounceCallback } from "usehooks-ts"
import { useState } from "react"
import { useNavigate} from "react-router-dom"
import { CalendarIcon, Loader2 } from "lucide-react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { Calendar } from "@/components/ui/calendar"
import { Checkbox } from "@/components/ui/checkbox"
import djangoService from "@/Django/django"
import { useSelector } from "react-redux"
import { RootState } from "@/store/store"
import { toast } from "sonner"


const PersonalInfo = () => {
  // const [email, setEmail] = useState('');
  const [isSubmiting, setIsSubmitting] = useState(false);
  // const [isCheckingEmail, setIsCheckingEmail] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const userData = useSelector((state : RootState) => state.authSlice.userData);


  // const debounced = useDebounceCallback(setEmail, 300);


  // useEffect(() => {
  //   const checkEmail = async () => {
  //     if(email) {
  //       setIsCheckingEmail(true);
  //       try {
  //         //TODO: i need to add the request to the django
  //         setIsSubmitting(false);
  //       } catch(error) {
  //         // TODO:
  //         setIsSubmitting(false);
  //       }
  //     }
  //   }
  // }, [email])

  const updatedDetails = personalDetails.extend({
    candidate : !userData?.first_name ? z.string().min(3, "Name must have at least 3 characters").max(30, "Name must be less than 30 Characters") : z.string().optional()
  })

  const form = useForm<z.infer<typeof personalDetails>>({
    resolver: zodResolver(updatedDetails),
    defaultValues: {
      candidate : "",
      fatherName : "",
      motherName : "",
      gender : undefined,
      cast : undefined,
      dob : undefined,
      nationality : undefined,
      pwd : false,
      email: "",
      mobNum : "",
    },
  })

  const onSubmit = async (values: z.infer<typeof personalDetails>) => {
    setIsSubmitting(true);
    console.log(values.dob.toLocaleDateString("en-US", {
      year: "numeric",
      month: "numeric",
      day: "numeric"
    }))
    try {
      const response = await djangoService.userDetails({
        id : userData?.id || '',
        candidate : userData ? (userData.first_name + ' ' + userData.middle_name + ' ' + userData.last_name) : values.candidate,
        fatherName : values.fatherName,
        motherName : values.motherName,
        gender : values.gender || '',
        cast : values.cast || '',
        dob : values.dob.toLocaleDateString("en-US", {
          year: "numeric",
          month: "numeric",
          day: "numeric"
        }),
        nationality : values.nationality || '',
        pwd : values.pwd,
        email : values.email === userData?.email ? '': values.email,
        mobNum : values.mobNum,
      });
      
      if(response) {
        setError('');
        toast("Personal Information Saved Successfully..!", {
          description : "Now Here, You need to add your address informations.",
          action: {
            label: "ok",
            onClick: () => console.log(''),
          },
        })
        navigate("/student-dashboard/admission/address");
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
    <div className="relative m-1 w-[clac(100%-280px)]">
      <div className="absolute w-full bg-orange-500 h-72 rounded">
        <h1 className="font-bold text-3xl pl-3 pt-3 text-white">
          Admission | Personal Informations
        </h1>
      </div>
      <div className="absolute border-slate-400 border-[1px] border-solid flex bg-gray-100 w-[calc(100%-100px)] top-24 left-1/2 -translate-x-1/2 min-h-[calc(100vh-11rem)] rounded p-3">
        <div className="flex justify-center items-center min-h-screen bg-gray-100 w-full">
          <div className="w-full max-w-2xl p-8 space-y-8 bg-white rounded-lg shadow-md my-3">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-6 text-slate-800">
                <FontAwesomeIcon icon={faGraduationCap} /> Admission Form
              </h1>
              <p className="mb-4 text-md font-semibold text-orange-600"><b className="text-slate-600">Personal Information,</b> Please be carefull while filling the form details.</p>
            </div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
                <FormField
                  name="candidate"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Candidate Full Name | Required</FormLabel>
                      <FormControl>
                        <Input 
                          type="text" 
                          disabled = {userData?.first_name ? true : false}
                          placeholder={userData ? userData.first_name + ' ' + userData.middle_name + ' ' + userData.last_name : "eg : Jhon"}
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
                <div className="flex justify-between items-center gap-2">
                  <FormField
                    name="fatherName"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel>Father's Name | Required</FormLabel>
                        <FormControl>
                          <Input 
                            type="text" 
                            placeholder="eg : Roy" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="motherName"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel>Mother's Name | Required</FormLabel>
                        <FormControl>
                          <Input type="text" placeholder="eg : Doe" {...field} />
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex flex-col md:flex-row justify-between items-start gap-2">
                  <div className="flex lg:flex-row flex-col gap-2 items-start justify-between">
                    <FormField
                      name="gender"
                      control={form.control}
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormLabel>Gender | Required</FormLabel>
                          <FormControl>
                            <Select
                              onValueChange={(value) => {
                                field.onChange(value)
                              }}
                            >
                              <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Gender" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="male" className="hover:cursor-pointer hover:font-semibold hover:pl-10 duration-75">Male</SelectItem>
                                <SelectItem value="female" className="hover:cursor-pointer hover:font-semibold hover:pl-10 duration-75">Female</SelectItem>
                                <SelectItem value="transgender" className="hover:cursor-pointer hover:font-semibold hover:pl-10 duration-75">Transgender</SelectItem>
                              </SelectContent>
                            </Select>
                          </FormControl>
                          <FormMessage className="text-xs" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      name="cast"
                      control={form.control}
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormLabel>Cast | Required</FormLabel>
                          <FormControl>
                            <Select
                              onValueChange={(value) => {
                                field.onChange(value)
                              }}
                            >
                              <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Cast" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="general" className="hover:cursor-pointer hover:font-semibold hover:pl-10 duration-75">General</SelectItem>
                                <SelectItem value="obc" className="hover:cursor-pointer hover:font-semibold hover:pl-10 duration-75">OBC</SelectItem>
                                <SelectItem value="ebc" className="hover:cursor-pointer hover:font-semibold hover:pl-10 duration-75">EBC</SelectItem>
                                <SelectItem value="st" className="hover:cursor-pointer hover:font-semibold hover:pl-10 duration-75">ST</SelectItem>
                                <SelectItem value="sc" className="hover:cursor-pointer hover:font-semibold hover:pl-10 duration-75">SC</SelectItem>
                              </SelectContent>
                            </Select>
                          </FormControl>
                          <FormMessage className="text-xs" />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                  control={form.control}
                  name="dob"
                  render={({ field }) => (
                    <FormItem className="flex flex-col pt-[6px] flex-1">
                      <FormLabel className="mr-3 pb-1">Date Of Birth | Required</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-[240px] pl-3 text-left font-normal h-10",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "PPP")
                                ) : (
                                  <span>Pick a date</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) =>
                                date > new Date() || date < new Date("1900-01-01")
                              }
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
                </div>
                <div className="flex justify-between items-center gap-2">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="flex-[1.2]">
                        <FormLabel>Email | Required</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="eg : example@example.com" 
                            {...field}
                            onChange={(e) => {
                              field.onChange(e);
                              // debounced(e.target.value);
                            }}
                          />
                        </FormControl>
                          {/* {isCheckingEmail && <Loader2 className="animate-spin" />} */}
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="mobNum"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem className=" flex-[1]">
                        <FormLabel>Mobile Number | Required</FormLabel>
                        <FormControl>
                          <Input type="number" placeholder={userData ? userData.phone : ""} className="custom-number-input" {...field} />
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="nationality"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nationality | Required</FormLabel>
                      <Select
                        onValueChange={(value) => {
                          field.onChange(value)
                        }}
                      >
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Nationality" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="indian" className="hover:cursor-pointer hover:font-semibold hover:pl-10 duration-75">Indian</SelectItem>
                          <SelectItem value="other" className="hover:cursor-pointer hover:font-semibold hover:pl-10 duration-75">other</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="pwd"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                      <Checkbox
                        className="data-[state=checked]:bg-orange-600 border-gray-500"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                      <FormLabel>Are you a person with disability?</FormLabel>
                    </FormItem>
                  )}
                />
                {error && <div className="text-red-500 font-bold ">{error}</div>}
                <Button type="submit" disabled={isSubmiting} className="bg-orange-600 rounded">
                  {
                    isSubmiting ? (
                      <><Loader2 className="mr-2 h4 w4 animate-spin"/> Please wait</>
                    ) : (
                      "Next & Save"
                    )
                  }
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PersonalInfo
