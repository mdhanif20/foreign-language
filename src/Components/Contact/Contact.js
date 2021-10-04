import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Contact.css';
import ContactData from '../ContactData/ContactData';
const Contact = () => {
    return (
        <div>
            <div>
                <Header></Header>
            </div>
            <div>
                <ContactData></ContactData>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Contact;