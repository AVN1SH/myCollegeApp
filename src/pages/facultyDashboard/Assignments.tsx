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
import { feedback } from "@/schema/zod"
import { useState } from "react"
import { Loader2 } from "lucide-react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

const Assignment = () => {
  const [isSubmiting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof feedback>>({
    resolver: zodResolver(feedback),
    defaultValues: {
      type : undefined,
      title : '',
      description : '',
      file : undefined
    },
  })

  const onSubmit = (values: z.infer<typeof feedback>) => {
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
          Assignments | <span className="font-thin"> Set UpComming Assignments and Notice for Students</span>
        </h1>
      </div>
      <div className="absolute border-slate-400 border-[1px] border-solid flex bg-gray-100 w-[calc(100%-100px)] top-24 left-1/2 -translate-x-1/2 min-h-[calc(100vh-11rem)] rounded p-3">
        <div className="flex justify-center items-center min-h-screen bg-gray-100 w-full">
          <div className="w-full max-w-2xl p-8 space-y-8 bg-white rounded-lg shadow-md my-3">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-6 text-slate-800">
                <FontAwesomeIcon icon={faGraduationCap} /> Send Notice
              </h1>
              <p className="mb-4 text-md font-semibold text-orange-600"><b className="text-slate-600">Send Notice,</b> Fill Your Assignments or Notice to Student</p>
            </div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
                <FormField
                  name="type"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>Query Type | Required</FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={(value) => {
                            field.onChange(value)
                          }}
                        >
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem 
                              value="technical" 
                              className="hover:cursor-pointer hover:font-semibold hover:pl-10 duration-75"
                            >Technical Query</SelectItem>
                            <SelectItem 
                              value="general" 
                              className="hover:cursor-pointer hover:font-semibold hover:pl-10 duration-75"
                            >General Query</SelectItem>
                            <SelectItem 
                              value="admission" 
                              className="hover:cursor-pointer hover:font-semibold hover:pl-10 duration-75"
                            >Admission Query</SelectItem>
                            <SelectItem 
                              value="result" 
                              className="hover:cursor-pointer hover:font-semibold hover:pl-10 duration-75"
                            >Result Query</SelectItem>
                            <SelectItem 
                              value="class" 
                              className="hover:cursor-pointer hover:font-semibold hover:pl-10 duration-75"
                            >Classes Query</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
                <FormField
                  name="title"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Query Title</FormLabel>
                      <FormControl>
                        <Input 
                          type="text" 
                          placeholder="Short Title" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Justify | Required</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Explain briefly about your Query / Problem."
                          className="resize-y"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        You can <span>@mention</span> other users and faculty members.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="file"
                  control={form.control}
                  render={({ }) => (
                    <FormItem>
                      <FormLabel>File or Photo | Optional</FormLabel>
                      <FormControl>
                        <Input 
                          type="file" 
                          className="hover:cursor-pointer"
                          accept=".jpg, .jpeg, .png"
                          {...form.register("file", { required: true })} 
                        />
                      </FormControl>
                      <FormDescription>
                        Picture Must be clearly visible and readable,
                      <span className="text-blue-500 font-bold"> .jpg, .png, .jpeg, .pdf</span> format file only.
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
                      "Send Message"
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

export default Assignment
