import { BrowserRouter, Route, Routes } from "react-router-dom";
import FromData from "./components/FromData";
import Login from "./components/Login";
import { ToastContainer, toast } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route  path="/" element={<FromData/>}/>
          <Route  path="/login" element={<Login/>}/>

        </Routes>
      </BrowserRouter>
      
    {/* <FromData/> */}
    <ToastContainer />
    
    </div>
  );
}

export default App;
