import React from 'react'; 
import { MdOutlineCopyright } from "react-icons/md";
import './footer.css';

export default function Footer() {
    return (
        <div className='footer'>
            <span className='copyright-text'>Designed and Developed by Esha Pandya 2024</span>
            <MdOutlineCopyright className='copyright-icon'/>
        </div>
    )
}