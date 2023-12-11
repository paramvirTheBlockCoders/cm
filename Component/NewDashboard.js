import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { signOut } from "next-auth/react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/router";
import Button from "react-bootstrap/Button";
import SideBar from "./SideBar";
import Spinner from "react-bootstrap/Spinner";
import Navbar from "./ui/Navbar";
import ProgressBar from "react-bootstrap/ProgressBar";
const dashboard = () => {
  const [usdAmt, setUsdAmt] = useState();
  const [name, setName] = useState(null);
  const [myBv, setMyBv] = useState(null);
  const [myRew, setMyRew] = useState(null);
  const [isAddressAvailable, setIsAddressAvailable] = useState(null);
  // const [income, setIncome] = useState();
  const [userInfo, setUserInfo] = useState();
  const router = useRouter();
  const [amounts, setAmounts] = useState();
  const [trueStatus, setTrueStatus] = useState();
  const [settings, setSetting] = useState(null);
  const [isLoadingRef, setLoadingRef] = useState(false);
  const [investmentAmt, setInvestmentAmt] = useState(null);
  const [earningAmt, setEarningAmt] = useState(null);
  const [totalActivations, setTotalActivations] = useState();
  const [PV, setPV] = useState();
  const [received, setReceived] = useState();
  const [pending, setPending] = useState();
  const [max, setMax] = useState();

  // async function getUserStatus() {
  //   try {
  //     const token = localStorage.getItem("token");
  //     let res = await axios.post("/api/getuserid", { token: token });
  //     const response = res.data;

  //     console.log(response, "here for you dat");
  //     setUserInfo(response.data.data);

  //     setTrueStatus(response.data.data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  // async function getLeftRightPv() {
  //   try {
  //     const token = localStorage.getItem("token");
  //     let res = await axios.post("/api/rightLeftPV", { token: token });
  //     const response = res.data;

  //     // console.log(response.data,"here for pvs data" );
  //     setPV(response.data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  useEffect(() => {
    // getLeftRightPv();
  }, []);

  // async function getDashboardData() {
  //   try {
  //     const token = localStorage.getItem("token");
  //     let res = await axios.post("/api/newDashboard", { token: token });
  //     const response = res.data.data;
  //     console.log(response, "new Dashboard data");
  //     // setIncome(res.data.data);
  //     setInvestmentAmt(response.myInvestment);
  //     setEarningAmt(response.totalEarnings);
  //     // setAmounts(response.data.data.income)
  //     setSetting(res.data.data.sum?.amount);
  //     setPending(response.totalEarnings / 100);
  //     setReceived(response.myPendingReturn / 100);
  //     setMax(response.myReturnInvestment/100);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }
  console.log(max, "here pending amt");
  useEffect(() => {
    // console.log(settings);
  }, [settings]);

  // async function getDirectIncome() {
  //   try {
  //     const token = localStorage.getItem("token");
  //     let res = await axios.post("/api/getDirectIncome", { token: token });
  //     const response = res.data;
  //     console.log(response, "to get dataaaaa");
  //     // setIncome(res.data.data);

  //     setAmounts(response.data.data.income);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  useEffect(() => {
    // getUserStatus();
    // getDashboardData();
    // getDirectIncome()
  }, []);

  // async function createwallet(e) {
  //   e.preventDefault();
  //   try {
  //     setLoadingRef(true);

  //     let res = await axios.post("/api/wallet");
  //     router.push("/wallet");
  //   } catch (err) {
  //     console.log(err);

  //     setLoadingRef(false);
  //   }
  // }

  function logoutHandler() {
    window.localStorage.clear();
    signOut();
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

  async function popSubmit() {
    // router.push("/activateWallet")
  }

  return (
    <div className="new-dashboard">
      <SideBar />
      <section className="profile-sec profile-sects">
        <div className="container">
          <div className="row">
            <Navbar />
            <form className="funds-sec">
              <h3>
                {" "}
                {/* <span
                  style={{
                    color: "#04031c!important",
                    fontWeight: "600",
                  }}
                >
                  {" "}
                  Welcome {userInfo?.firstName} !{" "}
                </span>{" "} */}
              </h3>

              <div
                className="left-dashboard  first-set mt-1"
                id="leftt-section"
              >
                {" "}
                <h5>Coint Master Activity</h5>
              </div>

              <ToastContainer />

              <div className="col-head mt-1 " id="col-head">
                <h6 className="mt-2 mb-4" style={{ fontSize: "14px" }}>
                  {" "}
                </h6>

                <div className="col-md-12 left-headSec">
                  <div
                    className="link-head  "
                    id="first-sec"
                    style={{ justifyContent: "space-between" }}
                  >
                    <Link href={"/teamCount"}>
                      <div
                        className="link-dashboard  first-set"
                        id="lr-section"
                      >
                        {" "}
                     
                        <p className="dashboard-txts">
                          {" "}
                          {/* ${income?.myInvestment} */}
                        </p>
                        <h6 className="dashboard-txt"> ALL USERS{myBv}</h6>
                      </div>
                    </Link>
                    <Link href={"/teamCount"}>
                      <div
                        className="link-dashboard  first-set"
                        id="lr-section"
                      >
                        {" "}
                     
                        <p className="dashboard-txts">
                          {" "}
                          {/* ${income?.myInvestment} */}
                        </p>
                        <h6 className="dashboard-txt"> PERFORMANCE{myBv}</h6>
                      </div>
                    </Link>

                 

                    <Link href={"/directIncome"}>
                      <div
                        className="link-dashboard first-set"
                        id="invest-item"
                      >
                        
                        <p className="dashboard-txts">
                          {/* ${income?.totalEarnings} */}
                        </p>
                        <h6 className="dashboard-txt"> PURCHASE USERS </h6>
                        {/* <p className="dashboard-txts"> {income?.balance.roi}%</p> */}
                      </div>
                    </Link>

                    <Link href="/directIncome">
                      <div
                        className="link-dashboard first-set"
                        id="faquery-item"
                      >
                        
                        <p className="dashboard-txts">
                          {" "}
                          {/* ${income?.directIncome} */}
                        </p>
                        <h6 className="dashboard-txt"> DIRECT INCOME </h6>
                      </div>
                    </Link>

                   

                    {/* <button
                      type="submit"
                      style={{ backgroundColor: "#fff" }}
                      className="link-dashboard first-set"
                      id="teams-item"
                      onClick={(e) => createwallet(e)}
                    >
                      {isLoadingRef ? (
                        <div>
                          <Spinner animation="border" variant="warning" />
                        </div>
                      ) : (
                        <div className="funds-btnset">
                          <i
                            className="fa-solid fa-wallet"
                            id="dashboard-icons"
                          ></i>
                          <p className="dashboard-txts"> $0.00</p>
                          <h6 className="dashboard-txt"> ADD FUNDS</h6>
                        </div>
                      )}
                    </button> */}

                    {/* <Link href={"/teamCount"}>
                      <div
                        className="link-dashboard  first-set"
                        id="teams-item"
                      >
                        {" "}
                        <i
                          className="fa-solid fa-users"
                          id="dashboard-icons"
                        ></i>
                        <p className="dashboard-txts">{income?.totalDirects}</p>
                        <h6 className="dashboard-txt "> TEAM {myBv}</h6>
                      </div>
                    </Link> */}

                    {/* <Link href="/hierarchy">
                      <div className="link-dashboard" id="third-itemes">
                        <i
                          className="fa-solid fa-users-between-lines"
                          id="dashboard-icons"
                        ></i>
                        <h6 className="dashboard-txt"> HIERARCHY</h6>
                      </div>
                    </Link> */}

                  
                 

                   

                   
                  </div>
                </div>

                <div className="col-md-3"></div>
              </div>

             
            </form>

            {/* <!-- ======= Skills Section ======= --> */}
            {/* <section id="skills" className="skills section-bg">
              <div className="container">
                <div className="row skills-content">
                  <div className="col-lg-6" id="col-left" data-aos="fade-up">
                    <div className="progress">
                      <span className="skill">
                        MAX REWARDS{" "}
                        <i className="val">${income?.myReturnInvestment}</i>
                      </span>
                      <div className="progress-bar-wrap">
                        <ProgressBar now={income?.myReturnInvestment} />;
                      </div>
                    </div>

                    <div className="progress">
                      <span className="skill">
                        RECEIVED REWARDS{" "}
                        <i className="val">${income?.totalEarnings}</i>
                      </span>
                      <div className="progress-bar-wrap">
                        <ProgressBar
                          now={income?.myReturnInvestment * pending}
                        />
                        ;
                      </div>
                    </div>

                    <div className="progress">
                      <span className="skill">
                        PENDING REWARDS{" "}
                        <i className="val">${income?.myPendingReturn}</i>
                      </span>
                      <div className="progress-bar-wrap">
                        <ProgressBar now={max*pending} />;
                      </div>
                    </div>
                  </div>

                  <div
                    className="col-lg-6"
                    id="col-right"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <div className="progress">
                      <span className="skill">
                        TEAM A <i className="val">0%</i>
                      </span>
                      <div className="progress-bar-wrap">
                        <ProgressBar label={`${0}%`} />;
                      </div>
                    </div>

                    <div className="progress">
                      <span className="skill">
                        TEAM B <i className="val">0%</i>
                      </span>
                      <div className="progress-bar-wrap">
                        <ProgressBar label={`${0}%`} />;
                      </div>
                    </div>

                    <div className="progress">
                      <span className="skill">
                        TEAM C <i className="val">0%</i>
                      </span>
                      <div className="progress-bar-wrap">
                        <ProgressBar label={`${0}%`} />;
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section> */}
            {/* <!-- End Skills Section --> */}
          </div>
        </div>
      </section>

      <div
        className="modal fade"
        id="exampleModalToggle"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabindex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalToggleLabel"></h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <h4>5% to 10% Per month</h4>
              <p>Up to 3x with all work & non worthy incoms.</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <a
                href="/activateWallet"
                type="button"
                className="btn btn-primary"
              >
                Next
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default dashboard;
