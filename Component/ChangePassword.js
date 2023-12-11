import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import changePassword from "../pages/changePassword";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import Link  from "next/link";
import Button from 'react-bootstrap/Button';
import { Alert } from "react-bootstrap";
import SideBar from "./SideBar";
import Navbar from "./ui/Navbar";





const ChangePassword = () => {
  const oldPasswordRef = useRef()
  const newPasswordRef= useRef()
  const confirmPasswordRef = useRef()
  
  const [isValid, setIsValid] = useState(false);
  const [error, setError]= useState(false)
  const [errorValid, setErrorValid]= useState(false)
  const [verify, setVerify]=useState(false)
  const [isPasswordValid, setIsPasswordValid ] = useState(false)

  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingRef, setLoadingRef] = useState(false);



function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 4000));
}


  const  router = useRouter()

  
  async function changePass(data) {
    try {
      let res = await axios.post("/api/changePassword",data);
      const resend = res.data;
      setLoadingRef(true)
      setIsLoading(true)
      notify(' Successfully changed password')
      setVerify(true)
      setErrorValid(false)
      
  
      setTimeout(()=>{

        router.push('/dashboard')
      },3000)
  
      
    } catch (err) {
      console.log(err, "SomeThing Went Wrong");
      notifyError(' Invalid detail')
      setErrorValid(true)
  
    }

  }


function onSubmitHandler(e){
  e.preventDefault()



  const password = oldPasswordRef.current.value
  const newPassword = newPasswordRef.current.value
  const confirmPassword = confirmPasswordRef.current.value
  // const otp = sendCodeRef.current.value

const data = {
  password,
  newPassword,
  // otp
}
setError(false)
setErrorValid(false)

if (!(newPassword===confirmPassword)) {
  notifyError("Password doesn't match")
  setError(true)
  setErrorValid(false)

  return;
}



setIsPasswordValid(false)
changePass(data)
}

const notify = (msg) =>
toast.success(msg, {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
});

const notifyError = (msg) =>
toast.error(msg, {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
});




useEffect(() => {
  if (isLoading) {
    simulateNetworkRequest().then(() => {
      setLoadingRef(true);
    });
  }
}, [isLoading]);

const handleClick = () =>

setLoadingRef(false);




  return (
    <div className="new-dashboard">
     <SideBar/>
      <section className="profile-sec profile-sects" >
        <div className="container">
          <div className="row justify-content-center">
            <Navbar/>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
            <form className="input-sec" id="form-setting" onSubmit={onSubmitHandler} >
              <div className="line profile-line" id="ch-line"></div>
              <h3 className="heading-text pink-text mt-2 ">
              {/* <Link href={'/dashboard'}>
              <span  className="arrows-icon" style={{ position: "relative", left: "-21%", cursor:"pointer" }}  >
                    <img src={Arrow.src} />
                  </span>
                  </Link> */}
                 Change Password</h3>
                 


              <div className="input-item item-set mt-5">
                <h6 className="item-text">OLD PASSWORD</h6>
                <input ref={oldPasswordRef}  required className="textinput" type="password" name="password" />
              </div>

              <div className="input-item item-set">
                <h6 className="item-text">NEW PASSWORD</h6>
                <input ref={newPasswordRef} required className="textinput" type="password" name="password" />
              {isPasswordValid && <Alert style={{margin:"0"}} variant={"danger"}>Your password must be at least 8 characters long, should contain at least one number or special character and have a mixture of uppercase and lowercase letters.</Alert>}
              </div>

              <div className="input-item item-set mb-5">
                <h6 className="item-text">CONFIRM PASSWORD</h6>
                <input ref={confirmPasswordRef} required className="textinput" type="password" name="confirmpassword" />
                {isValid && (<p style={{ color: "red" }}> Password doesn't match </p>)}
              </div>
         

              {error && (
                  <p style={{ color: "red" }}> Password doesn't match </p>
                )}
                    {errorValid && (
                  <p style={{ color: "red",  }}> Invalid detail </p>
                )}
                       {verify && (
                  <p style={{ color: "green",  }}> Successfully changed password </p>
                )}
              {/* <button  Your password must be at least 8 characters long, should
                      contain at least one number and special character have a
                      mixture of uppercase and lowercase letters.
                href="funds-page.html"
                className="btn btn-round btn-warning w-100 "
                style={{ marginTop: "0px", marginBottom: "0px" }}
                type="submit"
              >
                UPDATE
              </button> */}

              <Button
      variant="primary"
      className="btn btn-round btn-warning w-100 "
      style={{ marginTop: "0px", marginBottom: "0px" }}
      type="submit"
      disabled={isLoading}
      onClick={!isLoading ? handleClick : null}
      >
      {isLoadingRef ? 'Loading…' : '     UPDATE'}
    </Button>
    {/* <Link href={'/emailVerify'}>
              <p className="by-text" style={{cursor:"pointer", marginTop:"5px", fontSize:"13px", color:"#2990DF"}}>
                
                {" "}
             Forgot your password?
              </p>
              </Link> */}
         
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChangePassword
