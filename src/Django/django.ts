import { api } from "../conf/conf.ts"

export interface CreateUserAccount {
  firstName : string;
  middleName : string;
  lastName : string;
  role : string;
  email : string;
  mobNum ?: string;
  password : string;
}

interface LoginUserAccount {
  email : string;
  password : string;
}

export class DjangoService {

  async createAccount({firstName, middleName, lastName, role, email, mobNum, password} : CreateUserAccount) {
    try {
      const response = await api.post("/users/post/", {
        firstName,
        middleName,
        lastName,
        role,
        email,
        mobNum,
        password
      });

      if(response.data) {
        const { user } = response.data.data;
        console.log("Registered successfully..!")

        return user;
      } else {
        console.error("error while registeration : ");
      }
    } catch(error : any) {
      console.log(error);
      throw new Error(error.response.status)
    }
  }

  async login({email, password} : LoginUserAccount) {
    try {
      const response = await api.post(`/login`, {
        email,
        password,
      });
  
      if (response.data) {
        const { user } = response.data.data;
        console.log('Logged in successfully');

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
}

const djangoService = new DjangoService();

export default djangoService;