import React from 'react';
import '../styles/card-collection.scss';
import Card from './Card';

class CardCollection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCard: null
        }
    }

    render() {
        console.log('rendering')
        var cardCollection = this.getCards();
        var cards = this.createCards(cardCollection);

        return (
            <div className="card-collection">
                {cards}
            </div>
        )
    }

    getCards() {
        // TODO - fetch cards from db
        var cardCollection = [];

        return cardCollection;
    }

    createCards(cardCollection) {
        var cards = [];

        for(var i = 0; i < 10; i++) {
            const key = `card-${i}`;
            cards.push(
                <Card
                    key={key}
                    cardClicked={() => this.cardClicked(key)}
                />);
        }

        return cards;
    }

    cardClicked(key) {
        console.log('card clicked ', key)
        this.setState({ selectedCard: key });

        console.log('state:', this.state)
    }
}

export default CardCollection