import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoMdHome } from "react-icons/io";
import './Contact.css' 

function Contact() {

    return(
        <div>
            <Header />
            <div className='contact__main'>
                <section className='contact__main__section__one'>
                    <h1>Contact us</h1>
                </section>
                <section className='contact__main__section__two'>
                    <div className='contact__main__section__two__details'>
                        <h1>Contact details</h1>
                        <p>Get in touch with us for any questions about ADM Energy</p>
                        <div  className='contact__main__section__two__details__block'>
                            <div>
                                <IoMdHome /> 
                                <div>
                                    <h1>Office Address</h1>
                                    <p>KM 42, Lekki Epe Expressway Abijo, Ibeju Lekki Lagos.</p>
                                </div>
                            </div>
                            <div>
                                <IoMdMail /> 
                                <div>
                                    <h1>Email</h1>
                                    <p>ullaenergy@gmail.com</p>
                                </div>
                            </div>
                            <div>
                                <FaPhone /> 
                                <div>
                                    <h1>Phone</h1>
                                    <p>+44 (0)207 459 4718
</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='contact__main__section__two__send'>
                        <h1>Send a message</h1>
                        <hr />
                        <div><input placeholder='First Name'/><input placeholder='Last Name'/></div>
                        <div><input placeholder='Phone Number'/><input placeholder='Company Name'/></div>
                        <div><input placeholder='Message' id='contact__main__section__two__send__message'/></div>
                        <button> Send now</button>
                    </div>
                </section>
                <section className='contact__main__section__three'>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.6654220632436!2d3.507026175985806!3d6.437000024160492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf67d389945e5%3A0x1866152ec04410c2!2sKm%2042%20Lekki%20-%20Epe%20Expy%2C%20Lekki%20Penninsula%20II%2C%20Lagos%20101245%2C%20Lagos!5e0!3m2!1sen!2sng!4v1706347243090!5m2!1sen!2sng" 
                        width="600" 
                        height="450" 
                        style={{border: '0', width: '100%'}} 
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </section>
            </div>
            <Footer />
        </div>
    )
}

export default Contact;