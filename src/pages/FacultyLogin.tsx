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
import { facultyLogin } from "@/schema/zod"
// import { useDebounceCallback } from "usehooks-ts"
import { useState } from "react"
import { Link, useNavigate} from "react-router-dom"
import { Loader2 } from "lucide-react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye, faEyeSlash, faGraduationCap } from "@fortawesome/free-solid-svg-icons"
import djangoService from "@/Django/django"
import { useDispatch } from "react-redux"
import {login as authSignIn} from "../features/authSlice";

const FacultyLogin = () => {
  // const [email, setEmail] = useState('');
  const [isSubmiting, setIsSubmitting] = useState(false);
  // const [isCheckingEmail, setIsCheckingEmail] = useState(false);
  const [viewPassword, setViewPassword] = useState(false);
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();


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

  const form = useForm<z.infer<typeof facultyLogin>>({
    resolver: zodResolver(facultyLogin),
    defaultValues: {
      email: "",
      password: "",
      collegeID : ""
    },
  })

  const onSubmit = async (values: z.infer<typeof facultyLogin>) => {
    setIsSubmitting(true);
    try {
      const userData = await djangoService.facultyLogin({
        email : values.email,
        password : values.password,
        collegeID : values.collegeID,
      });
      if(userData) {
        dispatch(authSignIn(userData));
        navigate("/student-dashboard/admission/personal-info");
        setError('');
      }
      setIsSubmitting(false);
    } catch (error : any) {
      if(Number(error.message) >= 400) {
        console.log("fields are required");
        setError("Error While Login, Please Try Again Or Do It Later");
      }
      setIsSubmitting(false);
    }
    console.log(values)
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md my-3">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-6">
            <FontAwesomeIcon icon={faGraduationCap} /> My College
          </h1>
          <p className="mb-4 text-md">Sign In To Your Account, If Not <Link to={"/registration"} className="text-blue-500 underline hover:font-semibold">Sign-Up</Link></p>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
              name="collegeID"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>College ID | Required</FormLabel>
                  <FormControl>
                    <Input 
                      type="number" 
                      className="custom-number-input"
                      placeholder="eg : 123456" 
                      {...field} 
                    />
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
                    />
                  </FormControl>
                  <button
                    type="button"
                    className="absolute top-8 right-3"
                    onClick={() => setViewPassword(!viewPassword)}>
                      {!viewPassword && <FontAwesomeIcon icon={faEye}/>}
                      {viewPassword && <FontAwesomeIcon icon={faEyeSlash} />}
                  </button>
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
                  "Sign-In"
                )
              }
            </Button>
          </form>
        </Form>
      </div>
    </div>
  )
}

export default FacultyLogin;
