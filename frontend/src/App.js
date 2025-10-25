import{BrowserRouter,Routes,Route} from 'react-router-dom';
import Customer from './Customer';
import Home from './Home';
import Create from './Create';
import Read from "./Read";
import Update from './Update';
import Login from './Login';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/customer" element={<Customer/>} />
        <Route path ="/home" element ={<Home />}/>
        <Route path ="/create" element ={<Create/>}/>
        <Route path ="/read/:cust_id" element ={<Read/>}/>
        <Route path ="/update/:cust_id" element ={<Update/>}/>
        <Route path ="/login" element = {<Login/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}




export default App;
