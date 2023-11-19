import axios from 'axios'

const API= axios.create({baseURL:"http://localhost:5000"})

export const signUp= (formValue) => API.post("/users/signup", formValue) //*like Register
export const signIn= (formValue) => API.post("/users/signin", formValue) //*like Register