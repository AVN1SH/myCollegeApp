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
import { useEffect, useState } from "react"
import { Loader2 } from "lucide-react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import djangoService from "@/Django/django"
import { toast } from "sonner"

const FeedBack = () => {
  const [isSubmiting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');


  const form = useForm<z.infer<typeof feedback>>({
    resolver: zodResolver(feedback),
    defaultValues: {
      type : undefined,
      title : '',
      description : '',
      file : undefined
    },
  })

  const onSubmit = async (values: z.infer<typeof feedback>) => {
    setIsSubmitting(true);
    try {
      const response = await djangoService.feedBack({
        queryType : values.type || '',
        queryTitle : values.title,
        justify : values.description,
        file : values.file ? values.file[0] : null
      });
      
      if(response) {
        setError('');
        toast("Your query send Successfully..!", {
          description : "You may wait for futher action.",
          action: {
            label: "ok",
            onClick: () => console.log(''),
          },
        })
      }
      setIsSubmitting(false);
    } catch (error : any) {
      if(Number(error.message) >= 400) {
        setError("Error While Submitting data, Please Try Again Or Do It Later");
      }
      setIsSubmitting(false);
    }
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="relative m-1 w-[clac(100%-280px)]">
      <div className="absolute w-full bg-orange-500 h-72 rounded">
        <h1 className="font-bold text-sm md:text-xl lg:text-3xl pl-3 pt-3 text-white">
          FeedBack <span className="text-slate-800 font-thin">| </span><span className="font-thin">Ask Your Queries And Problems</span>
        </h1>
      </div>
      <div className="absolute border-slate-400 border-[1px] border-solid flex flex-col bg-gray-100 w-[calc(100%-5px)] md:w-[calc(100%-60px)] lg:w-[calc(100%-100px)] top-16 md:top-20 lg:top-24 left-1/2 -translate-x-1/2 min-h-[calc(100vh-11rem)] rounded lg:p-3 p-1">
        <div className="flex justify-center items-center min-h-screen bg-gray-100 w-full">
          <div className="w-full max-w-2xl p-2 lg:p-8 space-y-2 lg:space-y-8 bg-white rounded-lg shadow-md my-3">
            <div className="text-center">
              <h1 className=" text-xl sm:text-2xl md:text-4xl font-extrabold tracking-tight lg:text-5xl mb-2 lg:mb-6 text-slate-800">
                <FontAwesomeIcon icon={faGraduationCap} /> FeedBack Form
              </h1>
              <p className="mb-4 text-xs lg:text-sm font-semibold text-orange-600"><b className="text-slate-600">FeeBack Form,</b> Explain Your Issues and Querry Here</p>
            </div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
                <FormField
                  name="type"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel className="text-xs md:text-sm">Query Type | Required</FormLabel>
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
                      <FormLabel className="text-xs md:text-sm">Query Title</FormLabel>
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
                      <FormLabel className="text-xs md:text-sm">Justify | Required</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Explain briefly about your Query / Problem."
                          className="resize-y"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription className="text-xs md:text-sm">
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
                      <FormLabel className="text-xs md:text-sm">File or Photo | Optional</FormLabel>
                      <FormControl>
                        <Input 
                          type="file" 
                          className="hover:cursor-pointer"
                          accept=".jpg, .jpeg, .png"
                          {...form.register("file", { required: true })} 
                        />
                      </FormControl>
                      <FormDescription className="text-xs md:text-sm">
                        Picture Must be clearly visible and readable,
                      <span className="text-blue-500 font-bold"> .jpg, .png, .jpeg, .pdf</span> format file only.
                      </FormDescription>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
                {error && <div className="text-red-500 font-bold ">{error}</div>}
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

export default FeedBack
