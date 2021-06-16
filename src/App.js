import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";

import UserList from "./components/Users/UserList";


function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (uName, uEmail) => {
    setUserList((prevUsersList) => {
      return [...prevUsersList, { name: uName, email: uEmail , id: (Math.random() * 1000000).toString()}];
    });
    

  };
  

  // localStorage.setItem("User", JSON.stringify({userList}));

  return (
    <div className="App">
      <AddUser onAddUser={addUserHandler} />
      <UserList users={userList}/>
    </div>
  );
}

export default App;
