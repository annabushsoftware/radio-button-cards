import React, {useState, useEffect, useCallback} from 'react';
import '../styles/card-collection.scss';
import collectionJson from '../cardsCollection.json';
import Card from './Card';

function CardCollection() {
    // state
    const [initialLoad, setInitialLoad] = useState(true);
    const [cardsData, setCardsData] = useState([]);

    // callbacks
    const populateCards = useCallback(() => {
        console.log('in callback', initialLoad)
        if(initialLoad || cardsData.length == 0) {
            console.log('fetching cards');
            // TODO - fetch cards from db
            setTimeout(() => {
                setInitialLoad(false);

                var stringified = JSON.stringify(collectionJson)
                var cardCollection = JSON.parse(stringified);

                cardCollection.cards.forEach((card) => {
                    card.selected = false;
                })
                setCardsData(cardCollection.cards);
            }, 3 * 1000);
        }
    }, [initialLoad, cardsData, setCardsData])

    function cardClicked(id) {
        console.log('card clicked ', id);

        var copy = cardsData.map(card => {
            var newCard = Object.assign(card, {});
            if(id == card.id) {
                newCard.selected = true;
            } else {
                newCard.selected = false;
            }
            return newCard;
        })
        console.log('copy: ', copy)

        setCardsData(copy)
    }

    // effects
    useEffect(() => {
        populateCards();
    }, [populateCards]);

    // render
    console.log('rendering')

    const cards = () => {
        var cards = [];

        cardsData.forEach((cardData) => {
            cards.push(
                <Card
                    key={'card-' + cardData.id}
                    selected={cardData.selected}
                    cardClicked={() => cardClicked(cardData.id)}
                />);
        })

        return cards;
    }

    return (
        <div className="card-collection">
            {cards()}
        </div>
    )
}

export default CardCollection