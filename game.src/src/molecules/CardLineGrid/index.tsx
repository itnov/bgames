import CardLine from '../../atoms/CardLine';
import './styles.css';


const CardLineGrid = (props: any) => {
    const cards = props.data;

    const voices = window.speechSynthesis.getVoices();
    const msg = new SpeechSynthesisUtterance();
    msg.lang = 'en-GB';
    msg.voice = voices[0];
    msg.rate = 0.8;
    msg.pitch = 1;

    const onCardGridClick = (cardValue: any) => {
        console.log('onClick - Card in Grid:' + cardValue);
        
        if(cardValue) {
            msg.text = cardValue;
            speechSynthesis.speak(msg);
        }
    }

    return <>
        { cards.map( (card: any) => 
            <CardLine key={card} data={ { card, onCardGridClick } } />
        )}
    </>
}

export default CardLineGrid;