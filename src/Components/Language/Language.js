import React from 'react';
import { Button, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import './Language.css';
const Language = (props) => {
    const {serviceImg,language,price,tutorImg,tutor} = props.language;
    <Footer course={Language}></Footer>
    return (
        <div>
        <div >
             <Card className="bg-dark text-white border-0 shadow-sm rounded" >
                <Card.Img src={serviceImg} alt="Card image"  id="couse-details"/>
                    <Card.ImgOverlay className="pt-auto align-text-bottom" id="couse-details" >
                    <h5 id="img-header">Learn {language} with {tutor} </h5> 
                    <Link to={'/service'}>
                         <Button id="show-details">Show Details</Button>
                    </Link>
                       <div id="coust-info">
                           <Card.Title>{language}</Card.Title>
                            <Card.Text> <h2>$ {price}</h2> </Card.Text>
                        </div>
                        
                </Card.ImgOverlay>
                        <div id="tutor-inf0">
                            <img src={tutorImg} id="tutor-img"  alt="" />
                            <h5>{tutor}</h5>
                        </div>
            </Card>
        </div>
        </div>
    );
};

export default Language;