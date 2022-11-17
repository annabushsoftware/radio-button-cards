import '../styles/card-collection.scss';
import Card from './Card';

function CardCollection() {
    var cardCollection = getCards();
    var cards = createCards(cardCollection);

    return (
        <div className="card-collection">
            {cards}
        </div>
    )
}

function getCards() {
    // TODO - fetch cards from db
    var cardCollection = [];

    return cardCollection;
}

function createCards(cardCollection) {
    var cards = [];

    for(var i = 0; i < 10; i++) {
        const key = `card-${i}`;
        cards.push(<Card key={key} />);
    }

    return cards;
}

export default CardCollection