import AddTodo from "./components/AddTodo"
import Todos from "./components/Todo"
import { Provider } from "react-redux"
import { store } from "./app/store"

function App() {


  return (
    <>
    <Provider store={store}>

      <AddTodo></AddTodo>
      <Todos></Todos>
    </Provider>
    </>
  )
}

export default App
