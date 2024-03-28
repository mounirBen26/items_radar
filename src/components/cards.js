
const Card = ({item}) => {
    const titleFormatted = item.title.slice(0,25)+ '...'
    const priceDrop = ((item.price_strikethrough - item.price) / item.price_strikethrough * 100).toFixed(0)
    return(
        <div className="card">
            <div className="img-container">
                <img src={item.url_image} alt={item.title} />
            </div>
            <div className="text-container">
                <p> {titleFormatted}</p>
                <p><span style={{fontWeight:400}}>Rating:</span> {item.rating}</p>
                <p style={{color:'red',fontWeight:'600',fontSize:"13px"}}>Price dropped from {item.price_strikethrough}$  to  {item.price}$</p>
            </div>
            <div className="info-container">
                <p className="priceDrop">{priceDrop}%</p>
                <a href={`https://www.amazon.com/${item.url}`}>Visit!</a>
            </div>
           
        </div>
    )
}
export default Card;