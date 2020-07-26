import React from 'react'
import Sten1 from '../images/s-20.webp'
import Noteten from '../images/note10.png'
import Stwenty from '../images/s20-ultra.webp'
import Zflip1 from '../images/zflip.png'
import StenLite from '../images/s10-lite.png'
import useWebAnimations, {fadeInDown} from "@wellyshen/use-web-animations";

import '../App.css'
const Product = () => {
    const {ref} = useWebAnimations({...fadeInDown})
    return (
        <div className="product" ref={ref}>
            <div className="left-p">
                <div>
                <img src={Sten1} alt="samsung s10"/>
                <h6>Galaxy S 20+</h6>
                </div>
                <div>
                <img src={Noteten} alt="samsung note 10"/>
                <h6>Galaxy Note 10+</h6>
                </div>
            </div>
            <div className="center-p">
                <img src={Stwenty} alt="s20 ultra"/>
                <h4>Galaxy S 20 Ultra</h4>
            </div>
            <div className="right-p">
            <div>
                <img src={Zflip1} alt="samsung s10"/>
                <h6>Galaxy Z Flip</h6>
                </div>
                <div>
                <img src={StenLite} alt="samsung note 10"/>
                <h6>Galaxy S 10 lite</h6>
                </div>
            </div>
            </div>
    )
}

export default Product;