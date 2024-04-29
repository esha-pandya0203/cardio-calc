import './App.css';
import { useState } from 'react'; 
import Header from './components/header/header';
import Tile from './components/tile/tile';
import Footer from './components/footer/footer';
import Category1Modal from './components/modal/category1';
import { GiStethoscope } from "react-icons/gi";
import { TbActivityHeartbeat } from "react-icons/tb";
import { TbDeviceHeartMonitor } from "react-icons/tb";
import { PiHandHeart } from "react-icons/pi";
import { TbAdjustmentsHeart } from "react-icons/tb";
import { GiHeartOrgan } from "react-icons/gi";
import { MdOutlineMonitorHeart } from "react-icons/md";

function App() {
  const [showModal, setShowModal] = useState(null); 

  const show = (modalId) => { setShowModal(modalId) }
  const hide = () => { setShowModal(null) }

  const tiles = [
    { icon: GiStethoscope, category: 'Category 1'}, 
    { icon: TbActivityHeartbeat, category: 'Category 2'}, 
    { icon: TbDeviceHeartMonitor, category: 'Category 3'}, 
    { icon: PiHandHeart, category: 'Category 4'}, 
    { icon: TbAdjustmentsHeart, category: 'Category 5'}, 
    { icon: GiHeartOrgan, category: 'Category 6'}, 
    { icon: MdOutlineMonitorHeart, category: 'Category 7'}, 
  ]

  const modals = [
    Category1Modal 
  ]

  return (
    <div className="app-container">
      <Header />
      <div className="centered-container">
        <div className='tile-container'>
          {tiles.map((tile, index) => (
            <Tile key={index} icon={tile.icon} category={tile.category} onClick={() => show(index)} />
          ))}
        </div>
      </div>
      <Footer />

      {modals.map((ModalComponent, index) => (
        <ModalComponent key={index} visible={showModal === index} onClose={hide} />
      ))}
    </div>
  );
}

export default App;
