
import './App.css';
import Header from './component/Visitor/header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './component/Visitor/login';
import Register from './component/Visitor/register';
import Home from './component/Visitor/Home';
import About from './component/Visitor/About';
import Contact from './component/Visitor/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
    {/* <h1>Reservation de voyage </h1> */}
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
    <Route path='/login' Component={Login}/>
    <Route path='/register' Component={Register}/>

    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
