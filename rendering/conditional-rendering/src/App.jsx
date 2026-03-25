import UserGreeting from "./UserGreeting";
import List from "./list";

function App() {

  const fruits = [{ id: 1, name: "apple", calories: 95 },
    { id: 2, name: "orange 1", calories: "ds" },
    { id: 3, name: "banana", calories: 105 },
    { id: 4, name: "mango", calories: 243 }]


  return (
 <>
    <List items ={fruits}> </List>
    <UserGreeting isLogged = {true} username ="saksham" ></UserGreeting>

 </>
  )
}

export default App;
