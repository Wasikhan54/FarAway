import './index.css';

const Stats = ({ itemList }) => {
    // Count the number of packed items
    const itemsPacked = itemList.filter(item => item.packed).length;

    return (
        <div className="stats">
            <p>You have {itemList.length} items on your list, and you already packed {itemsPacked} items.</p>
        </div>
    );
}

export default Stats;
