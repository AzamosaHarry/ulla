import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import './Glance.css'
import { TbTableFilled } from "react-icons/tb";
import { PiHourglassMediumFill } from "react-icons/pi";
import { SiMicrostrategy } from "react-icons/si";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import about_operations_2_1 from '../../assets/about_operations_2-1.webp'
import about_operations_1 from '../../assets/about_operations_1.webp'
import { useNavigate } from 'react-router-dom';
function Glance() {
    const navigate = useNavigate()

    return(
        <div>
            <Header />
            <div className='glance'>
                <section className='contact__main__section__one'>
                    <h1>ULLA at a glance</h1>
                </section>
                <section className='sustainability__main__section__two'>
                    <h1>An Oil & Gas Downstream Company With An Aggressive Growth Strategy</h1>
                    <hr />
                    <h3>As a leading player in the Nigerian oil and gas sector, Ulla Energy is actively involved in the importation, storage and marketing of refined petroleum products, through our strategic and well structured distribution channels. Our distribution extends to the six geopolitical zones of the ever growing Nigerian oil and gas market.</h3>
                    <p>We adhere to all government regulations, with regards to the quality and safety of product brought into the country; and requisite environmental safety regulations. This is part of our social responsibility to the communities where we live and work.
                    
                    Our unrivaled consistency and expertise in products delivery resulting in uninterrupted product availability ensure that our customers are supplied with products as at when needed. Our effective and efficient logistics handling strength, coupled with our optimal operations network ensures that customer orders are delivered within the agreed terms and time frames.</p>
                </section>
                <section className='glance__section__three'>
                    <h1>Learn more about ULLA energy:</h1>
                    <div className='glance__section__three__explore'>
                        <div onClick={() => {navigate('/about/glance')}}>
                            <TbTableFilled  className='glance__section__three__explore__icon'/>
                            <h1>ULLA at a Glance</h1>
                            <p>ULLA is an oil and gas investing company with an aggressive growth strategy.</p>
                        </div>
                        <div onClick={() => {navigate('/about/purpose')}}>
                            <PiHourglassMediumFill  className='glance__section__three__explore__icon'/>
                            <h1>Our Purpose</h1>
                            <p>Build value by investing in assets with attractive risk reward profiles and high upside</p>
                        </div>
                        <div onClick={() => {navigate('/about/strategy')}}>
                            <SiMicrostrategy  className='glance__section__three__explore__icon'/>
                            <h1>Our Strategy</h1>
                            <p>Develop a portfolio of assets targeting oil & gas exploration in West Africa.</p>
                        </div>
                        <div  onClick={() => {navigate('/operations')}}>
                            <MdOutlineMiscellaneousServices  className='glance__section__three__explore__icon'/>
                            <h1>Our Operationss</h1>
                            <p>Our leadership bring a range of business skills and extensive experience.</p>
                        </div>
                    </div>
                </section>
                <section  className='glance__section__four'>
                    <div className='glance__section__four__details'>
                        <h3>Our Network</h3>
                        <h1>Nigeria</h1>
                        <hr />
                        <p>In line with our pioneering mentality and our innovative approach to business, we have identified the huge inefficiencies in the Nigerian Oil and Gas Industry, and have taken adequate steps to bridge these gaps, by the development of one of Africa’s largest offshore Petroleum intake/offtake and storage terminals to provide compelling Logistic advantages to the entire oil and gas value chain.

                        Our unrivaled consistency and expertise in products delivery resulting in uninterrupted product availability ensure that our customers are supplied with products as at when needed. Our effective and efficient logistics handling strength, coupled with our optimal operations network ensures that customer orders are delivered within the agreed terms and time frames.
                        </p>
                    </div>
                    <div className='glance__section__four__details__display'>
                        <img src={about_operations_2_1} alt='' />
                        <img src={about_operations_1} alt='' />
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    )
}

export default Glance;