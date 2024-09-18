import tree from '../assets/tree.png';
import brief from '../assets/brief.png';

const Logo = () => {
   return (
    <div className='logo'>
        <div className='tree'>
            <img width={100} src={tree} className="App-logo" alt="logo" /> 
        </div>
        <h1 style={{ whiteSpace: 'nowrap',
            fontSize: '40px', fontFamily: 'Arial, sans-serif' , color: '#643c13',
            display: 'flex', justifyContent: 'center', alignItems: 'center'}}   className='title' >FAR AWAY</h1>
        <div className='tree'>
            <img width={100} src={brief} className="App-logo" alt="tree logo" />
        </div>
    </div>
   )
}

export default Logo;
