import React, { useState, useEffect } from "react";
import Axios from "axios";

//css
import "../../assets/css/HandleRequest.css";

const HandleDonate = () => {
  //Variables
  const [RequestTable, setRequestTable] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/login/emp/hd").then((response) => {
      if (response) {
        console.log(response);
        console.log("where is my data...");
        setRequestTable(response.data);
      } else {
        alert("error in retrieving request table");
      }
    });
  },[]);

  //
  const serveRequest = (req_id) => {
    // console.log(`request id : ${req_id}`);
const delUrl = "http://localhost:3001/login/emp/hd/"+req_id;
    Axios.delete( delUrl).then((response) => {
      if (response.data.message) {
        alert(response.data.message);
        window.location = '/login/emp/hr';
      }
    });
  };
  return (
    <div className="handle-request">
      <h1>BLOOD DONATE BY USER TABLE</h1>
      <table className="req-table">
        <thead>
          <th>REQ-ID</th>
          <th>BLOOD GROUP</th>
          <th>UNIT</th>
        </thead>
        <tbody>
          {RequestTable.map((request, i) => {
            return (
              <tr key={i}>
                <td>{request.req_id}</td>
                <td>{request.blood_group}</td>
                <td>{request.unit}</td>
                <button
                  onClick={() => {
                    serveRequest(request.req_id);
                  }}
                >
                  ACCEPT/STORE
                </button>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default HandleDonate;
