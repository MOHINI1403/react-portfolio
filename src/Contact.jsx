import {React,useState} from 'react'
import './contact.css'
import axios from 'axios'
import shape2 from './assets/shape-2.png'
import {FaRegAddressBook,FaRegEnvelope,FaRegUser,FaRegMap, FaClipboard, FaAddressBook} from 'react-icons/fa';
const Contact=()=>{
    const [form,setForm]=useState({name:'',email:'',subject:'',message:''});
    const handleChange=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setForm({...form,[name]:value});

    };
    const handleSubmit=(e)=>{
        e.preventDefault();

        axios.post('https://sheet.best/api/sheets/7e5fe251-8f34-4e0d-94d5-76e6d7766b67',form).then((response)=>{
            console.log(response);
            //clearing the form details
            setForm({name:'',email:'',subject:'',message:''});
        })
    }
    return(
        <section className='contact section'id='contact'>
            <h2 className='section__title text-cs'>Contact Me</h2>
            <p className='section__subtitle'>
                Let's<span>Talk About Ideas</span>
            </p>
            <br />
            <div className='contact__container container grid'>
                <div className='contact__content'>
                    <div className='contact__card'>
                        <span className='contact__card-icon'>
                            <FaRegMap />
                        </span>
                        <h3 className='contact__card-title'>Address</h3>
                        <p className='contact__card-data'>Delhi,India</p>
                    </div>
                    <div className='contact__card'>
                        <span className='contact__card-icon'>
                            
                            <FaRegEnvelope />
                            
                        </span>
                        <h3 className='contact__card-title'>Email</h3>
                        <p className='contact__card-data'><a href="mailto:mohinichauhan1486@gmail.com" className='mail'>mohinichauhan1486@gmail.com</a></p>
                    </div>
                    <div className='contact__card'>
                        <span className='contact__card-icon'>
                            <FaRegAddressBook />
                        </span>
                        <h3 className='contact__card-title'>Phone Number</h3>
                        <p className='contact__card-data'><a href="tel:9821806115" className='phone'>9821806115</a></p>
                    </div>
                    
                </div>
                <form className='contact__form' onSubmit={handleSubmit}>
                    <div className='contact__form-group grid'>
                        <div className='contact__form-div'>
                            <label className='contact__form-tag text-cs'>Your Full Name<b>*</b></label>
                            <input type="text" name='name' onChange={handleChange} value={form.name} className='contact__form-input' />

                        </div>
                        <div className='contact__form-div'>
                            <label className='contact__form-tag text-cs'>Your Email Address<b>*</b></label>
                            <input type="email" name='email' onChange={handleChange} value={form.email} className='contact__form-input' />

                        </div>
                    </div>
                    <div className='contact__form-div'>
                        <label className='contact__form-tag text-cs'>Your Subject<b>*</b></label>
                        <input type="text" name='subject' onChange={handleChange} value={form.subject} className='contact__form-input' />

                    </div>
                    <br />
                    <div className='contact__form-div contact__form-area'>
                        <label className='contact__form-tag text-cs' >Your Message<b>*</b></label>
                        <textarea className='contact__form-input' name='message' onChange={handleChange} value={form.message}></textarea>

                    </div>
                    <div className='contact__submit'>
                        <p>*Accept the terms and conditions.</p>
                        <button type='submit'className='btn text-cs'>Submit</button>
                    </div>
                    
                </form>
            </div>
            <div className='section__deco deco__left'>
                <img src={shape2} alt=''className='shape' />
            </div>
            
            
            
        </section>
    )
};
export default Contact;