import './index.css';
import { useState } from 'react';

const Hero = ({ itemList, setItemList }) => {
    const [inputText, setInputText] = useState("");
    const [itemNumber, setItemNumber] = useState(1);

    const addHandler = () => {
        // Create a new item and update the list
        const myList = [...itemList];
        myList.push({
            inputText,
            itemNumber,
        });
        setItemList(myList);

        // Clear the input fields
        setInputText("");
        setItemNumber(1 );
    }

    return (
        <div className="form">
            <h3>What do you need for your 😍 trip?</h3>
            <select value={itemNumber} onChange={(e) => setItemNumber(Number(e.target.value))}>
                {
                    ['1', '2', '3', '4', '5'].map((item, index) => (
                        <option key={index} value={item}>{item}</option>
                    ))
                }
            </select>
            <input
                onChange={(e) => setInputText(e.target.value)}
                style={{ width: '19%', fontSize: '16px' }}
                placeholder="Enter your destination"
                value={inputText}
            />
            <button onClick={addHandler}>Add</button>
        </div>
    );
}

export default Hero;
