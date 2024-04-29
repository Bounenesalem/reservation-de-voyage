import { BrowserRouter,Route, Routes } from "react-router-dom"
import Header from "../Header/index.js"
import Home from "../Home/index.js"
import About from "../About.js/index.js"
import Contact from "../Contact/index.js"
import Login from "../Login/index.js"
import Register from "../Register/index.js"
import Users from "../../Users/index.js"
import Protected from "../../Users/protected.js"


function Layout(){
    return(
    
    <BrowserRouter>
        <Header/>
        
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/users' element={<Protected  Cmp={Users}/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/Register' element={<Register/>} />
        </Routes>
        </BrowserRouter>)
}
export default Layout