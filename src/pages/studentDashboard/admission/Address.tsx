import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
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
import { address } from "@/schema/zod"
import { useState } from "react"
import { Link, NavLink} from "react-router-dom"
import { Loader2 } from "lucide-react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

import state from "../../../../public/state.json";
import cities from "../../../../public/cities.json";


const Address = () => {
  const [email, setEmail] = useState('');
  const [isSubmiting, setIsSubmitting] = useState(false);
  const [stateValue, setStateValue] = useState<string>('');

  const form = useForm<z.infer<typeof address>>({
    resolver: zodResolver(address),
    defaultValues: {
      buildingNum : '',
      locality : '',
      subLocality : '',
      state : '',
      district : '',
      pinCode : '',
      contactNum : '',
      alternateNum : '',
    },
  })

  const onSubmit = (values: z.infer<typeof address>) => {
    setIsSubmitting(true);
    try {
      //TODO: need to handle submit here
      setIsSubmitting(false);
    } catch (error) {
      setIsSubmitting(false);
    }
    console.log(values)
  }
  return (
    <div className="relative m-1 w-[clac(100%-280px)]">
      <div className="absolute w-full bg-orange-500 h-72 rounded">
        <h1 className="font-bold text-3xl pl-3 pt-3 text-white">
          Admission | Address
        </h1>
      </div>
      <div className="absolute border-slate-400 border-[1px] border-solid flex bg-gray-100 w-[calc(100%-100px)] top-24 left-1/2 -translate-x-1/2 min-h-screen rounded p-3">
        <div className="flex justify-center items-center min-h-screen bg-gray-100 w-full">
          <div className="w-full max-w-2xl p-8 space-y-8 bg-white rounded-lg shadow-md my-3">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-6 text-slate-800">
                <FontAwesomeIcon icon={faGraduationCap} /> Admission Form
              </h1>
              <p className="mb-4 text-md font-semibold text-orange-600"><b className="text-slate-600">Address Information,</b> Please be carefull while filling the form details.</p>
            </div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
                <FormField
                  name="buildingNum"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Building / House / Apartment Number | Required</FormLabel>
                      <FormControl>
                        <Input 
                          type="text" 
                          placeholder="eg : House No : 112" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
                <FormField
                  name="locality"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>Locality | Required</FormLabel>
                      <FormControl>
                        <Input 
                          type="text" 
                          placeholder="eg : Sitamarhi Railway Station" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
                <FormField
                  name="subLocality"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>Sub Locality | Optional</FormLabel>
                      <FormControl>
                        <Input type="text" placeholder="eg : Pratap Nagar" {...field} />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
                <div className="flex flex-col md:flex-row justify-between items-center gap-2">
                  <div className="flex lg:flex-row flex-col gap-2 items-center justify-between">
                    <FormField
                      name="state"
                      control={form.control}
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormLabel>State | Required</FormLabel>
                          <FormControl>
                            <Select
                              onValueChange={(value) => {
                                field.onChange(value)
                                setStateValue(value);
                              }}
                            >
                              <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="State" />
                              </SelectTrigger>
                              <SelectContent>
                                {state.map(value => (
                                  <SelectItem value={value.name.default} key={value.id} className="hover:cursor-pointer hover:font-semibold hover:pl-10 duration-75">{value.name.default}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </FormControl>
                          <FormMessage className="text-xs" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      name="district"
                      control={form.control}
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormLabel>District | Required</FormLabel>
                          <FormControl>
                            <Select
                              onValueChange={(value) => {
                                field.onChange(value)
                              }}
                            >
                              <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="District" />
                              </SelectTrigger>
                              <SelectContent>
                                {stateValue && (cities as any)[stateValue].map((value : string) => (
                                  <SelectItem value={value} key={value} className="hover:cursor-pointer hover:font-semibold hover:pl-10 duration-75">{value}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </FormControl>
                          <FormMessage className="text-xs" />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                </div>
                <div className="flex justify-between items-start gap-2">
                  <FormField
                    name="pinCode"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem className=" flex-[1]">
                        <FormLabel>Area Pic Code | Required</FormLabel>
                        <FormControl>
                          <Input type="number" placeholder="eg : 123456" className="custom-number-input" {...field} />
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="contactNum"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem className=" flex-[1]">
                        <FormLabel>Contact Number | Required</FormLabel>
                        <FormControl>
                          <Input type="number" placeholder="eg : 0123456789" className="custom-number-input" {...field} />
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="alternateNum"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem className=" flex-[1]">
                        <FormLabel>Alternate Number | Optional</FormLabel>
                        <FormControl>
                          <Input type="number" placeholder="eg : 0123456789" className="custom-number-input" {...field} />
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />
                </div>
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

export default Address
