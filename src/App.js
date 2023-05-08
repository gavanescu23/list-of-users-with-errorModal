import AddUser from "./components/users/AddUser";
import ListOfUsers from "./components/users/ListOfUsers";
import { useState } from "react";

function App() {

  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (usrName, usrAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, {name: usrName, age: usrAge, id: Math.floor(Math.random() * 100) }];
    });
  }


  return (
    <div className="App">
      <AddUser onAddUser={addUserHandler}></AddUser>
      <ListOfUsers users={usersList}></ListOfUsers>
    </div>
  );
}

export default App;
