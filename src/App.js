import {useState, useEffect} from 'react'
import Header from './components/header'
import Card from './components/cards';
import dealData from './components/data.js';
function App(){
  const [deals, setDeals] = useState(null);
  const getDeals = async () =>{
    try{
      // const response = await fetch('http://localhost:8000/deals',{method:'GET'})
      // const results = await response.json()
      console.log('dealllls',dealData)
      setDeals(dealData)
    } catch(err){
      console.log(err)
    }
  }
  useEffect(()=>{ getDeals();
  },[])
  return (
    <div className="app">
      <Header />
      <nav>
        <button className="primary">Amazon</button>
        <button  className='primary' disabled>Ali Express</button>
        <button className='primary' disabled>Etsy</button>
        <button  className='primary' disabled>Walmart</button>
        <button className='primary' disabled>Alibaba</button>
        <button  className='primary' disabled>Ebay</button>
        <button className='primary' disabled>Rakuten</button>
      </nav>
      <div className="feed">
        <p>Today's Best Deals! <span style={{fontSize:"10px",color:"gray"}}>Hacene Benlazreg @2023</span></p>
        {deals?.map(deal => <Card key={deals.pos} item={deal} />)}
      </div>
    </div>
  );
}

export default App;
