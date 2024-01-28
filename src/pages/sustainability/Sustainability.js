import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import './Sustainability.css'
import csr_business_conduct from '../../assets/csr_business_conduct.webp'
import csr_safety from '../../assets/csr_safety.webp'
import img1_2 from '../../assets/img1-2.webp'
import img2_1 from '../../assets/img2-1.webp'
import img3_1 from '../../assets/img3-1.webp'

function Sustainability() {
    return(
        <div>
            <Header />
            <div className='sustainabity__main'>
                <section className='contact__main__section__one'>
                    <h1>Corporate Social Responsibility</h1>
                </section>
                <section className='sustainability__main__section__two'>
                    <h1>Our Sustainable Approach</h1>
                    <hr />
                    <h3>ADM Energy is committed to the highest standards of corporate social responsibility in its investing policy. Working alongside its partners, the Company strives to ensure the safety of all staff and contractors, while minimising environmental impact, for the benefit of the communities in which it works and all its stakeholders.</h3>
                    <p>ADM conducts its investment operations in a responsible and transparent manner. Being socially responsible is a key component in the Company’s business and its achievements. This includes not only adherence to Government legislation and Company policies, but must extend to acceptance that ADM is, in all the projects in which it holds an investment, a neighbour in established communities and environments.</p>
                </section>
                <section className='sustainability__main__section__three'>
                    <img src={csr_business_conduct} alt='' /> 
                    <div>
                        <h1>Business Conduct</h1>
                        <hr />
                        <h3>At ADM Energy we are committed to maintaining the highest ethical standards in the personal and professional conduct of our employees, suppliers, contractors and consultants.</h3>
                        <p>We seek to conduct our business activities in a fair, honest and ethical manner. Every person connected with our company has individual responsibility for maintaining ethical standards in the workplace. We expect all employees and all working on behalf of the Company to be responsible for fostering a proper environment and encouraging ethical practices in all areas of our business.</p>
                    </div>
                </section>
                <section className='sustainability__main__section__four'>
                    <img src={csr_safety} alt='' /> 
                    <div>
                        <h1>Health and Safety</h1>
                        <hr />
                        <p>The health and safety of ADM Energy employees, contractors, partners and those directly affected by its business activities is of paramount importance to the Company. We are committed to providing a safe working environment for all and commit to constantly assessing and monitoring health and safety risks and mitigating these to improve our performance.</p>
                    </div>
                </section>
                <section className='sustainability__main__section__three'>
                    <img src={img1_2} alt='' /> 
                    <div>
                        <h1>Enviroment</h1>
                        <hr />
                        <p>Protecting the environment is fundamental to our business. ADM Energy conducts its operations in a safe and environmentally responsible manner to the highest industry standards. The Company will comply with the legislation of each country in which it operates, raising these minimum requirements when appropriate. It expects that its contractors match these same standards.</p>
                    </div>
                </section>
                <section className='sustainability__main__section__four'>
                    <img src={img2_1} alt='' /> 
                    <div>
                        <h1>Human rights</h1>
                        <hr />
                        <p>We have respect for human dignity and the rights of the individual. We support the principles of, and promote respect for, the Universal Declaration of Human Rights.
                        We show respect for people including our own staff, our neighbours, our partners and suppliers and contractors and will not discriminate on the basis of ethnicity or gender. We are an equal rights employer and are committed to providing a working environment where all people have equal opportunities for employment and advancement based on their ability, professional qualifications and experience.</p>
                    </div>
                </section>
                <section className='sustainability__main__section__three'>
                    <img src={img3_1} alt='' /> 
                    <div>
                        <h1>community</h1>
                        <hr />
                        <p>We recognise that our operations can create a significant economic and social impact. Where we operate, we actively engage with the local community and host government to ensure that we contribute both directly and indirectly to the economy and well-being of the communities within which we work.</p>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    )
}

export default Sustainability;