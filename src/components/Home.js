import React from 'react'
import Product from './Product'
import '../App.css'
import Sten from '../images/s20.webp'
import useWebAnimations, {fadeInUp} from "@wellyshen/use-web-animations";


const Home = () => {
    const { ref } = useWebAnimations({...fadeInUp,
        keyframes : [
            {transform : 'translateY(0)'},
            {transform : 'translateY(10px)', filter : 'drop-shadow(0 10px 4px #757474)'},
            {transform : 'translateY(0)'},
        ],
        timing : {
            duration:2000,
            iterations: Infinity,
            easing : "ease-in-out",
            playbackRate: -2
        }
    })
    return (
        <div>
            <div className="hero" >
                <div className="hero-text">
                    <h2>
                        This is the phone that will change photography
            </h2>
                    <p>
                        Meet Galaxy S20, S20+, and S20 Ultra. With revolutionary 8K Video Snap changing how you capture not just video, but photography
            </p>
                </div>
                <div ref={ref}>
                    <img src={Sten} alt="samsung s10" />
                </div>
            </div>
            {/* hero */}
            
        <Product/>

        </div>
    )
}

export default Home;