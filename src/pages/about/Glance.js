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
                    <h1>An Oil & Gas Marketing Company With An Aggressive Growth Strategy</h1>
                    <hr />
                    <h3>ULLA Energy is a natural resources investing company with an existing multi-asset base in the Aje (OML 113) and Barracuda (OML 141) fields, offshore Nigeria. Aje has multiple oil, gas and gas condensate reservoirs in the Turonian, Cenomanian and Albian sandstones with five wells drilled to date. Barracuda sits in the northwest part of OML 141, an Oil Mining Licence area covering 1,295km2 in the swamp/shallow waters of the Niger Delta in Nigeria, and has four existing wells drilled on the swamp oilfield located in the hydro-carbon rich Bayelsa State.</h3>
                    <p>ULLA Energy is targeting investment opportunities across West Africa in the oil and gas sector with attractive risk reward profiles such as proven nature of reserves, level of historic investment, established infrastructure, route to early cash flow.</p>
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
                        <h3>Our Projects</h3>
                        <h1>Nigeria</h1>
                        <hr />
                        <p>ULLA Energy holds a 9.2% profit interest in the Aje Field, part of OML 113, which covers an area of 835km² offshore Nigeria. Aje is an oil producing asset rich in gas and condensate reserves and currently has two producing wells, Aje-4 and Aje-5.

ULLA Energy also has a controlling interest in a risk sharing agreement for the development of the Barracuda Field, which sits in the northwest part of OML 141, covering 1,295km² in the swamp/shallow waters of the Niger Delta in Nigeria. Four wells have been drilled to date at Barracuda and a fifth well is planned in Q4 2021 to take the asset into production.
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