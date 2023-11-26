import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

export const createBlogSlice = createAsyncThunk(
  "blog/createBlog",
  async ({ updateBlogData, navigate, toast }, { rejectWithValue }) => {
    try {
      const response = await api.createBlog(updateBlogData);
      console.log("createblog", response);
      toast.success("Blog Added Successfully");
      navigate("/");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getAllBlogsSlice = createAsyncThunk(
  "blog/getAllBlogsSlice",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.getAllBlogs();
      console.log("allblog", response.data);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getLatestBlogsSlice = createAsyncThunk(
  "blog/getLatestBlogsSlice",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.getLatestBlogs();
      console.log("allblog", response.data);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getBlogbyIdSlice = createAsyncThunk(
  "blog/getBlogbyIdSlice",
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.getBlog(id);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const searchBlogsSlice = createAsyncThunk(
  "blog/searchBlogsSlice",
  async (searchQuery, { rejectWithValue }) => {
    try {
      const response = await api.getBlogsBySearch(searchQuery);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getBlogsByTagSlice = createAsyncThunk(
  "blog/getBlogsByTagSlice",
  async (tag, { rejectWithValue }) => {
    try {
      const response = await api.getTagBlogs(tag);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getBlogsByUserIdSlice = createAsyncThunk(
  "blog/getBlogsByUserIdSlice",
  async (userid, { rejectWithValue }) => {
    try {
      const response = await api.getBlogsByUserId(userid);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const updateBlogSlice = createAsyncThunk(
  "blog/updateBlogSlice",
  async (object, { rejectWithValue }) => {
    const { updateBlogData, id, toast, navigate } = object;
    console.log(object);
    try {
      const response = await api.updateBlog(updateBlogData, id);
      toast.success("Tour Updated Successfully");
      navigate("/");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const deleteBlogSlice = createAsyncThunk(
  "blog/deleteBlog",
  async ({ id, toast }, { rejectWithValue }) => {
    try {
      const response = await api.deleteBlog(id);
      toast.success("Blog Deleted Successfully");
      console.log("blogdeleteresponse", response.data);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const likeBlogSlice = createAsyncThunk(
  "blog/likeBlogSlice",
  async ({ _id }, { rejectWithValue }) => {
    try {
      const response = await api.likeBlog(_id);
      console.log("likeresponse", response.data);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const blogSlice = createSlice({
  name: "blog",
  initialState: {
    blog: {}, //*singleBlog
    allblog: [], //*allBlogs
    latestblog: [], //*latestBlogs
    userblog: [], //*login Blogs
    searchBlog: [],
    tagsBlog: [],
    error: "",
    loading: false,
  },
 
  extraReducers: {
    [createBlogSlice.pending]: (state, action) => {
      state.loading = true;
    },
    [createBlogSlice.fulfilled]: (state, action) => {
      state.loading = false;
      state.allblog = [action.payload];
      console.log("createBlog", action);
    },
    [createBlogSlice.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [getAllBlogsSlice.pending]: (state, action) => {
      state.loading = true;
    },
    [getAllBlogsSlice.fulfilled]: (state, action) => {
      state.loading = false;
      state.allblog = action.payload;
    },
    [getAllBlogsSlice.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [getLatestBlogsSlice.pending]: (state, action) => {
      state.loading = true;
    },
    [getLatestBlogsSlice.fulfilled]: (state, action) => {
      state.loading = false;
      state.latestblog = action.payload;
      console.log("getLatestBlog", action.payload);
    },
    [getLatestBlogsSlice.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [getBlogbyIdSlice.pending]: (state, action) => {
      state.loading = true;
    },
    [getBlogbyIdSlice.fulfilled]: (state, action) => {
      state.loading = false;
      state.blog = action.payload;
      console.log("getBlogById", action.payload);
    },
    [getBlogbyIdSlice.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [searchBlogsSlice.pending]: (state, action) => {
      state.loading = true;
    },
    [searchBlogsSlice.fulfilled]: (state, action) => {
      state.loading = false;
      state.searchBlog = action.payload;
      console.log("serachBlogaction", action.payload);
    },
    [searchBlogsSlice.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [getBlogsByTagSlice.pending]: (state, action) => {
      state.loading = true;
    },
    [getBlogsByTagSlice.fulfilled]: (state, action) => {
      state.loading = false;
      state.tagsBlog = action.payload;
      console.log("serachBlogaction", action.payload);
    },
    [getBlogsByTagSlice.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [getBlogsByUserIdSlice.pending]: (state, action) => {
      state.loading = true;
    },
    [getBlogsByUserIdSlice.fulfilled]: (state, action) => {
      state.loading = false;
      state.userblog = [...action.payload];
      console.log("getBlogsByUserId", action.payload);
    },
    [getBlogsByUserIdSlice.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [updateBlogSlice.pending]: (state, action) => {
      state.loading = true;
    },
    [updateBlogSlice.fulfilled]: (state, action) => {
      state.loading = false;
      const {
        arg: { id },
      } = action.meta;
      if (id) {
        state.userblog = state.userblog.map((item) =>
          item._id === id ? action.payload : item
        );
      }
    },
    [updateBlogSlice.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [deleteBlogSlice.pending]: (state, action) => {
      state.loading = true;
    },
    [deleteBlogSlice.fulfilled]: (state, action) => {
      state.loading = false;
      const {
        arg: { id },
      } = action.meta;
      console.log("deleteBlogaction", action.meta);
      if (id) {
        state.userblog = state.userblog.filter((item) => item._id !== id);
      }
    },
    [deleteBlogSlice.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [likeBlogSlice.pending]: (state, action) => {},
    [likeBlogSlice.fulfilled]: (state, action) => {
      state.loading = false;
      const {
        arg: { _id },
      } = action.meta;
      console.log("likemeta", action.meat);
      console.log("likepaylod", action.payload);
      if (_id) {
        state.allblog = state?.allblog?.map((item) =>
          item._id === _id ? action.payload : item
        );
      }
    },
    [likeBlogSlice.rejected]: (state, action) => {
      state.error = action.payload.message;
    },
  },
});
export default blogSlice.reducer;
