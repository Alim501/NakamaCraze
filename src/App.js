import Header from './Components/Header';
import { Image } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './Assets//logo.gif'
import logo2 from './Assets//logo2.png'
import Characters from './Components/Characters';
import Delivery from './Components/Delivery';
import Contacts from './Components/Contacts';
import Mai from './Components/Mai';
import { useState, useEffect } from 'react';
import Goods from './Components/Goods';
import 'swiper/css';
function App() {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }, [])
  return (
    <div className='App'>
      <Characters></Characters>
        <Goods></Goods>
        <Mai></Mai>
      <div>
        
        
      {/* <Header></Header>
        <div className="bg">
          
          <div className=' w-sm-100 text-center mx-auto d-flex align-items-center h-100'>
            {
              loading ?
                  <Image fluid
                  src={logo2}/>
                :
                <Image fluid
                  src={logo}
                />
            }
          </div>
        </div>
         <Characters></Characters>
        <Goods></Goods>
        <Misa></Misa>
        <Lucy></Lucy>
        <Mai></Mai>
        <Delivery></Delivery>
        <Contacts></Contacts>  */}
      </div>
    </div>
  );
}

export default App;
