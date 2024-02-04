import './Footer.css'
import ullalogoblack from '../../assets/ULLA LOGO - BLACK.png'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { BiSolidContact } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';

function Footer() {
    const navigate = useNavigate()
    return(
        <div className='footer'>
            <section className='footer__section__one'>
                <img src={ullalogoblack} alt='' />
                <div>
                    <span><FaLocationDot className='footer__section__one__icon'/>KM 42, Lekki Epe Expressway Abijo, Ibeju Lekki Lagos.</span>
                    <span><IoMdMail  className='footer__section__one__icon'/> P.O. Box 2197, Lekki, 77252-2197</span>
                </div>
                <div>
                    <span><BiSolidContact  className='footer__section__one__icon'/> Contact Us</span>
                    <span><FaPhone  className='footer__section__one__icon'/> +442 657 2345</span>
                </div>
            </section>
            <section className='footer__section__two'>
                <div>
                    <h1>Company</h1>
                    <hr />
                    <p onClick={() => {navigate('/')}}>Home</p>
                    <p onClick={() => {navigate('/csr')}}>Corperate social responsibility</p>
                    <p onClick={() => {navigate('/operations')}}>Our operations</p>

                </div>
                <div>
                    <h1>About us</h1>
                    <hr />
                    <p onClick={() => {navigate('/about/glance')}}>ULLA at a glance</p>
                    <p onClick={() => {navigate('/about/purpose')}}>Purpose and value</p>
                    <p onClick={() => {navigate('/about/strategy')}}>Our strategy</p>
                </div>
                <div>
                <h1>Contact</h1>
                    <hr />
                    <p>FAQ</p>
                    <p onClick={() => {navigate('/contact')}}>Get in touch</p>
                </div>
            </section>
            <section className='footer__section__three'>
                <p>&copy; Ulla energy 2024 Terms | Privacy | Legal</p>
            </section>
        </div>
    )
}

export default Footer;