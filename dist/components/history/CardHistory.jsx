import React, { useState } from 'react';
import Card from "../card/Card";
import { smallCardStyles } from "../card/Card.css";
import { cardContainerScrollStyles, cardContainerStyles, historyStyles, historyTitleStyles, playerName, playerScore, playerContainerStyles, addButton, inputField,  inputContainer} from "./CardHistory.css";

const CardHistory = ({ cardHistory, score }) => {
    const [nameInput, setNameInput] = useState('');
    const [names, setNames] = useState([]); // Initial state with "MUNIR"

    const handleAddName = () => {
        setNames(prevNames => [...prevNames, { name: nameInput, score: 0 }]); // Add a new name with a score of 0
        setNameInput(''); // Clear the input field
    };

    return (
        <div className={historyStyles}>
            <div className={historyTitleStyles}>SCOREBOARD</div>
            <div className={playerContainerStyles}>
    {names.map((player, index) => (
        <div key={index} style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
            <div className={playerName}>{player.name}</div>
            <div className={playerScore}>{player.score}</div>
        </div>
    ))}
</div>


            <div className={inputContainer}>
                <input 
                    className={inputField}
                    value={nameInput}
                    onChange={e => setNameInput(e.target.value)}
                    placeholder="Enter a name"
                />
                <button className={addButton} onClick={handleAddName}>Add</button>
            </div>
        </div>
    );
    
};

export default CardHistory;
