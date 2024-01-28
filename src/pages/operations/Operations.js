import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import './Operations.css'
import { TbTableFilled } from "react-icons/tb";
import { PiHourglassMediumFill } from "react-icons/pi";
import { SiMicrostrategy } from "react-icons/si";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import about_operations_2_1 from '../../assets/about_operations_2-1.webp'
import about_operations_1 from '../../assets/about_operations_1.webp'
import Lekki from '../../assets/Lekki-Storage-Terminal-1.jpg'
import Warri from '../../assets/Warri-Storage-Terminal-2-2048x1229.jpg'
import { useNavigate } from 'react-router-dom';

function Operations() {
    const navigate = useNavigate()

    return(
        <div>
        <Header />
        <div className='operations'>
            <section className='contact__main__section__one'>
                <h1>Our Operations</h1>
            </section>
            <section className='operation__main__section__two'>
                <div className='operation__main__section__two__details'>
                    <h1>What We Do</h1>
                    <hr />
                    <h3>Our activities span the entire spectrum of the downstream sector of the oil and gas industry.</h3>
                    <p>We offer one of the largest offshore liquid bulk terminals (SPM/CBM) in Africa to provide efficient discharge of products for operators, complemented by world class storage facilities and retail outlets/channels in all six geopolitical zones in Nigeria.
                    
                    We continually develop strategic infrastructure to facilitate the operational efficiency of our integrated bouquet of services.
                    </p>
                    <h1>Logistics & Haulage Services</h1>
                    <hr />
                    <p>In our quest to become a fully integrated oil and gas solution provider and ensure reliable supply of our various products to our customers as well as our retail locations, we have built a significant fleet of petroleum tankers.

The fleet comprises tanker trucks with tanker capacities ranging from 33,000 litres to a maximum tanker size of 60,000 litres.

The fleet is supported by modern and well equipped workshops, operated by a team of experienced technicians to ensure optimal serviceability of the fleet and facilitate operational excellence.
                    </p>
                </div>
                <div className='operation__main__section__two__details__display'>
                    <img src={about_operations_2_1} alt='' />
                    <img src={about_operations_1} alt='' />
                </div>
            </section>
            <section className='operation__main__section__three'>
                <div>
                    <img src={Warri} alt='' />
                    <div>
                        <h1>Warri Storage Terminal</h1>
                        <p>As part of our strategy of ensuring continued availability of the various petroleum products, we operate a 100,000MT storage terminal and jetty in Warri, adjacent the Warri Refinery.</p>
                        <p>The storage facility is designed to store a wide range of products, including PMS, JET A1, AGO, DPK and BASE OIL. The tanks are interchangeable, allowing significant product flexibility, and have floating roofs, greatly reducing evaporation and air pollution from volatile emissions from the storage area.</p>
                        
                        <p>To ensure efficient product load out, the facility is equipped with a Truck loading Island for Gas Oil, Gasoline, JET A1, Base Oil and DPK. Each load out facility is equipped with multiple loading arms each capable of loading 120m3 of petroleum products per hour. There is also a Truck park bay, for the efficient management of truck traffic. In line with the requirements of the law, we also have modern office facilities for the administration of operations as well as for the housing of key regulatory agencies legally required to be located in all product terminals.</p>
                    </div>
                </div>
                <div>
                    <div>
                        <h1>Lekki Storage Terminal</h1>
                        <p>We have developed one of the largest petroleum storage terminals in Africa with estimated storage capacity of 1,000,000 M3 to complement our offshore intake/offtake facility at the Lekki Free Zone, Lagos.

The storage facility is designed to store a wide range of petroleum products, including PMS, AGO, DKP, JET A1 and BASE OIL. The tanks are interchangeable, allowing significant product flexibility, and have floating roofs, thereby reducing evaporation and air pollution. To facilitate efficient load out of products, we have extensive truck gantries with sufficient loading arms to fill and dispatch up to 600 trucks daily.

The terminal has a purpose built truck park bay, for the efficient management of truck traffic. Its operational efficiency is ensured by a team of experts and regulatory agencies housed in well equipped modern office facilities within the Lekki Free Zone.

In the light of the foregoing, we are well positioned to play competitively and contribute strategically to reshaping the future of the African oil and gas market.</p>
                    </div>
                    <img src={Lekki} alt='' />
                </div>
            </section>
            <section className='glance__section__three'>
                    <h1>Learn more about ULLA energy:</h1>
                    <div className='glance__section__three__explore'>
                        <div onClick={() => {navigate('/about/glance')}}>
                            <TbTableFilled  className='glance__section__three__explore__icon'/>
                            <h1>ADM at a Glance</h1>
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
                <section className='operation__main__section__four'>
                    <h3>DON’T HESITATE TO CONTACT US</h3>
                    <h1>For better future and business, Let’s get started now</h1>
                    <p>We provide innovative products & services for sustainable progress.
Our professional team works to increase productivity and cost effectiveness on the market.</p>
                    <button onClick={() => {navigate('/contact')}}>Get in touch</button>
                </section>
        </div>
        <Footer />
        </div>
    )
        
}

export default Operations;