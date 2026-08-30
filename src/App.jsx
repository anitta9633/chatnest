import Header from "./components/Header"
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeCarousel from "./components/HomeCarousel";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { useState } from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import About from "./pages/About";
import LipstickDetails from "./pages/LipstickDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AddLipstick from "./Admin/pages/AddLipstick";
import ListLipsticks from "./Admin/ListLipstick";
import EditLipstick from "./Admin/EditLipstick";
import ListUsers from "./Admin/ListUsers";

function App() {
  let [cartCount,setcartCount] = useState(0);
    const handleIncrement = ()=>{
        setcartCount(cartCount + 1);
    }
    const lipsticks =[
    {
      id:1,
      lipstickName:"Sample 01",
      lipstickDescription:"Sample 01 description",
      lipstickPrice:100,
      lipstickPhoto:"https://rukminim2.flixcart.com/image/612/612/xif0q/lipstick/v/2/y/16-nude-shade-waterproof-liquid-lipstick-glambliss-original-imahp9pzkq2sxebn.jpeg?q=70"
    },
    {
      id:2,
      lipstickName:"Sample 02",
      lipstickDescription:"Sample 02 description",
      lipstickPrice:100,
      lipstickPhoto:"https://rukminim2.flixcart.com/image/612/612/xif0q/lipstick/9/k/v/9-herb-enriched-matte-liquid-lipstick-set-of-10-long-lasting-non-original-imahnnzynw67xrfv.jpeg?q=70"
    },
    {
      id:3,
      lipstickName:"Sample 03",
      lipstickDescription:"Sample 03 description",
      lipstickPrice:100,
     lipstickPhoto:"https://rukminim2.flixcart.com/image/612/612/xif0q/lipstick/d/y/q/30-lipstick-set-of-12-matte-velvet-mini-liquid-lipstick-set-for-original-imahzm44gf3kd8mj.jpeg?q=70"
    },
    {
      id:4,
     lipstickName:"Sample 04",
     lipstickDescription:"Sample 04 description",
      lipstickPrice:100,
      lipstickPhoto:"https://rukminim2.flixcart.com/image/612/612/xif0q/lipstick/j/w/i/5-enriched-liquid-lipstick-kit-set-of-5-deeps-and-reds-just-original-imahp9pychaeqcwu.jpeg?q=70"
    },
    {
      id:5,
      lipstickName:"Sample 05",
      lipstickDescription:"Sample 05 description",
      lipstickPrice:100,
      lipstickPhoto:"https://rukminim2.flixcart.com/image/612/612/xif0q/lipstick/j/n/f/9-6-herb-enriched-lipstick-kit-8-matte-brown-mauve-shades-for-original-imahnscy8zykfadp.jpeg?q=7"
    },
    {
      id:6,
      lipstickName:"Sample 06",
      lipstickDescription:"Sample 06 description",
      lipstickPrice:100,
     lipstickPhoto:"https://rukminim2.flixcart.com/image/612/612/xif0q/lipstick/4/l/6/3-8-lipstic-s6-n216-swiss-beauty-enriched-transparent-original-imahfujh8p9ffz6e.png?q=70"
    }
  ]

  return (
     <Router>
     <Header cartCount = {cartCount} />
    <Routes>
      <Route path='/' element={<Home lipsticks = {lipsticks} handleIncrement = {handleIncrement}  />} />
      <Route path='/about' element={<About />}/>
      <Route path='/product/:id' element={<LipstickDetails lipsticks ={lipsticks} />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/register' element={<Register />}/>
      <Route path='/admin/add-lipstick' element={<AddLipstick />}/>
      <Route path='/admin/list-lipstick' element={<ListLipsticks/>}/>
      <Route path='/admin/edit-lipstick/:id' element={<EditLipstick />} />
       <Route path='/admin/list-users' element={<ListUsers />} />
    </Routes>
   <Footer />
    </Router>
  )
}

export default App
