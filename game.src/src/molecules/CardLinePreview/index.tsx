import CardPreview from '../../atoms/CardPreview';
import './styles.css';


const CardLinePreview = (props: any) => {
    const cards = props.data;

    const voices = window.speechSynthesis.getVoices();
    const msg = new SpeechSynthesisUtterance();
    msg.lang = 'en-GB';
    msg.voice = voices[0];
    msg.rate = 0.8;
    msg.pitch = 1;

    const onCardGridClick = (cardValue: any) => {
        console.log('onClick - Card in Grid GridPreview: ' + cardValue);
        
        if(cardValue) {
            msg.text = cardValue;
            speechSynthesis.speak(msg);
        }
    }

    return <>
        { cards.map( (card: any) => 
            <CardPreview key={card['name']} 
                             data={{ card: card['name'], data: card, onCardGridClick }} />
        )}
    </>
}

export default CardLinePreview;