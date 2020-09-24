import React, {Component} from 'react';
import './contact.css';

class Contact extends Component{
    render(){
        return(
                <div className="container">
                    <h2>Contacts</h2>
                    <p id="inj">Inquiries</p>
                    <p id="text">For any inquiries, questions or commendations, please call: +7 7292 200117 or fill out the following form:
                    </p>
                    <p id="text2">Head Office</p>
                    <p id="text3">GSR Phoenix LLP
                        Bautino Office
                        St. S. Zhangabylov #28, 130502
                        Bautino, Mangistau Oblast, KZ</p>
                    <p id="text4">To apply for a job with GSR Phoenix, please send a cover letter together with your C.V. to: cv@gsrllp.com</p>
                    <div className="form">
                        <form>
                        <input id="name" placeholder="Name"></input>
                        <input id="email" placeholder="e-mail"></input>
                        <input id="subject" placeholder="Subject"></input>
                     <textarea id="area">Some text...</textarea>
                     <input id="submit" type="submit" value="Submit"></input>
                    </form>
                    </div>
                </div>
        );
    }
}
export default Contact;