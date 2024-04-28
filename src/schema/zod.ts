import { z } from "zod"

let password : string;

const registration = z.object({
  firstName: z.string().min(3, "First Name must have at least 3 characters").max(30, "Name must be less than 30 Characters"),
  middleName: z.string().min(0).max(30),
  lastName: z.string().min(0).max(30),
  role: z.union([z.literal('student'), z.literal('faculty'), z.literal(undefined)]).refine(value => value !== undefined, {
    message : "Please select your role."
  }),
  regId: z.string().min(15, "Registration Id must be Valid.").max(15, "Registration Id must be Valid."),
  email: z.string().email("Invalid Email Id"),
  mobNum: z.string().min(10, "Mobile Number must contain 10 digits").max(10, "Mobile Number must contain 10 digits"),
  password: z.string().min(8, "Password must have at least 8 characters").max(20, "Password must be under 20 charecters").refine(value => {
    password = value
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value);
  }, { message : "Invalid Password Format."}),
  confirmPassword: z.string().max(20).refine((value) => password === value, {
    message : "Password do not matches."
  }),
})

const login = z.object({
  email : z.string().email("Invalid Email Id"),
  password : z.string().max(20, "Password must be under 20 charecters")
})

export { registration, login }