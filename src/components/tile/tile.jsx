import React from 'react'; 
import Button from 'react-bootstrap/Button';
import './tile.css';

export default function Tile({ icon: Icon, category, onClick }) {
    return (
        <Button className='tile' onClick={onClick}>
            <Icon className='tile-icon'/>
            <span className='category'>{category}</span>
        </Button>
    )
}