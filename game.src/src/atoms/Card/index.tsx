import React, { useState } from "react";
import './styles.css';

const CardLine = (props: any) => {
    const { card, onCardGridClick } = props.data;
    const [ isCardActive, setIsCardActive ] = useState(false);

    const onCardClick = (card: { target: any; }) => {
        const cardValue = card.target.value;
        console.log('onClick - onCardClick: ' + cardValue);

        setIsCardActive(!isCardActive);
        onCardGridClick(cardValue);
    }

    return <>
        <button className={`CardButton${isCardActive ? " CardSpin" : ""}`}
                value={card}
                onClick={onCardClick}>{card}</button>
    </>
}

export default CardLine;