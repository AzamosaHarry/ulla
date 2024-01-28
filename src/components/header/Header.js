import './Header.css'
import { FaFacebookF } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import ullalogowhite from '../../assets/ULLA LOGO - WHITE.png'
import { FiMenu } from 'react-icons/fi'
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { RiCodeBoxFill } from "react-icons/ri";
import { AiOutlineClose } from 'react-icons/ai'
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlinePlayArrow } from "react-icons/md";

function Header() {
    const navigate = useNavigate()
    const [menu, setMenu] = useState(false)
    const [dropdown, setDropdown] = useState(false)

    return(
        <div className='header'>
            <section className='header__section__one'>
                <div className='header__section__one__info'>
                    <p href="tel:+2347016000164">+442 657 2345 <FaPhone className='header__section__one__info__icon'/></p>
                    <p  onClick={() => window.location = 'mailto:johnharry@gmail.com?subject=Access request'}>ullaenergy@gmail.com <IoMdMail className='header__section__one__info__icon' /></p>
                    <p>News and media</p>
                </div>
                <div className='header__section__one__socials'>
                    <p>en | </p>
                    <FaFacebookF className='header__section__one__socials__icons'/>
                    <GrInstagram className='header__section__one__socials__icons'/>
                    <FaLinkedinIn className='header__section__one__socials__icons'/>
                    <BsTwitterX className='header__section__one__socials__icons'/>
                </div>
            </section>

            <section className='header__section__two'>
            <img src={ullalogowhite} alt=''  onClick={() => {navigate('/')}} />

                <ul className='header__section__navbar'>
                    <li onClick={() => {navigate('/about/glance')}}>About us
                    </li>
                    <li  onClick={() => {navigate('/operations')}}>Operations</li>
                    <li   onClick={() => {navigate('/csr')}}>CSR</li>
                    <li onClick={() => {navigate('/contact')}}>Contact</li>
                </ul>
                <FiMenu className='header__section__one__socials__icons'  onClick={() => {setMenu(true)}}/>
            </section>
            <div className={menu? 'home_sidebar_true' : 'home_sidebar'}>
                <div style={{display: 'flex', alignItems: 'center', background: '#13182c', padding: '10px 10px'}}>
                <Link to='/' ><img src={ullalogowhite} className='evajay_header2' alt=''  onClick={() => {navigate('/')}} /></Link>
                <AiOutlineClose className='home_sidebar_close' onClick={() => {setMenu(false)}}/>
                </div>
                <ul className='home_sidebar_navbar'>
                <li><Link
                    onClick={() => {setDropdown(!dropdown)}}
                    to="#"
                    className='home_sidebar_link'
                    >About us</Link></li>
                    <div className={dropdown? 'header_dropdown_div' : 'header_dropdown_div_false'}>
                <h1  onClick={() => {navigate('/about/glance')}}>ULLA at a glance</h1>
                <h1 onClick={() => {navigate('/about/purpose')}}>Purpose and value</h1>
                <h1 onClick={() => {navigate('/about/strategy')}}>Our strategy</h1>
                </div>
                <li><Link
                    to='/operations'
                    className='home_sidebar_link'
                    >Operations</Link></li>
                <li><Link
                    to='/csr'
                    className='home_sidebar_link'
                    >CSR</Link></li>
                <li><Link
                    to='/contact'
                    className='home_sidebar_link'
                    >Contact</Link></li>
                    <li id='headerlist__section__one'>
                    <div>
                        <span><FaLocationDot id='headerlist__section__one__icon'/> 925 N. Eldridge Parkway (77079-2703)</span>
                        <span><IoMdMail  id='headerlist__section__one__icon'/> P.O. Box 2197, Houston, TX 77252-2197</span>
                    </div>
                    <div>
                        <span><MdOutlinePlayArrow  id='headerlist__section__one__icon'/> Contact Us</span>
                        <span><FaPhone  id='headerlist__section__one__icon'/> +442 657 2345</span>
                    </div>
                </li>
                </ul>
        </div>
        </div>
    )
}

export default Header;