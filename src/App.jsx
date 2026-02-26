import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Details from "./components/Details/Details";
import Register from "./components/register/Register";
import Pagenotfound from "./components/pagenotfoun/Pagenotfound"


function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/details/register/:id" element={<Register />} />
        <Route path="/*" element={<Pagenotfound/>}/>
      </Routes>
    </>
  )
}

export default App
