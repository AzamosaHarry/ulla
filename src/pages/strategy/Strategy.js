import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import './Strategy.css'
import { TbTableFilled } from "react-icons/tb";
import { PiHourglassMediumFill } from "react-icons/pi";
import { SiMicrostrategy } from "react-icons/si";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { FaChartLine } from "react-icons/fa6";
import { FaFire } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaSackDollar } from "react-icons/fa6";

function Strategy() {
    const navigate = useNavigate()

    return(
        <div>
        <Header />
            <div className='strategy'>
                <section className='contact__main__section__one'>
                    <h1>Our Strategy</h1>
                </section>
                <section className='sustainability__main__section__two'>
                    <h1>Building value by investing in assets with attractive risk reward profiles and high upside</h1>
                    <hr />
                    <p>With a focus on West Africa and a quality oil producing asset offshore Nigeria, ULLA is an oil and gas investing company with an aggressive growth strategy to increase shareholder value by acquiring undervalued 2P reserves without the risks associated with high cost exploration. We evaluate investments at various stages of the production cycle focused on appraisal, development and producing assets where the risk factor is significantly reduced.</p>
                </section>
                <section className='strategy__section__one'>
                <div className='strategy__section__one__details__display'>
                        <div>
                            <FaChartLine   className='strategy__section__one__explore__icon'/>
                            <div>
                                <h3>To focus on high quality acquisition of 2P reserves at attactive valuations</h3>
                                <p>Our strategy is focussed on West Africa where we have good experience of the operating environment and a deep knowledge of the proven hydrocarbon basins and assets..</p>
                            </div>
                        </div>
                        <div>
                            <FaFire  className='strategy__section__one__explore__icon'/>
                            <div>
                                <h3>To operate in a safe and environmentally responsible manner</h3>
                                <p>ULLA Energy is committed to the highest standards of corporate social responsibility in its investing policy.</p>
                            </div>
                        </div>
                        <div>
                            <BsFillPeopleFill  className='strategy__section__one__explore__icon'/>
                            <div>
                                <h3>
To build the best in class management team</h3>
                                <p>We continually look for opportunities to refresh key management positions to ensure that the Company has the team in place to deliver on its high growth strategy.</p>
                            </div>
                        </div>
                        <div>
                            <FaSackDollar  className='strategy__section__one__explore__icon'/>
                            <div>
                                <h3>To secure access to capital and financial liquidity</h3>
                                <p>Our team has extensive experience with raising funds and financing and structuring deals in the oil and gas sector.</p>
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

export default Strategy;