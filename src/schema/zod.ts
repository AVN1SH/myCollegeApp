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

//admission shemas........

const personalDetails = z.object({
  candidate: z.string().min(3, "Name must have at least 3 characters").max(30, "Name must be less than 30 Characters"),
  fatherName: z.string().min(5, "Name must have at least 3 characters").max(30, "Name must be less than 30 Characters"),
  motherName: z.string().min(5, "Name must have at least 3 characters").max(30, "Name must be less than 30 Characters"),
  email: z.string().email("Invalid Email Id"),
  mobNum: z.string().min(10, "Mobile Number must contain 10 digits").max(10, "Mobile Number must contain 10 digits"),
  gender: z.union([z.literal('male'), z.literal('female'), z.literal('transgender'), z.literal(undefined)]).refine(value => value !== undefined, {
    message : "Please select your gender."
  }),
  cast: z.union([z.literal('general'), z.literal('obc'), z.literal('st'), z.literal('sc'), z.literal(undefined)]).refine(value => value !== undefined, {
    message : "Please select your cast."
  }),
  dob: z.date(),
  nationality : z.union([z.literal('indian'), z.literal('other'), z.literal(undefined)]).refine(value => value !== undefined, {
    message : "Please select your nationality."
  }),
  pwd: z.boolean().optional()
});

const address = z.object({
  buildingNum : z.string().max(20, "Field must be under 20 charecters"),
  locality: z.string().max(40, "Field must be under 20 charecters"),
  sublocality: z.string().max(40, "Field must be under 20 charecters"),
  state: z.string(),
  district : z.string(),
  pinCode: z.string().max(30, "Field must be under 20 charecters"),
  alternateNum : z.string()
});

const qualification = z.object({
  schoolName : z.string().min(10).max(40),
  rollCode: z.number().min(8).max(8),
  totalMarks : z.number().min(3).max(3),
  obtainedMarks : z.number().min(3).max(3),
  percentage : z.string(),
});

const documentations = z.object({
  uniqueId : z.string(),
  tenthDoc : z.string(),
  twelfthDoc : z.string()
});

export { 
  registration, 
  login, 
  personalDetails,
  address,
  qualification,
  documentations
}