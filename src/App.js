import React, { useEffect } from "react";
const API = "https://jsonplaceholder.typicode.com/users";

function App() {
  const fetchUsers = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers(API);
  }, []);
  return <h1>React Table</h1>;
}

export default App;
