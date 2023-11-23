import { useEffect, useRef } from 'react';
import logoMovita from "../assets/movitaLogo.png"


const Header = ({timeline, ease}) => {
    let logo = useRef(null);
    let menu_item1 = useRef(null);
    let menu_item2 = useRef(null);
    let menu_item3 = useRef(null);
    useEffect(() => {
        timeline.from(logo,  2, {
            opacity: 0,
            y: '100'
        });
        timeline.from([menu_item1, menu_item2, menu_item3], 2 ,{
            opacity: 0,
            y: -200,
            stagger: {
                amount: 1
            },
            ease: ease
        })
    })
  return (
    <div>
    <div className="header">
        <img src={logoMovita} className="w-32" ref = {(el) => logo = el}/>
        <div className="menu">
        <div className="menu-item" ref = {el => menu_item1 = el}>About</div>
        <div className="menu-item" ref = {el => menu_item2 = el}>Journal</div>
        <div className="menu-item" ref = {el => menu_item3 = el}>Contact</div>
    </div>
    </div>
</div>
  )
}

export default Header
