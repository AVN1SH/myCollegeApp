import { set, z } from "zod"
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
import { registration } from "@/schema/zod"
import { useDebounceCallback } from "usehooks-ts"
import { useEffect, useState } from "react"
import { Link, NavLink} from "react-router-dom"
import { Loader2 } from "lucide-react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye, faEyeSlash, faGraduationCap } from "@fortawesome/free-solid-svg-icons"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export const isPasswordValid = (password : string) => {

}

const Registration = () => {
  const [email, setEmail] = useState('');
  const [isSubmiting, setIsSubmitting] = useState(false);
  const [isCheckingEmail, setIsCheckingEmail] = useState(false);
  const [viewPassword, setViewPassword] = useState(false);


  const debounced = useDebounceCallback(setEmail, 300);


  useEffect(() => {
    const checkEmail = async () => {
      if(email) {
        setIsCheckingEmail(true);
        try {
          //TODO: i need to add the request to the django
          setIsSubmitting(false);
        } catch(error) {
          // TODO:
          setIsSubmitting(false);
        }
      }
    }
  }, [email])


  const form = useForm<z.infer<typeof registration>>({
    resolver: zodResolver(registration),
    defaultValues: {
      firstName: "",
      middleName: "",
      lastName: "",
      email: "",
      role : undefined,
      regId: "",
      mobNum : "+91",
      password: "",
      confirmPassword: "",
    },
  })

  const onSubmit = (values: z.infer<typeof registration>) => {
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
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-xl p-8 space-y-8 bg-white rounded-lg shadow-md my-3">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-6">
            <FontAwesomeIcon icon={faGraduationCap} /> My College
          </h1>
          <p className="mb-4 text-md">Sign Up To Your Account, If Already <Link to={"#"} className="text-blue-500 underline hover:font-semibold">Sign-In</Link></p>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            <FormField
              name="firstName"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name | Required</FormLabel>
                  <FormControl>
                    <Input 
                      type="text" 
                      placeholder="eg : Jhon" 
                      {...field} 
                    />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
            <div className="flex justify-between items-center gap-2">
              <FormField
                name="middleName"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Middle Name | Optional</FormLabel>
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
                name="lastName"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Last Name | Optional</FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="eg : Doe" {...field} />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex justify-between items-center gap-2">
              <FormField
                name="role"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="flex-0">
                    <FormLabel>Your Position | Required</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={(value) => {
                          field.onChange(value)
                        }}
                      >
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="student">Student</SelectItem>
                          <SelectItem value="faculty">Faculty</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
              <FormField
                name="regId"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Registration Id | Required</FormLabel>
                    <FormControl>
                      <Input 
                        type="text" 
                        placeholder="eg : ABCDEFGH1234" 
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
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email | Required</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="eg : example@example.com" 
                      {...field}
                      onChange={(e) => {
                        field.onChange(e);
                        debounced(e.target.value);
                      }}
                    />
                  </FormControl>
                    {isCheckingEmail && <Loader2 className="animate-spin" />}
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
            <FormField
              name="mobNum"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mobile Number | Required</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="eg : 0123456789" className="custom-number-input" {...field} />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="relative">
                  <FormLabel>Password | Required</FormLabel>
                  <FormControl>
                    <Input 
                      type={viewPassword ? "text" : "password"} 
                      placeholder="eg : ABcde123@#" 
                      {...field} 
                      onChange={(e) => {
                        field.onChange(e);
                        isPasswordValid(e.target.value);
                      }}
                    />
                  </FormControl>
                  <button
                    type="button"
                    className="absolute top-1/2 right-4 -translate-y-full pb-1"
                    onClick={() => setViewPassword(!viewPassword)}>
                      {!viewPassword && <FontAwesomeIcon icon={faEye} />}
                      {viewPassword && <FontAwesomeIcon icon={faEyeSlash} />}
                  </button>
                  <FormDescription>
                    Password must be at least 8 characters long and contains 
                    uppercase, lowercase, number and special character.
                  </FormDescription>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password | Required</FormLabel>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isSubmiting} className="bg-orange-600 rounded">
              {
                isSubmiting ? (
                  <><Loader2 className="mr-2 h4 w4 animate-spin"/> Please wait</>
                ) : (
                  "Sign-Up"
                )
              }
            </Button>
          </form>
        </Form>
      </div>
    </div>
  )
}

export default Registration
