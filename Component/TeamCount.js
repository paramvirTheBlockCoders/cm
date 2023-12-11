import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";
import { useRouter } from "next/router";
import Navbar from "./ui/Navbar";
import SideBar from "./SideBar";

const TeamCount = () => {
  const [referrals, setReferrals] = useState([]);
  const router = useRouter();  // Move the router definition inside the component body
  const [todayMatchCount, setTodayMatchCount] = useState(0);
  const [totalMatchCount, setTotalMatchCount] = useState(0);

  const handleViewClick = (id,uniqueid) => {
    console.log(id, "inside");
    router.push({
      pathname: '/userhis',
      query: {
        id: id,
        uniqueid:uniqueid
      },
    });
  };

  async function rightCount() {
    try {
      let res = await axios.post("/api/leftRightCount");
      console.log(res.data.data, 'ehlloooffk')
      setReferrals(res.data.data.data);
      console.log(res.data.data.todayUsersData,"hea dfjdjfndfiukfh");
      if (res.data.data.todayUsersData && res.data.data.todayUsersData.length > 0) {
        console.log(res.data.data.todayUsersData[0].total,"???????");
        setTotalMatchCount(res.data.data.todayUsersData[0].total);
      } else {
        console.error("Data2 array is empty or undefined");
      }

      if (res.data.data.totalUsersData && res.data.data.totalUsersData.length > 0) {
        setTodayMatchCount(res.data.data.totalUsersData[0].total);
      } else {
        console.error("Data1 array is empty or undefined");
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    rightCount();
  }, []);

  return (
    <div>
       <div style={{ marginBottom: "10px", backgroundColor: "#f8f9fa", padding: "10px", borderRadius: "1px" }}>
              <h5 style={{ margin: 0, color: "#007bff" }}>Total Users: {todayMatchCount}</h5>
            </div>
            <div style={{ marginBottom: "10px", backgroundColor: "#f8f9fa", padding: "10px", borderRadius: "1px" }}>
              <h5 style={{ margin: 0, color: "#007bff" }}>Today's Users: {totalMatchCount}</h5>
            </div>

      <section className="profile-sec">
        <div className="container">
          <div className="row justify-content-center">
            <form className="input-sec" id="ref-code">
              <h3 className="heading-text pink-text mt-2">
                All Users Data
              </h3>
              <table className="table funds-table mt-3" id="funds-color">
                <thead>
                  <tr>
                    <th>Sr. No.</th>
                    <th>UserId</th>
                    <th>Levels</th>
                    <th>TotalTime</th>
                    <th>Todaytime</th>
                    <th>ShowCount</th>
                    <th>ClickCount</th>
                    <th>ViewHistory</th>
                  </tr>
                </thead>
                <tbody>
                  {referrals.length > 0 ? (
                    referrals.map((referral, index) => (
                      <tr key={referral.uniqueid}>
                        <td>{index + 1}</td>
                        <td>{referral.uniqueid}</td>
                        <td>{referral.playlable}</td>
                        <td>{referral.total_time_count}</td>
                        <td>{referral.todayTotalTime}</td>
                        <td>{referral.total_show_count}</td>
                        <td>{referral.total_click_count}</td>
                        <td>
                          <Button color="primary" type="button" onClick={() => handleViewClick(referral.uniqueid,referral.uniqueid)}>
                            View
                          </Button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      {/* <td colSpan="4">No data found</td> */}
                    </tr>
                  )}
                </tbody>
              </table>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamCount;
