import React, { useState } from 'react';
import Card from "../card/Card";
import { smallCardStyles } from "../card/Card.css";
import { cardContainerScrollStyles, cardContainerStyles, historyStyles, historyTitleStyles, playerName, playerScore, playerContainerStyles } from "./CardHistory.css";

const CardHistory = ({ cardHistory, score }) => {
    const [nameInput, setNameInput] = useState('');
    const [names, setNames] = useState([{ name: 'MUNIR', score: score }]); // Initial state with "MUNIR"

    const handleAddName = () => {
        setNames(prevNames => [...prevNames, { name: nameInput, score: 0 }]); // Add a new name with a score of 0
        setNameInput(''); // Clear the input field
    };

    return (
        <div className={historyStyles}>
            <div className={historyTitleStyles}>SCOREBOARD</div>
            <div className={playerContainerStyles}>
                {names.map((player, index) => (
                    <div key={index}>
                        <table style={{ width: '100%' }}>
                            <tbody>
                                <tr>
                                    <td className={playerName}>{player.name}</td>
                                    <td className={playerScore}>{player.score}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                ))}
                <div style={{ marginTop: '10px' }}>
                    <input 
                        value={nameInput}
                        onChange={e => setNameInput(e.target.value)}
                        placeholder="Enter a name"
                    />
                    <button onClick={handleAddName}>Add</button>
                </div>
            </div>
        </div>
    );
};

export default CardHistory;
