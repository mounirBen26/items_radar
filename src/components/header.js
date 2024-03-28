
import logo from "../images/express-deal.png"
const Header = () => {
    const today = new Date().toString().slice(0,10)
    return (
        <header>
            <div className="text-container">
            <h2>Best Deals Tracker</h2>
             <p>{today}</p>
            </div>
             
             <div className="logo-container">
                <img src={logo} alt="logo" />
             </div>
        </header>
       
    )
}
export default Header;