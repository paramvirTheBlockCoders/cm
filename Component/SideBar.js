import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useRouter } from "next/router";
import { signOut, userSession, useSession } from "next-auth/react";

const SideBar = () => {

const router = useRouter()

const [tokenData, setTokenData]= useState()
const [avatar, setAvatar] = useState();
const [faStatus,setFaStatus] = useState();





// async function getUserStatus() {
//   try {
//     // const token = localStorage.getItem("token");
//     let res = await axios.post("/api/getuserid");
//     const response = res.data;
//     setTokenData(response.data.data)
//     setFaStatus(res.data.data.data.fa)
//     // console.log(res.data,)
//   } catch (err) {
//     console.log(err);
//   }
// }

// async function getAvatar () {
//   try {
//     let res = await axios.post("/api/getAvatar")
//     const response = res.data;
//     // console.log(response, "to get the response from api to get Avatar")
//     // console.log(response.data.avatar, "to get avatar")
//     setAvatar(response.data.avatar);
//   }catch(err) {
//     console.log(err)
//   }
// }

useEffect(()=>{
    // getUserStatus();
    // getAvatar();
},[])




const { data: session } = useSession();
  // async function createwallet(e) {
  //   e.preventDefault();
  //   try {
  //     const token = localStorage.getItem("token");
  //     let res = await axios.post("/api/wallet", { token: token });
  //     const response = res.data;
  //     router.push("/wallet");
  //   } catch (err) {
  //     console.log(err);
  //     toast.error;
  //   }
  // }


const [toggle,setToggle]=useState(false)

  return (<div>
    <div className={toggle?"":"toggle-sidebar"}>
      <button onClick={()=>setToggle(!toggle)} className="btn primary bi bi-list toggle-sidebar" id="toggle-setting"> <img id="arrow-id" src="/others/arws.webp"/></button>
    {/* <div className="search-bar">
      <form className="search-form d-flex align-items-center" method="POST" action="#">
        <input type="text" name="query" placeholder="Search" title="Enter search keyword"/>
        <button type="submit" title="Search"><i className="bi bi-search"></i></button>
      </form>
    </div> */}
    {/* <!-- End Search Bar --> */}

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

      {/* <!-- ======= Sidebar ======= --> */}
{/* {session ? ( */}
      <aside  className=" sidebar ">
        <ul className="sidebar-nav" id="sidebar-nav">

        <a className="navbar-brand" href="/" id="href-set">
        <h2 id="coin-master-heading">COIN MASTER</h2>              {/* <img id="logo-id" src="/navbar/white-logo.png"/> */}
            </a>
            {/* <div className="profile-menu"> */}
              {/* <img className="profileImage" id="profilePictureMenu" src={avatar} alt=""/>
              <div className="profile-info overflowHidden" title="">{tokenData?.firstName}</div></div> */}

          <li className="nav-item">
            <a className="collap" href="/dashboard">
            {/* <img src="/others/dashboard.png"/> */}
            <i className="fa-regular fa-grid"></i>
            

  <span className="dash-texts">Dashboard</span>
            </a>
          </li>
          {/* <!-- End Dashboard Nav --> */}

          <li className="nav-item">
            <a className="nav-link " data-bs-target="#components-nav" data-bs-toggle="collapse"  href="#"  >
              <i className="fa fa-user " id="i-class"></i>
                 <span className="spanic">ACCOUNT</span>
              <i className="fa fa-chevron-down" id="icon-cd"></i>
              {/* <i className="fa fa-chevron-up"></i> */}
            </a>
            <ul id="components-nav" className="nav-content collapse show" data-bs-parent="#sidebar-nav">

              <li>
                <a href="/profile">
                  <i className="fa fa-circle"></i>
                  <span>MY PROFILE</span>
                </a>
              </li>

              <li>
                <a href="/changePassword">
                  <i className="fa fa-circle"></i>
                  <span>CHANGE PASSWORD </span>
                </a>
              </li>
              {faStatus ?
               <li>
               <a >
                 <i className="fa fa-circle"></i>
                 <span>SECURITY</span>
               </a>
             </li>
             :
             <li>
             <a href="/2fa">
               <i className="fa fa-circle"></i>
               <span>SECURITY</span>
             </a>
           </li>
            }
            </ul>
          </li>

          <li className="nav-item">
            <a className="nav-link " data-bs-target="#network-nav" data-bs-toggle="collapse" href="#"  >
              <i className="fa fa-network-wired " id="i-class"></i>
              <span className="spanic">NETWORK</span>
              <i className="fa fa-chevron-down" id="icon-cd"></i>
            </a>
            <ul  id="network-nav"  className="nav-content collapse show"  data-bs-parent="#network-nav" >
            <li>
                <a href="/direct">
                  <i className="fa fa-circle"></i>
                  <span>DIRECT </span>
                </a>
              </li>
              <li>
                <a href="/downline">
                  <i className="fa fa-circle"></i>
                  <span>DOWNLINE</span>
                </a>
              </li>
              <li>
                <a href="/hierarchy">
                  <i className="fa fa-circle"></i>
                  <span>HIERARCHY</span>
                </a>
              </li>
          
          
              <li>
                <a href="/register">
                  <i className="fa fa-circle"></i>
                  <span >REGISTER</span>
                </a>
              </li>
            </ul>
          </li>

          {/* <li className="nav-item">
            <a  className="nav-link " data-bs-target="#wall-nav" data-bs-toggle="collapse" href="#">
              <i className="fa-solid fa-wallet" id="i-class"></i>
              <span className="spanic">WALLET</span>
              <i className="fa fa-chevron-down" id="icon-cd"></i>
            </a>
            <ul id="wall-nav" className="nav-content collapse show" data-bs-parent="#wall-nav">
            
            <li>
                <a href="">
                  <i className="fa fa-circle"></i>
                  <span  onClick={(e)=>createwallet(e)}>ADD FUND</span>
                </a>
              </li>
              <li>
                <a href="/withdrawInfo">
                  <i className="fa fa-circle"></i>
                  <span> WALLET</span>
                </a>
              </li>
            
              <li>
                <a href="/withdrawDetails">
                  <i className="fa fa-circle"></i>
                  <span> WITHDRAW</span>
                </a>
              </li>

              <li>
                <a href="/walletAddress">
                  <i className="fa fa-circle"></i>
                  <span> White List Address</span>
                </a>
              </li>
       
            </ul>
          </li> */}

          <li className="nav-item">
            {/* <a  className="nav-link " data-bs-target="#incentive-nav" data-bs-toggle="collapse" href="#">
            <i className="fa-solid fa-arrow-up-right-dots" id="i-class"></i>
                                      <span className="spanic">INCENTIVE</span>
              <i className="fa fa-chevron-down" id="icon-cd"></i>
            </a> */}
            <ul id="incentive-nav" className="nav-content collapse show" data-bs-parent="#incentive-nav">
              {/* <li>
                <a href="/directIncome">
                  <i className="fa fa-circle"></i>
                  <span>DIRECT INCOME</span>
                </a>
              </li> */}
            
              {/* <li>
                <a href="matchingIncome">
                  <i className="fa fa-circle"></i>
                  <span>Matching Income</span>
                </a>
              </li> */}
              {/* <li>
                <a href="roiIncome">
                  <i className="fa fa-circle"></i>
                  <span>ROC INCOME</span>
                </a>
              </li> */}
              {/* <li>
                <a href="roiMatchingIncome">
                  <i className="fa fa-circle"></i>
                  <span>ROC Matching INCOME</span>
                </a>
              </li> */}
              {/* <li>
                <a href="">
                  <i className="fa fa-circle"></i>
                  <span>REWARDS</span>
                </a>
              </li> */}
           
              {/* <li>
                <a href="components-accordion.html">
                  <i className="fa fa-circle"></i>
                  <span>REWARD</span>
                </a>
              </li> */}
            </ul>
          </li>

          <li className="nav-item">
            {/* <a  className="nav-link " data-bs-target="#support-nav" data-bs-toggle="collapse" href="#">
            <i className="fa-solid fa-comments"></i>
                          <span className="spanic">SUPPORT</span>
              <i className="fa fa-chevron-down" id="icon-cd"></i>
            </a> */}
            {/* <ul id="support-nav" className="nav-content collapse show" data-bs-parent="#support-nav">
              <li>
                <a href="/addTicket">
                  <i className="fa fa-circle"></i>
                  <span>ADD TICKECT</span>
                </a>
              </li>
              <li>
                <a href="/myTicket">
                  <i className="fa fa-circle"></i>
                  <span>MY TICKET</span>
                </a>
              </li>
      
            </ul> */}
          </li>

          <li className="nav-item">
            <a  className="nav-link " href="/login" onClick={()=>signOut('/login')}>
            {/* <i className="fa-solid fa-comments"></i> */}
                          <span className="spanic">Logout</span>
              {/* <i className="fa fa-chevron-down" id="icon-cd"></i> */}
            </a>
  
          </li>




         
          {/* <!-- End Components Nav --> */}

  
          {/* <!-- End Icons Nav --> */}
        </ul>
      </aside> 
      {/* ):null} */}
      {/* <!-- End Sidebar--> */}
    </div>
    </div>
  );
};

export default SideBar;
