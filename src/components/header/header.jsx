import React from 'react'; 
import { PiHeartbeatDuotone } from "react-icons/pi"; 
import './header.css';

export default function Header() {
    return (
        <div className='header'>
            <PiHeartbeatDuotone className='icon'/>
            <span className='title'>CardioCalc</span>
        </div>
    )
}