import MyForm from './assets/MyForm';
import BgVideo from './assets/BgVideo';
import  NavBar  from './assets/NavBar';
//import BgVideo from './video/cyber.mp4'


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
   <div>
    <NavBar />
    <BgVideo/>
<MyForm className= "form"/>
   </div>
    
  );
}

export default App;
