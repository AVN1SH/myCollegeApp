import { api, facultyApi } from "../conf/conf.ts"

export interface CreateUserAccount {
  firstName : string;
  middleName : string;
  lastName : string;
  role : string;
  collegeID ? : string;
  email : string;
  mobNum ?: string;
  password : string;
}

interface LoginUserAccount {
  email : string;
  password : string;
  collegeID ? : string; //optional
}

interface UserDetails {
  id : string;
  candidate : string;
  fatherName : string;
  motherName : string;
  email : string;
  mobNum : string;
  gender : string;
  cast : string;
  dob : string;
  nationality : string;
  pwd : boolean;
}

interface UserAddress {
  buildingNum : string;
  locality : string;
  subLocality : string;
  state : string;
  district : string;
  pinCode : string;
  contactNum : string;
  alternateNum : string;
}

interface UserQualification {
  degree : string;
  status : string;
  year : string;
  schoolName : string;
  rollCode : string;
  totalMarks : string;
  obtainedMarks : string;
}

interface UserDocs {
  photo : File;
  signature : File;
  uniqueId : File;
  tenthMarksheet : File;
  twelfthMarksheet : File;
  graduationMarksheet : File;
}

//faculty interface..........
interface FacultyClass {
  facultyName : string;
  course : string;
  date : string;
  startTime : string;
  endTime : string;
  description : string;
}

export class DjangoService {

  async createAccount({firstName, middleName, lastName, role, collegeID, email, mobNum, password} : CreateUserAccount) {
    try {
      const response = await api.post("/register/", {
        first_name : firstName,
        middle_name : middleName,
        last_name : lastName,
        role,
        collegeID,
        email,
        phone : mobNum,
        password
      });

      if(response.data) {
        console.log("Registered successfully..!")

        return response.data;
      } else {
        console.error("error while registeration : ");
      }
    } catch(error : any) {
      console.log(error);
      throw new Error(error.response.status)
    }
  }

// Authentication section..............

  async login({email, password} : LoginUserAccount) {
    try {
      const response = await api.post(`/login/`, {
        email,
        password,
      });
  
      if (response.data) {
        const user = response.data;
        console.log('Logged in successfully');
        console.log(user)
        return user;

      } else {
        console.error('Login failed:', response.data.error);
      }
    } catch (error : any) {
      throw new Error(error.response.status)
    }
  }

  async getCurrentUser() {
    try {
      const response = await api.post("/current-user");

      if(response.data){ 
        return response.data
      } else { return null}

    } catch (error) {
      console.log("current-user not fetched, error : ", error);
    }
  }

  async logout() {
    try {
      // await api.post("/logout", null, {
      //   headers : {
      //     Authorization : `Bearer ${accessToken}`
      //   }
      // });
      await api.post("/logout");
    } catch (error) {
      console.log("logout not fetched, error : ", error);
    }
  }

  // faculty login...............

  async facultyLogin({email, password, collegeID} : LoginUserAccount) {
    try {
      const response = await api.post(`/login/`, {
        email,
        password,
        collegeID
      });
  
      if (response.data) {
        const user = response.data;
        console.log('Logged in successfully');
        console.log(user)
        return user;

      } else {
        console.error('Login failed:', response.data.error);
      }
    } catch (error : any) {
      throw new Error(error.response.status)
    }
  }

  // student Dashboard section.......

  async userDetails({id, candidate, fatherName, motherName, email, mobNum, gender, cast, dob, nationality, pwd} : UserDetails) {
    try {
      const response = await api.post("/personalDetails/", {
        rid : id,
        father_name : fatherName,
        mother_name : motherName,
        email,
        phone : mobNum,
        sex : gender,
        cast,
        dob,
        nationality,
        pwd
      });

      if(response.data) {
        console.log(response.data)
        console.log("Added successfully..!")

        return response.data;
      } else {
        console.error("error while Adding personal details : ");
      }
    } catch(error : any) {
      console.log(error);
      throw new Error(error.response.status)
    }
  }

  async userAddress({buildingNum, locality, subLocality, state, district, pinCode, contactNum, alternateNum} : UserAddress) {
    try {
      const response = await api.post("/address/", {
        rid : "3",
        building_number : buildingNum,
        locality,
        sublocality : subLocality,
        state,
        district,
        pincode : pinCode,
        contract_number : contactNum,
        alternate_number : alternateNum
      });

      if(response.data) {
        console.log(response.data)
        console.log("Added successfully..!")

        return response.data;
      } else {
        console.error("error while Adding address details : ");
      }
    } catch(error : any) {
      console.log(error);
      throw new Error(error.response.status)
    }
  }
  
  async userQualification({degree, status, year, schoolName, rollCode, totalMarks, obtainedMarks} : UserQualification) {
    try {
      const response = await api.post("/qualification/", {
        rid : "2",
        // degree,
        status,
        year : "2024",
        school : schoolName,
        roll_code : rollCode,
        total_marks : totalMarks,
        obtain_marks : obtainedMarks
      });

      if(response.data) {
        console.log(response.data)
        console.log("Added successfully..!")

        return response.data;
      } else {
        console.error("error while Adding qualification details : ");
      }
    } catch(error : any) {
      console.log(error);
      throw new Error(error.response.status)
    }
  }

  async userDocs({photo, signature, uniqueId, tenthMarksheet, twelfthMarksheet, graduationMarksheet} : UserDocs) {
    try {
      const formData = new FormData();
      formData.append("rid" , "4");
      formData.append("photo", photo || '');
      formData.append("signatue", signature || '');
      formData.append("adhar", uniqueId || '');
      formData.append("tenth", tenthMarksheet || '');
      formData.append("twelth", twelfthMarksheet || '');
      // formData.append("graduationMarksheet", graduationMarksheet || '');

      const response = await api.post("/document/", formData);

      if(response.data) {
        console.log(response.data)
        console.log("Added successfully..!")

        return response.data;
      } else {
        console.error("error while Adding file : ");
      }
    } catch(error : any) {
      console.log(error);
      throw new Error(error.response.status)
    }
  }

  async stdClass({facultyName, course, date, startTime, endTime, description } : FacultyClass) {
    console.log(date, startTime)
    try {
      const response = await api.post(`/class/`, {
        
      });
  
      if (response.data) {
        const user = response.data;
        console.log('');
        console.log(user)
        return user;
  
      } else {
        console.error('Login failed:', response.data.error);
      }
    } catch (error : any) {
      throw new Error(error.response.status)
    }
  }
  
  // faculty features................

  async facultyClass({facultyName, course, date, startTime, endTime, description } : FacultyClass) {
    console.log(date, startTime)
    try {
      const response = await facultyApi.post(`/class/`, {
        faculty_name : facultyName,
        course,
        date,
        startTime,
        endTime,
        description
      });
  
      if (response.data) {
        const user = response.data;
        console.log('Logged in successfully');
        console.log(user)
        return user;
  
      } else {
        console.error('Login failed:', response.data.error);
      }
    } catch (error : any) {
      throw new Error(error.response.status)
    }
  }
}



const djangoService = new DjangoService();

export default djangoService;