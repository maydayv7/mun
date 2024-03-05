
import{useState} from 'react'
import ham_logo from "../Home/resources/Vector 11.png";
import cross_logo from "../Home/resources/Vector 10.png";
import home_logo from "../Home/resources/Frame 72.png";
import '../Home/mun.css'
import '../Home/mobile_ver.css'
export default function Mnavbar(){
    var [state2, setState2] = useState(true);

    function handleClick() {
        setState2(!state2);
    }

    return (
    
    <div className="blue_block mobile_line_2">
<div className="ham_box_senior">
    <img src={home_logo} className="home_logo_img" />
    <img src={ham_logo} onClick={handleClick} className={state2 ? "ham_logo" : "no_logo"} />
    <img src={cross_logo} onClick={handleClick} className={state2 ? "no_logo" : "cross_logo"} />
</div>
<div className={state2 ? "no_logo" : "hamburger_menu"}>
    <img src={ham_logo} onClick={handleClick} className={state2 ? "ham_logo fix_position" : "no_logo"} />
    <img src={cross_logo} onClick={handleClick} className={state2 ? "no_logo" : "cross_logo fix_position"} />
    <div className="ham_box">
        <div className="link_box"><a href="/" className="link_txt">Home</a></div>
        <div className="link_box"><a href="/" className="link_txt">About Us</a></div>
        <div className="link_box"><a href="/PreviousEditions" className="link_txt">Previous Editions</a></div>
        <div className="link_box"><a href="/ContactUs" className="link_txt">Contact Us</a></div>
    </div>
</div>
</div>)
 }