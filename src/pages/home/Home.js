import Header from '../../components/header/Header';
import './Home.css'
import { Slide, Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { MdStarBorder } from "react-icons/md";
import Footer from '../../components/footer/Footer';
import home_IR_1 from '../../assets/home_IR_1.jpg'
import home_IR_2 from '../../assets/home-IR_2.jpg'
import home_IR_3 from '../../assets/home_IR_3.jpg'
import Home_about_1 from '../../assets/Home_about_1.jpg'
import Home_about_2 from '../../assets/home_about_2.jpg'
import Home_hero__bg1 from '../../assets/ivana-cajina-c_130xVIRHA-unsplash.jpg'
import Home_hero__bg2 from '../../assets/jf-martin-E-Zl0aLRQK8-unsplash.jpg'
import Home_hero__bg3 from '../../assets/zbynek-burival-GrmwVnVSSdU-unsplash.jpg'
import { useNavigate } from 'react-router-dom';
import { FaTruckMoving } from "react-icons/fa";
import { FaGasPump } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { IoMdCar } from "react-icons/io";
import { useEffect, useRef, useState } from 'react';

function Home() {
    const containerRef1 = useRef(null)
    const [isVisible, setIsVisible] = useState(false)
    const [test1, setTest1] = useState(false)
    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)
    const [count3, setCount3] = useState(0)
    const callbackFunction1 = (entries) => {
        const [ entry ] = entries
        setTest1(entry.isIntersecting)
        if (test1 == true) {
            if ( count <= 10) {
                setCount(count + 1)
            }
            if ( count2 <= 403) {
                setCount2(count2 + 1)
            }
            if ( count3 <= 407) {
                setCount3(count3 + 2)
            }
        }
    }

    const options1 = {
        root: null,
        rootMargin: "0px",
        threshold: 0
    }

    useEffect(() => {
        const observer1 = new IntersectionObserver(callbackFunction1, options1)
        if (containerRef1.current) observer1.observe (containerRef1.current)
      return () => {
        if (containerRef1.current) observer1.unobserve(containerRef1.current)
      }
    }, [containerRef1, options1])
    
      const divStyle = {
        backgroundSize: 'cover',
        minHeight: '60vh',
      }
      const slideImages = [
        {
          url: Home_hero__bg2,
          caption: 'Slide 1',
          h3: 'Energy for the future',
          h1: 'Evolving energy for today and tomorrow',
          p: "Join us on this journey of transformation. Let's bridge the gap between today's demands and tomorrow's aspirations. Together, we can shape a future fueled by responsibility, powered by progress, and ignited by the limitless potential of LNG.",
        },
        {
          url: Home_hero__bg1,
          caption: 'Slide 2',
          h3: 'Nuturing the future',
          h1: 'Sowing seed of clean energy',
          p: "In a world demanding cleaner, more efficient energy, LNG stands ready. We don't just store and sell Liquefied Natural Gas, we unlock its potential to fuel progress for industries, communities, and lives. Imagine cleaner power generation, efficient transportation, and reliable energy access, even in remote regions.",
        },
        {
          url: Home_hero__bg3,
          caption: 'Slide 3',
          h3: 'Nigerian through and through',
          h1: 'For every family out there',
          p: "We believe energy isn't just about powering homes and industries, it's about fueling the very heart of our communities. We store and sell Liquefied Natural Gas, but what truly ignites us is the difference it makes in people's lives.",
        },
      ];  
      
      const buttonStyle = {
        display: 'none'
    };
    
    const properties = {
        prevArrow: <button style={{ ...buttonStyle }}></button>,
        nextArrow: <button style={{ ...buttonStyle }}></button>
    }

    const navigate = useNavigate()

    

    return(
        <div>
            <Header />
            <div className='home__main'>
            <section className="slide-container ">
                <Fade {...properties}>
                {slideImages.map((slideImage, index)=> (
                    <div key={index}>
                    <div  className="home__main__section__one" style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}>
                        <h3>{slideImage.h3}</h3>
                        <h1>{slideImage.h1}</h1>
                        <p>{slideImage.p}</p>
                        <button  onClick={() => {navigate('/about/glance')}}>Learn more</button>
                    </div>
                    </div>
                ))} 
                </Fade>
                <div >
                    
                </div>
            </section>
            <section  className='home__main__section__two'>
                <div className='home__main__section__two__start'>
                    <h3>We are Ulla energy</h3>
                    <h1>We are a Leading Downstream Oil & Gas Company in Nigeria</h1>
                    <hr />
                    <p>Ulla energy is an Indigenous Oil and Gas Company active across the entire downstream value chain, with emphasis on the petroleum trading, marketing, distribution and retail segments of the Nigerian Oil and Gas Sector. The company was founded in 2019 with Head Quarters in Lagos, one of Africa’s largest business hubs.</p>
                    <div  ref={containerRef1}className='home__main__section__two__start__counter'>
                        <div>
                            <h3>{count2} m NGN</h3>
                            <p>Revenue 2023</p>
                        </div>
                        <div>
                            <h3>{count3} K+ bo</h3>
                            <p>Distributed in 2023</p>
                        </div>
                        <div>
                            <h3>{count}-year</h3>
                            <p >Licence extension</p>
                        </div>
                    </div>
                </div>
                <div className='home__main__section__two__end'>
                    <img src={Home_about_1} alt='' />
                    <img src={Home_about_2} alt='' />
                </div>
            </section>
            <section className='home__main__section__three' >
                <div className='home__main__section__three__start'>
                    <div>
                        <h1>What We Do</h1>
                        <hr />
                    </div>
                    <p>We offer one of the largest offshore liquid bulk terminals (SPM/CBM) in Africa to provide efficient discharge of products for operators, complemented by world class storage facilities and retail outlets/channels in all six geopolitical zones in Nigeria.  We continually develop strategic infrastructure to facilitate the operational efficiency of our integrated bouquet of services.</p>
                </div>
                <div className='home__main__section__three__end'>
                    <div>
                        <img src={home_IR_1} alt='' className='home__main__section__three__end__img'/>
                        <h1>Always on the move</h1>
                        <p>Ulla energy is continually working to provide energy when needed.</p>
                        <h3 onClick={() => {navigate('/operations')}}>View our operations</h3>
                    </div>
                    <div>
                        <img src={home_IR_2} alt='' className='home__main__section__three__end__img'/>
                        <h1>Performance Driven</h1>
                        <p>Our performance within the sector has resulted in significant growth in market share and customers satisfaction.</p>
                    </div>
                    <div>
                        <img src={home_IR_3} alt='' className='home__main__section__three__end__img'/>
                        <h1>Strategic infrastructure</h1>
                        <p>We continually develop strategic infrastructure to facilitate the operational efficiency of our integrated bouquet of services.</p>
                    </div>
                </div>
            </section>
            <section className='home__main__section__four'>
                <div className='home__main__section__four__ratings'>
                    <div><MdStarBorder className='home__main__section__four__icon'/> <h3>Quality driven</h3></div>
                    <div><MdStarBorder className='home__main__section__four__icon'/><MdStarBorder className='home__main__section__four__icon'/>  <h3>Customer focus</h3></div>
                    <div><MdStarBorder className='home__main__section__four__icon'/><MdStarBorder className='home__main__section__four__icon'/> <MdStarBorder className='home__main__section__four__icon'/> <h3>Global sourcing</h3></div>
                </div>
                <h1>Leading the downstream oil and gas industry in Nigeria since 2019</h1>
                <h3>We service global clients, in more than 20 countries in Africa & in Nigeria.</h3>
                <div  className='home__main__section__four__block'>
                    <div>
                        <FaTruckMoving  className='home__main__section__four__icon'/> 
                        <div>
                            <h1>Next day delivery</h1>
                            <p>At Ulla energy Company, 92% of our orders are successfully delivered within 24 hours</p>
                        </div>
                    </div>
                    <div>
                        <FaGasPump className='home__main__section__four__icon'/> 
                        <div>
                            <h1>Dedicated Account Managers</h1>
                            <p>We will assign you an account manager who will be your point of contact from day one.</p>
                        </div>
                    </div>
                    <div>
                        <IoPerson  className='home__main__section__four__icon'/> 
                        <div>
                            <h1>Lowest prices</h1>
                            <p>Our aim is to buy fuel at the lowest price possible and pass the savings on to you.</p>
                        </div>
                    </div>
                    <div>
                        <IoMdCar className='home__main__section__four__icon'/> 
                        <div>
                            <h1>Same Day Emergency Delivery</h1>
                            <p>At Ulla energy we provide emergency same day delivery.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='home__main___section___five'>
                <div className='home__main__section__five__bg'>
                    <div className='home__main__section__five__fg'>
                        <div className='primary_one'>
                            <p>Having heavily invested in state-of-the-art storage and distribution facilities, and access to a growing fleet of LPG road tankers and trailer </p>
                        </div>
                        <div className='primary_one'>
                            <p>Well-structured supply system that takes pride in excellent delivery and a quality product</p>
                        </div>
                        <div className='primary_one'>
                            <p>Ulla energy is one of Nigeria’s fast growing and technology driven Gas companies</p>
                        </div>
                    </div>
                </div>
            </section>
            </div>  
            <Footer />
        </div>
    )
}

export default Home;