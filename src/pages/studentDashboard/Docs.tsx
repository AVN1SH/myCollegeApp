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
import { address, documentations } from "@/schema/zod"
import { useState } from "react"
import { Link, NavLink} from "react-router-dom"
import { Loader2 } from "lucide-react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"


const Docs = () => {
  const [isSubmiting, setIsSubmitting] = useState(false);
  const [stateValue, setStateValue] = useState<string>('');

  const form = useForm<z.infer<typeof documentations>>({
    resolver: zodResolver(documentations),
    defaultValues: {
      photo : undefined,
      signature : undefined,
      uniqueId : undefined,
      tenthMarksheet : undefined,
      twelfthMarksheet : undefined,
      graduationMarksheet : undefined  
    },
  })

  const onSubmit = (values: z.infer<typeof documentations>) => {
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
          Documentaions
        </h1>
      </div>
      <div className="absolute border-slate-400 border-[1px] border-solid flex bg-gray-100 w-[calc(100%-100px)] top-24 left-1/2 -translate-x-1/2 min-h-[calc(100vh-11rem)] rounded p-3">
        <div className="flex justify-center items-center min-h-screen bg-gray-100 w-full">
          <div className="w-full max-w-2xl p-8 space-y-8 bg-white rounded-lg shadow-md my-3">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-6 text-slate-800">
                <FontAwesomeIcon icon={faGraduationCap} /> Documentation
              </h1>
              <p className="mb-4 text-md font-semibold text-orange-600"><b className="text-slate-600">Documentation,</b> Please read instructions before uploading documents.</p>
            </div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
              <FormField
                  name="photo"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Profile Photo | Required</FormLabel>
                      <FormControl>
                        <Input 
                          type="file" 
                          className="hover:cursor-pointer"
                          accept=".jpg, .jpeg, .png"
                          {...form.register("photo", { required: true })} 
                        />
                      </FormControl>
                      <FormDescription>
                        Picture Must be clearly visible and readable,
                      <span className="text-blue-500 font-bold"> .jpg, .png, .jpeg</span> format file only.
                      </FormDescription>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
              <FormField
                  name="signature"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Signature Phote | Required</FormLabel>
                      <FormControl>
                        <Input 
                          type="file" 
                          className="hover:cursor-pointer"
                          accept=".jpg, .jpeg, .png"
                          placeholder="Upload" 
                          {...form.register("signature", { required: true })}
                        />
                      </FormControl>
                      <FormDescription>
                      Picture Must be clearly visible and readable,
                      <span className="text-blue-500 font-bold"> .jpg, .png, .jpeg</span> format file only.
                      </FormDescription>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
                <FormField
                  name="uniqueId"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Unique Identification card | Required</FormLabel>
                      <FormControl>
                        <Input 
                          type="file" 
                          className="hover:cursor-pointer"
                          placeholder="Upload"
                          accept=".pdf" 
                          {...form.register("uniqueId", { required: true })} 
                        />
                      </FormControl>
                      <FormDescription>
                        Unique Cards Like : Aadhaar Card, PAN Card, Voter Id, Passport, etc that must be approved by Government Of India.
                        <span className="text-blue-500 font-bold"> .pdf</span> file only
                      </FormDescription>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
                <FormField
                  name="tenthMarksheet"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>10Th MarkSheet | Required</FormLabel>
                      <FormControl>
                        <Input 
                          type="file" 
                          className="hover:cursor-pointer"
                          accept=".pdf"
                          placeholder="Upload" 
                          {...form.register("tenthMarksheet", { required: true })} 
                        />
                      </FormControl>
                      <FormDescription>
                      <span className="text-blue-500 font-bold"> .pdf</span> file only
                      </FormDescription>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
                <FormField
                  name="twelfthMarksheet"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>12th Marksheet | If Applicable</FormLabel>
                      <FormControl>
                        <Input 
                          type="file" 
                          className="hover:cursor-pointer"
                          accept=".pdf"
                          placeholder="Upload" 
                          {...form.register("twelfthMarksheet", { required: true })} 
                        />
                      </FormControl>
                      <FormDescription>
                      <span className="text-blue-500 font-bold"> .pdf</span> file only
                      </FormDescription>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
                <FormField
                  name="graduationMarksheet"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Graduation Marksheet | If Applicable</FormLabel>
                      <FormControl>
                        <Input 
                          type="file" 
                          className="hover:cursor-pointer"
                          accept=".pdf"
                          placeholder="Upload" 
                          {...form.register("graduationMarksheet", { required: true })} 
                        />
                      </FormControl>
                      <FormDescription>
                      <span className="text-blue-500 font-bold"> .pdf</span> file only
                      </FormDescription>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={isSubmiting} className="bg-orange-600 rounded">
                  {
                    isSubmiting ? (
                      <><Loader2 className="mr-2 h4 w4 animate-spin"/> Please wait</>
                    ) : (
                      "Submit"
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

export default Docs
