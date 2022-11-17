import React, {useState, useEffect} from 'react';
import '../styles/card-collection.scss';
import Card from './Card';

function CardCollection() {
    const [cards, setCards] = useState([]);
    const [selectedCard, setSelectedCard] = useState(null);

    console.log('rendering')

    useEffect(() => {
        if(cards.length == 0) {
            console.log('getting cards')
            populateCards();
        }
    });

    return (
        <div className="card-collection">
            {cards}
        </div>
    )

    function populateCards() {
        // TODO - fetch cards from db
        setTimeout(() => {
            var cardCollection = [];
            createCards(cardCollection);
        }, 3 * 1000);
    }

    function createCards(cardCollection) {
        var cards = [];

        for(var i = 0; i < 10; i++) {
            const key = `card-${i}`;
            cards.push(
                <Card
                    key={key}
                    cardClicked={() => cardClicked(key)}
                />);
        }

        setCards(cards);
        setSelectedCard(null);
    }

    function cardClicked(key) {
        console.log('card clicked ', key)
        setSelectedCard(key);
    }
}

export default CardCollection