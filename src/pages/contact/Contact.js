import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoMdHome } from "react-icons/io";
import './Contact.css' 
import emailjs, {init} from '@emailjs/browser'
import { useRef, useState } from 'react';

function Contact() {
  const [firstname,setFirstname] = useState('')
  const [lasname,setLastname] = useState('')
  const [phone,setPhone] = useState('')
  const [email,setEmail] = useState('')
  const [message,setMessage] = useState('')

  const form = useRef()

  init('9ybQ5MtfM9f22havr')
  function submit(e) {
    emailjs.sendForm('service_es0cpf8', 'template_1y18l66', form.current, '9ybQ5MtfM9f22havr').then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text)
        }
      )
}  
    return(
        <div>
            <Header />
            <div className='contact__main'>
                <section className='contact__main__section__one bgco'>
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
                                    <p>info@ullaenergy.com</p>
                                </div>
                            </div>
                            <div>
                                <FaPhone /> 
                                <div>
                                    <h1>Phone</h1>
                                    <p>+2348166208531
</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <form ref={form} className='contact__main__section__two__send'>
                        <h1>Send a message</h1>
                        <hr />
                        <div><input placeholder='First Name' name='firstname' onChange={(e) => {setFirstname(e.target.value)}}/><input placeholder='Last Name' name='lastname' onChange={(e) => {setLastname(e.target.value)}}/></div>
                        <div><input placeholder='Phone Number' name='phone' onChange={(e) => {setPhone(e.target.value)}}/><input placeholder='Company Name' name='email' onChange={(e) => {setEmail(e.target.value)}}/></div>
                        <div><input placeholder='Message' name='message' id='contact__main__section__two__send__message' onChange={(e) => {setMessage(e.target.value)}}/></div>
                        <button onClick={(e) => {submit()}}> Send now</button>
                    </form>
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