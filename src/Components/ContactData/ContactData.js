import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import img from '../../images/contact us/Screenshot_2.png'
const ContactData = () => {
    const email = <FontAwesomeIcon icon={faEnvelope} />
    const phone = <FontAwesomeIcon icon={faPhone} />
    return (
        <div className="card my-5 mx-auto" style={{width:"88%"}}>
        <div className="row g-0">
            <div className="col-md-5">
                <img src={img} alt="" className="img-fluid rounded-start" />
            {/* <img src="https://www.kutu.com"  alt="..."> */}
            </div>
            <div className="col-md-7">
            <div className="card-body" style={{textAlign:"start"}}>
                <h5 className="card-title">Orbin Foreign Language Training Center</h5>
                <p className="card-text mb-1 mt-3" id="contact-email">{email} mdhanif115825@gmail.com</p>
                <p>{phone} +880186763784</p>
                <p className="card-text"><small className="text-muted">Address: Road-08,House-234,Kanchonnagor,chandanish,chittagong.</small></p>
            </div>
            </div>
        </div>
        </div>
    );
};

export default ContactData;