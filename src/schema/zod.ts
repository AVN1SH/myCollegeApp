import { z } from "zod"

let password : string;

const registration = z.object({
  firstName: z.string().min(3, "First Name must have at least 3 characters").max(30, "Name must be less than 30 Characters"),
  middleName: z.string().min(0).max(30),
  lastName: z.string().min(0).max(30),
  role: z.union([z.literal('student'), z.literal('faculty'), z.literal(undefined)]).refine(value => value !== undefined, {
    message : "Please select your role."
  }),
  collegeID: z.string(),
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

//Student login ...................

const login = z.object({
  email : z.string().email("Invalid Email Id"),
  password : z.string().max(20, "Password must be under 20 charecters")
})

//faculty login..................
const facultyLogin = z.object({
  email : z.string().email("Invalid Email Id"),
  password : z.string().max(20, "Password must be under 20 charecters"),
  collegeID : z.string().min(6, "CollegeID must be valid").max(6, "College id must be valid")
})

//admission shemas........

const personalDetails = z.object({
  candidate: z.string(),
  fatherName: z.string().min(5, "Name must have at least 3 characters").max(30, "Name must be less than 30 Characters"),
  motherName: z.string().min(5, "Name must have at least 3 characters").max(30, "Name must be less than 30 Characters"),
  email: z.string().email("Invalid Email Id"),
  mobNum: z.string().min(10, "Mobile Number must contain 10 digits").max(10, "Mobile Number must contain 10 digits"),
  gender: z.union([z.literal('male'), z.literal('female'), z.literal('transgender'), z.literal(undefined)]).refine(value => value !== undefined, {
    message : "Please select your gender."
  }),
  cast: z.union([z.literal('general'), z.literal('obc'), z.literal('ebc'), z.literal('st'), z.literal('sc'), z.literal(undefined)]).refine(value => value !== undefined, {
    message : "Please select your cast."
  }),
  dob: z.date(),
  nationality : z.union([z.literal('indian'), z.literal('other'), z.literal(undefined)]).refine(value => value !== undefined, {
    message : "Please select your nationality."
  }),
  pwd: z.boolean()
});

const address = z.object({
  buildingNum : z.string().max(20, "Field must be under 20 charecters"),
  locality: z.string().max(60, "Field must be under 60 charecters"),
  subLocality: z.string().optional(),
  state: z.string(),
  district : z.string(),
  pinCode: z.string().min(6, "Field must contain 6 digit Number").max(6, "Field must be 6 digit Number"),
  contactNum : z.string().min(10, "Invalid Number").max(10, "Invalid Number"),
  alternateNum : z.string().optional()
});

const qualification = z.object({
  status : z.union([z.literal('passed'), z.literal('appearing'), z.literal('notAttempted'), z.literal(undefined)]).refine(value => value !== undefined, {
    message : "Please select your Qualification Status."
  }),
  year : z.string(),
  schoolName : z.string().min(10, "Field must contain min 10 characters").max(60, "Field must contain max 60 characters"),
  rollCode: z.string().min(8, "Field must contain 8 digits Number").max(8, "Field must contain 8 digits Number"),
  totalMarks : z.string().min(3, "Field must contain 3 digits Number").max(3, "Field must contain 3 digits Number"),
  obtainedMarks : z.string().min(3, "Field must contain 3 digits Number").max(3, "Field must contain 3 digits Number"),
});

const documentations = z.object({
  photo : z.instanceof(FileList).refine((file) => file && file.length === 1, {
    message: "File is required",
  }),
  signature : z.instanceof(FileList).refine((file) => file && file.length === 1, {
    message: "File is required",
  }),
  uniqueId : z.instanceof(FileList).refine((file) => file && file.length === 1, {
    message: "File is required",
  }),
  tenthMarksheet : z.instanceof(FileList).refine((file) => file && file.length === 1, {
    message: "File is required",
  }),
  twelfthMarksheet : z.instanceof(FileList).refine((file) => file && file.length === 1, {
    message: "File is required",
  }),
  graduationMarksheet : z.instanceof(FileList).optional()
});

const feedback = z.object({
  type : z.union([z.literal('technical'), 
    z.literal('general'), 
    z.literal('admission'), 
    z.literal('result'), 
    z.literal('class'), 
    z.literal(undefined)]).refine(value => value !== undefined, {
    message : "Please select your Queary Type."
  }),
  title : z.string().min(10, "Title must be 10 characters above.").max(30, "Title must be under 30 charecters"),
  description : z.string().min(50, "Description must be more than 50 characters").max(400, "Description must be less than 400 characters."),
  file : z.instanceof(FileList).refine((file) => file && file.length === 1, {
    message: "File is required",
  }),
})

// Faculty schema's ...........

const stdClass = z.object({
  course : z.string(),
  startTime : z.string(),
  endTime : z.string(),
  description : z.string().min(10, "Description must be more than 10 characters").max(200, "Description must be less than 400 characters."),
})

export { 
  registration, 
  login, 
  facultyLogin,
  personalDetails,
  address,
  qualification,
  documentations,
  feedback,
  stdClass
}