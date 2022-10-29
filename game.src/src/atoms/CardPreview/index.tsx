import React, { useState } from "react";
import './styles.css';

const CardPreview = (props: any) => {
    const { card, data, onCardGridClick } = props.data;
    
    const [ isCardActive, setIsCardActive ] = useState(false);

    const onCardClick = (data: any) => {
        const card = data;
        console.log('onClick - CardPreview: ' + card['name']);

        setIsCardActive(!isCardActive);
        onCardGridClick(card['spell'] || card['name']);
    }

    return <>
        <button className={`CardButton${isCardActive ? " CardSpin" : ""}`}
                onClick={() => onCardClick(data) }>
            <p>{card}</p>
            {isCardActive && data['src'] && 
                <p>
                    <img src={data['src']} />
                </p>
            }
            {isCardActive && 
                <p><a href={data['href']} target="_blank">read more</a></p>
            }
        </button>
    </>
}

export default CardPreview;