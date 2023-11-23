import axios from 'axios'

const API= axios.create({baseURL:"http://localhost:5000"})

//*middleware handle backend and fontend
//token backedne patabo
API.interceptors.request.use((req)=>{
    if(localStorage.getItem("blogprofile")){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("blogprofile")).token}`
    }
    return req
})


export const getAllBlogs=()=>API.get("/blog/allblogs") //*get All blogs
export const getBlog=(id)=>API.get(`/blog/${id}`) //*get blog by id
export const getBlogsBySearch = (searchQuery) => API.get(`/blog/search?searchQuery=${searchQuery}`);

export const signUp= (formValue) => API.post("/users/signup", formValue) //*like Register
export const signIn= (formValue) => API.post("/users/signin", formValue) //*like Register

export const createBlog= (updateBlogData)=>API.post("/blog/createblog", updateBlogData)
export const getBlogsByUserId=(userid)=>API.get(`/blog/userblogs/${userid}`) //this id user id
export const updateBlog = (updateBlogData, id) => { API.patch(`/blog/${id}`, updateBlogData);}
export const deleteBlog=(id)=>API.delete(`/blog/deleteblog/${id}`)