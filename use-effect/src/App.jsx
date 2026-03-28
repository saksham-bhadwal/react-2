import { useState } from 'react'
import Mycomponent from './Mycomponent'
function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <Mycomponent></Mycomponent>
  </>
  )
}

export default App
