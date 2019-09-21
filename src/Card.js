import React from 'react';
import ReactDOM from 'react-dom';
import './card.css'

class Card extends React.Component {
    
    render (props) {
        return (
        <div className='Card'>
           <button type="button">delete</button>
           <h3>{this.props.title}</h3> 
           <p>{this.props.content}</p>
        </div>
    )
    }
}

export default Card;