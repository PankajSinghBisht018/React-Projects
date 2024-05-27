import TableFetch from "./components/TableFetch"
import { TableProvider } from "./context/TableContext"
import Navbar from "./components/Navbar"

function App() {
  return (
    <>
<TableProvider>
<Navbar/>
<TableFetch/>
</TableProvider>
 
    </>
  )
}

export default App
