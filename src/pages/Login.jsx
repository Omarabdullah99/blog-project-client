// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCardFooter,
  MDBValidation,
  MDBValidationItem,
  MDBBtn,
  MDBIcon,
  MDBSpinner,
} from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'
import {toast} from 'react-toastify'
import { login } from "../reudx/features/AuthSlice";
// import { login } from "../redux/features/authSlice";

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const [formValue, setFormValue] = useState(initialState);
  const { email, password } = formValue;
  //!loding and error handle 
  const {loading,error}= useSelector((state)=>({...state.authentication}))
  console.log("loginerror",error)
  const dispatch=useDispatch()
  const navigate= useNavigate()

  //!error handel 
  useEffect(()=>{
    error && toast.error(error)
  }, [error])

  //!login er login redux-toolkit
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Email:", email)
    // console.log("password:", password)
    if(email && password){
      dispatch(login({formValue,navigate,toast }))
    }

  };
  const onInputChnage = (e) => {
    let { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  return (
    <div
      className="login"
      style={{
        margin: "auto",
        padding: "15px",
        maxWidth: "450px",
        alignContent: "center",
        marginTop: "120px",
      }}
    >
      <MDBCard alignment="center">
        <MDBIcon fas icon="user-circle" className="fa-2x" />
        <h5>Sign In</h5>

        <MDBCardBody>
          <MDBValidation onSubmit={handleSubmit}  className="row g-3">
            <MDBValidationItem feedback='Please Choose a username' invalid className="col-md-12">
              <MDBInput
                label="Email"
                type="email"
                value={email}
                name="email"
                onChange={onInputChnage}
                required

              />
            </MDBValidationItem>

            <MDBValidationItem feedback='please provide password' invalid className="col-md-12">
              <MDBInput
                label="Password"
                type="password"
                value={password}
                name="password"
                onChange={onInputChnage}
                required
              />
            </MDBValidationItem>

            <div className="col-12">
              <MDBBtn style={{ width: "100%" }} className="mt-2" type="submit" >
              {loading &&(
                <MDBSpinner size="sm"
                role="status"
                tag="span"
                className="me-2" />
              )}
                Login
              </MDBBtn>
            </div>
          </MDBValidation>
        </MDBCardBody>

        <MDBCardFooter>
          <Link to="/register">
            <p> Dont have an account ? Sign Up</p>
          </Link>
        </MDBCardFooter>

      </MDBCard>
    </div>
  );
};

export default Login;
