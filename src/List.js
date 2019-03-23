import React from 'react';
import Card from './Card';
import './List.css'

export default function List(props) {
         return (
        <section className='List'>
            <header className='List-header'>
                <h2>{props.header}</h2>
            </header>
            <div className='List-cards'>
               {props.cards.map((card, index
                ) => 
                    <Card 
                    key={index}
                    title={card.title}
                    content={card.content}
                    onDeleteCard={props.deleteCard}
                    />
                )}
               
                <button type='button' className='List-add-button' onClick={()=> props.onAddCard(props.id)}>
                    + Add Random Card
                </button>
            </div>
        </section>
    )
}

List.defaultProps = {
    onAddCard: () => {},
}


