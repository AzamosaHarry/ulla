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
            if ( count <= 70) {
                setCount(count + 1)
            }
            if ( count2 <= 103) {
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
          p: 'Et adipisicing aliquip ea exercitation ipsum voluptate quis anim anim elit. Laborum occaecat proident officia veniam deserunt fugiat reprehenderit magna laborum culpa sint ut reprehenderit.',
        },
        {
          url: Home_hero__bg1,
          caption: 'Slide 2',
          h3: 'Nuturing the future',
          h1: 'Sowing seed of clean energy',
          p: 'Nostrud ut velit adipisicing incididunt nulla sit sint culpa velit cillum occaecat qui ullamco eiusmod. Pariatur mollit ad est est Lorem reprehenderit sint quis occaecat id eu.',
        },
        {
          url: Home_hero__bg3,
          caption: 'Slide 3',
          h3: 'Nigerian through and through',
          h1: 'For every family out there',
          p: 'Id reprehenderit velit adipisicing adipisicing. ',
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
                    <h1>Targeting investment opportunities across West Africa</h1>
                    <hr />
                    <p>Pariatur ex cupidatat excepteur consectetur ad ut laborum aliquip labore duis quis amet laboris nisi. Commodo id incididunt culpa voluptate ipsum esse ut irure. Fugiat enim adipisicing sint Lorem nisi nulla in.</p>
                    <div  ref={containerRef1}className='home__main__section__two__start__counter'>
                        <div>
                            <h3>{count2} m NGN</h3>
                            <p>Revenue 2021</p>
                        </div>
                        <div>
                            <h3>{count3} K+ bo</h3>
                            <p>Produced in 2021</p>
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
                        <h1>Investor Center</h1>
                        <hr />
                    </div>
                    <p>ULLA Energy is a natural resources investing company listed on the AIM market of the London Stock Exchange, the Quotation Board Segment of the Open Market of the Berlin Stock Exchange ("BER") and Xetra, the electronic trading platform of the Frankfurt Stock Exchange ("FSE").</p>
                </div>
                <div className='home__main__section__three__end'>
                    <div>
                        <img src={home_IR_1} alt='' className='home__main__section__three__end__img'/>
                        <h1>Our latest report</h1>
                        <p>View Ulla energy latest Annual Report and Accounts.</p>
                        <h3>Download Report 2023</h3>
                    </div>
                    <div>
                        <img src={home_IR_2} alt='' className='home__main__section__three__end__img'/>
                        <h1>Investor Relations</h1>
                        <p>View Ulla energy latest Annual Report and AccountsDiscover ULLA's latest investor presentation, financial reports and other investor information </p>
                        <h3>Visit IR Centre</h3>
                    </div>
                    <div>
                        <img src={home_IR_3} alt='' className='home__main__section__three__end__img'/>
                        <h1>Our latest report</h1>
                        <p>View Ulla energy latest Annual Report and Accounts.</p>
                        <h3>Download Report 2023</h3>
                    </div>
                </div>
            </section>
            <section className='home__main__section__four'>
                <div className='home__main__section__four__ratings'>
                    <div><MdStarBorder className='home__main__section__four__icon'/> <h3>Quality driven</h3></div>
                    <div><MdStarBorder className='home__main__section__four__icon'/><MdStarBorder className='home__main__section__four__icon'/>  <h3>Customer focus</h3></div>
                    <div><MdStarBorder className='home__main__section__four__icon'/><MdStarBorder className='home__main__section__four__icon'/> <MdStarBorder className='home__main__section__four__icon'/> <h3>Global sourcing</h3></div>
                </div>
                <h1>Leading the downstream oil and gas industry in Nigeria since 2004</h1>
                <h3>We service global clients, in more than 20 countries in Africa & in Nigeria.</h3>
                <div  className='home__main__section__four__block'>
                    <div>
                        <FaTruckMoving  className='home__main__section__four__icon'/> 
                        <div>
                            <h1>Next day delivery</h1>
                            <p>Amet incididunt sit pariatur Lorem minim ad amet ad esse.</p>
                        </div>
                    </div>
                    <div>
                        <FaGasPump className='home__main__section__four__icon'/> 
                        <div>
                            <h1>Next day delivery</h1>
                            <p>Amet incididunt sit pariatur Lorem minim ad amet ad esse.</p>
                        </div>
                    </div>
                    <div>
                        <IoPerson  className='home__main__section__four__icon'/> 
                        <div>
                            <h1>Next day delivery</h1>
                            <p>Amet incididunt sit pariatur Lorem minim ad amet ad esse.</p>
                        </div>
                    </div>
                    <div>
                        <IoMdCar className='home__main__section__four__icon'/> 
                        <div>
                            <h1>Next day delivery</h1>
                            <p>Amet incididunt sit pariatur Lorem minim ad amet ad esse.</p>
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