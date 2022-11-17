import '../styles/card.scss';
import RadioButtonContent from './RadioButtonContent';

function Card(props) {
    return (
        <div className="card" onClick={props.cardClicked}>
            <RadioButtonContent />
        </div>
    )
}

export default Card