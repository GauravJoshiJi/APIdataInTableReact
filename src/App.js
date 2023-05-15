import React, { useEffect, useState } from "react";
import UserData from "./component/UserData";

const API = "https://jsonplaceholder.typicode.com/users";

function App() {
  const [users, setUser] = useState([]);
  const fetchUsers = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();

      if (data.length > 0) {
        setUser(data);
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers(API);
  }, []);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          <UserData users={users} />
        </tbody>
      </table>
    </>
  );
}

export default App;
