import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import testLandingpage from './testLandingpage'

function testLandingpage() {
  
  return (
    <BrowserRouter>
  
    <Routes>
      <Route path="/testLandingpage" element={<testLandingpage></testLandingpage>}></Route>
      
    </Routes>
   
    </BrowserRouter>
  )
}

export default testLandingpage