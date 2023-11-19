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
import { register } from "../reudx/features/AuthSlice";



const initialState = {
  firstName:"",
  lastName:"",
  email: "",
  password:"",
  confimPassword:"",
};

const Register = () => {
  const [formValue, setFormValue] = useState(initialState);
  const { firstName, lastName,email, password,confimPassword } = formValue;
  //!loding and error handle 
  const {loading,error}= useSelector((state)=>({...state.authentication}))
  const dispatch=useDispatch()
  const navigate= useNavigate()

//   //!error handel 
  useEffect(()=>{
    error && toast.error(error)
  }, [error])

  //!login er login redux-toolkit
  const handleSubmit = (e) => {
    e.preventDefault();
    if(password !== confimPassword){
      return toast.error("Password should match")
    }
    if(email && password && firstName && lastName && confimPassword){
      dispatch(register({formValue,navigate,toast }))
    console.log(formValue)
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
        <h5>Sign Up</h5>

        <MDBCardBody>
          <MDBValidation onSubmit={handleSubmit}  className="row g-3">

          <MDBValidationItem feedback='Please fillup first name field' invalid className="col-md-6">
          <MDBInput
            label="First Name"
            type="text"
            value={firstName}
            name="firstName"
            onChange={onInputChnage}
            required

          />
        </MDBValidationItem>

        <MDBValidationItem feedback='Please fillup last name field' invalid className="col-md-6">
          <MDBInput
            label="last Name"
            type="text"
            value={lastName}
            name="lastName"
            onChange={onInputChnage}
            required

          />
        </MDBValidationItem>

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

            <MDBValidationItem feedback='please provide confirm password' invalid className="col-md-12">
              <MDBInput
                label="Password Confirm"
                type="password"
                value={confimPassword}
                name="confimPassword"
                onChange={onInputChnage}
                required
              />
            </MDBValidationItem>

            <div className="col-12">
              <MDBBtn style={{ width: "100%" }} className="mt-2" type="submit" >
     {loading && (
                <MDBSpinner size="sm" role="status" tag="span" className="me-2" />
              )} 
                Register
              </MDBBtn>
            </div>
          </MDBValidation>
        </MDBCardBody>

        <MDBCardFooter>
          <Link to="/login">
            <p>Already have an account ? Sign In</p>
          </Link>
        </MDBCardFooter>

      </MDBCard>
    </div>
  );
};

export default Register;
