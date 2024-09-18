import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import './index.css';

const Packinglist = ({ itemList, setItemList }) => {

    const clearHandler = () => {
        setItemList([]);
    };

    const minusHandler = (indexToRemove) => {
        // Filter out the item that matches the index
        const updatedItemList = itemList.filter((_, index) => index !== indexToRemove);
        setItemList(updatedItemList);
    };
     const checboxHandler = (e) => {
        console.log(e.target.checked)
    }

    return (
        <div style={{ backgroundColor: '#4c3423', height: '70vh' }}>
            <div className='packinglist'>
                {itemList.map((item, index) => (
                    <div key={index} className='item'>
                        <input  type='checkbox' onClick={checboxHandler} />
                        <p>{item.inputText} - {item.itemNumber}</p>
                        <FontAwesomeIcon onClick={() => minusHandler(index)} style={{ color: 'red' }} icon={faXmark} />
                    </div>
                ))}
            </div>
            <div className='button'>
                <select style={{ width: '200px' }}>
                    <option>Sort by input number</option>
                    <option>2</option>
                    <option>3</option>
                </select>
                <button onClick={clearHandler}>Clear all</button>
            </div>
        </div>
    );
};

export default Packinglist;
