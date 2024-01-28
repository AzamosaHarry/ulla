import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import './Purpose.css'
import { TbTableFilled } from "react-icons/tb";
import { PiHourglassMediumFill } from "react-icons/pi";
import { SiMicrostrategy } from "react-icons/si";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { RiMessageLine } from "react-icons/ri";
import { PiShareNetworkLight } from "react-icons/pi";
import { PiFirstAidKitThin } from "react-icons/pi";
import { GiEarthAmerica } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';

function Purpose() {
    const navigate = useNavigate()

    return(
        <div>
            <Header />
            <div className='purpose'>
                <section className='contact__main__section__one'>
                    <h1>Our Purpose and Values</h1>
                </section>
                <section className='sustainability__main__section__two'>
                    <h1>We aim to take advantage of the substantial oil & gas investment opportunities across Nigeria and West Africa.</h1>
                    <hr />
                    <h3>Aje has multiple oil, gas and gas condensate reservoirs in the Turonian, Cenomanian and Albian sandstones with five wells drilled to date. Barracuda sits in the northwest part of OML 141, an Oil Mining Licence area covering 1,295km2 in the swamp/shallow waters of the Niger Delta in Nigeria, and has four existing wells drilled on the swamp oilfield located in the hydro-carbon rich Bayelsa State.</h3>
                    <p>ULLA Energy is targeting investment opportunities across West Africa in the oil and gas sector with attractive risk reward profiles such as proven nature of reserves, level of historic investment, established infrastructure, route to early cash flow.</p>
                </section>
                <section  className='purpose__section__one'>
                    <div className='purpose__section__one__details'>
                        <h1>Our Values</h1>
                        <hr />
                        <p>ULLA Energy is driven by a set of clear values that guide its behaviour and approach at all times. These values are underpinned by a commitment to ethical behaviour and full compliance with all applicable.</p>
                        <h1>Our Vision</h1>
                        <hr />
                        <p>To become the leading inland LPG Distribution Hub in Southwestern Nigeria and West Africa.</p>
                    </div>
                    <div className='purpose__section__one__details__display'>
                        <div>
                            <RiMessageLine   className='purpose__section__one__explore__icon'/>
                            <div>
                                <h3>communication</h3>
                                <p>The Board is committed to maintaining good communication and having constructive dialogue with its shareholders.</p>
                            </div>
                        </div>
                        <div>
                            <PiShareNetworkLight  className='purpose__section__one__explore__icon'/>
                            <div>
                                <h3>Community</h3>
                                <p>We recognise that our operations can create a significant economic and social impact. Where we operate, we actively engage with the local community and host government to ensure that we contribute both directly and indirectly to the economy and well-being of the communities within which we work.</p>
                            </div>
                        </div>
                        <div>
                            <PiFirstAidKitThin  className='purpose__section__one__explore__icon'/>
                            <div>
                                <h3>Health and Safety</h3>
                                <p>The health and safety of ULLA Energy employees, contractors, partners and those directly affected by its business activities is of paramount importance to the Company. We are committed to providing a safe working environment for all and commit to constantly assessing and monitoring health and safety risks and mitigating these to improve our performance.</p>
                            </div>
                        </div>
                        <div>
                            <GiEarthAmerica  className='purpose__section__one__explore__icon'/>
                            <div>
                                <h3>Environment</h3>
                                <p>Protecting the environment is fundamental to our business. ULLA Energy conducts its operations in a safe and environmentally responsible manner to the highest industry standards. The Company will comply with the legislation of each country in which it operates, raising these minimum requirements when appropriate. It expects that its contractors match these same standards.</p>
                            </div>
                        </div>
                    </div>
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
                        <div onClick={() => {navigate('/operations')}}>
                            <MdOutlineMiscellaneousServices  className='glance__section__three__explore__icon'/>
                            <h1>Our Operations</h1>
                            <p>Our leadership bring a range of business skills and extensive experience.</p>
                        </div>
                    </div>
                </section>

            </div>
            <Footer />
        </div>
    )
}

export default Purpose;