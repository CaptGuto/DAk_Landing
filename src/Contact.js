import "./App.css";
import twitterLogo from "./assets/images/twitterx.png";
import facebookLogo from "./assets/images/icons8-facebook-50 (1).png";
import youtubeLogo from "./assets/images/icons8-youtube-50 (1).png";
import linkedinLogo from "./assets/images/icons8-linkedin-50 (1).png";
import { forwardRef } from "react";

const Contact = forwardRef((props, ref) => {
    return (
        <div className="contact-container" ref={ref}>
            <div className="Content_Holder">
                <div className="row container-row">
                    <div className="card2 col-md-12 col-lg-1 mb-3 mb-lg-0">
                        <div className="socials">
                            <a href="" target="_blank" className="mt-5">
                                <img
                                    className="card2-img"
                                    src={twitterLogo}
                                    alt="TwitterLogo"
                                />
                            </a>
                            <a href="" target="_blank" className="mt-5">
                                <img
                                    className="card2-img"
                                    src={linkedinLogo}
                                    alt="linkedinLogo"
                                />
                            </a>
                            <a href="" target="_blank" className="mt-5">
                                <img
                                    className="card2-img"
                                    src={facebookLogo}
                                    alt="FacebookLogo"
                                />
                            </a>
                            <a href="" target="_blank" className="mt-5">
                                <img
                                    className="card2-img"
                                    src={youtubeLogo}
                                    alt="youtubeLogo"
                                />
                            </a>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-4 mb-sm-0 mt-sm-auto mb-lg-0 bg-white card1">
                        <h2 className="mt-5">Get In Touch</h2>
                        <div className="card1-content">
                            <h3 className="contact-content mt-5 me-3">
                                Meet Us
                            </h3>
                            <p>somewhere, Addis Ababa</p>
                            <h3 className="contact-content mt-3 me-3">
                                Call Us
                            </h3>
                            <p>097865432</p>
                            <h3 className="contact-content mt-3 me-3">
                                Email Us
                            </h3>
                            <p>something@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-12 col-sm-12 map-container">
                        <iframe
                            src={
                                "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3940.704117730342!2d38.74454407501858!3d8.999349891060813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwNTknNTcuNyJOIDM4wrA0NCc0OS42IkU!5e0!3m2!1sen!2set!4v1713292594980!5m2!1sen!2set"
                            }
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                            className="map"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Contact;
