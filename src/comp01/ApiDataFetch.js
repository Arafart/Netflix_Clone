import React, { useState } from "react";

import Axios from "axios";

function ApiDataFetch() {
  const [value, setvalue] = useState([]);
  let url = "https://randomuser.me/api/";
  async function fetchData() {
    await Axios.get(url).then((response) => {
      setvalue(response.data.results);
      console.log(response);
    });
  }
  // useEffect(() => {
  //   fetchData();
  // }, []);

  const onSubmit = (e) => {
    e.preventDefault();

    fetchData();
  };
  return (
    <div className="app">
      <button onClick={onSubmit}>SHOWDATAT</button>
      <div>
        <ul>
          {value.map((user, index) => {
            return (
              <li key={index}>
                <img src={user.picture.large} alt="" />
                <p>
                  FirstName: {user.name.title} {user.name.first}
                </p>
                <p>LastName: {user.name.last}</p>
                <p>Phone: {user.phone}</p>
                <p>Gender: {user.gender}</p>
                <p>DOB: {user.dob.age}</p>
                <p>Email: {user.email}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ApiDataFetch;
