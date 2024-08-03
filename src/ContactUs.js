import phoneLogo from "./assets/images/icons/phone.png";
import twitterLogo from "./assets/images/twitterx.png";
import facebookLogo from "./assets/images/icons8-facebook-50 (1).png";
import youtubeLogo from "./assets/images/icons8-youtube-50 (1).png";
import linkedinLogo from "./assets/images/icons8-linkedin-50 (1).png";

const ContactUs = () => {
    const renderSocialMediaLinks = (imgSrc, altText) => (
        <div className="col-2">
            <a href="" target="_blank">
                <img className="card2-img" src={imgSrc} alt={altText} />
            </a>
        </div>
    );

    return (
        <div className="ContactUs" style={{ background: "#131e2a" }}>
            <div className="Content_Holder">
                <div className="container contactUs-container">
                    <div className="row" style={{ justifyContent: "center" }}>
                        <div
                            className="col-lg-4 col-md-6 col-sm-12 mb-3 mr-0"
                            style={{
                                marginRight: "10px",
                                padding: "0px",
                                paddingRight: "0px",
                            }}
                        >
                            <iframe
                                src={
                                    "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3940.704117730342!2d38.74454407501858!3d8.999349891060813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwNTknNTcuNyJOIDM4wrA0NCc0OS42IkU!5e0!3m2!1sen!2set!4v1713292594980!5m2!1sen!2set"
                                }
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="map w-100"
                                style={{ height: "100%" }}
                            ></iframe>
                        </div>
                        <div
                            className="col-lg-6 col-md-6 col-sm-12 card mb-3 p-5"
                            style={{ border: "none", borderRadius: "0px" }}
                        >
                            <div className="p-3">
                                <h2 style={{ textAlign: "start" }}>
                                    Get in Touch
                                </h2>
                                <p style={{ textAlign: "start" }}>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Ut, soluta mollitia.
                                    Corporis non delectus repellat? Saepe quia
                                </p>
                                <hr />
                                <h5 style={{ textAlign: "start" }}>
                                    60 Road Brocklyn Golden Street of New York,
                                    USA
                                </h5>
                                <div
                                    className=" mt-3"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "start",
                                    }}
                                >
                                    <div style={{ marginRight: "30px" }}>
                                        <a href="" target="_blank" className="">
                                            <img
                                                src={phoneLogo}
                                                className="img-fluid"
                                                alt="PhoneLogo"
                                                style={{ width: "60px" }}
                                            />
                                        </a>
                                    </div>
                                    <div className="">
                                        <h4>
                                            <a
                                                href="tel:+1234567890"
                                                style={{
                                                    textDecoration: "none",
                                                    color: "black",
                                                }}
                                            >
                                                +1 (234) 567-890
                                            </a>
                                        </h4>
                                        <div style={{ color: "#FCC676" }}>
                                            dakTrading@gmail.com
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{
                            padding: "0px 140px",
                            boxSizing: "border-box",
                        }}
                    >
                        <div
                            className="row card social-media-card"
                            style={{
                                backgroundColor: "#7F5523",
                                display: "flex",
                                flexDirection: "row",
                                boxSizing: "border-box",
                                justifyContent: "space-around",
                            }}
                        >
                            {renderSocialMediaLinks(twitterLogo, "TwitterLogo")}
                            {renderSocialMediaLinks(
                                linkedinLogo,
                                "LinkedInLogo"
                            )}
                            {renderSocialMediaLinks(
                                facebookLogo,
                                "FacebookLogo"
                            )}
                            {renderSocialMediaLinks(youtubeLogo, "YouTubeLogo")}
                        </div>
                    </div>
                    <div className="contactForm">
                        <div className="row justify-content-center">
                            <div className="col col-2">
                                <h6
                                    style={{
                                        textAlign: "center",
                                    }}
                                    className="contactwithUs-contactwithUs mx-auto"
                                >
                                    CONTACT WITH US
                                </h6>
                            </div>
                        </div>
                        <h1>Write a Message</h1>
                        <div className="contactFormInput">
                            <div className="row mb-3">
                                <div className="col col-6">
                                    <input
                                        type="text"
                                        className="form-control "
                                        id="fname"
                                        placeholder="Full Name"
                                        style={{
                                            height: "50px",
                                        }}
                                    />
                                </div>
                                <div className="col col-6">
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="Email"
                                        style={{ height: "50px" }}
                                    />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col col-6">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="phone"
                                        placeholder="Phone"
                                        style={{ height: "50px" }}
                                    />
                                </div>
                                <div className="col col-6">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="subject"
                                        placeholder="Subject"
                                        style={{ height: "50px" }}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col col-12">
                                    <div className="mb-3">
                                        <textarea
                                            className="form-control"
                                            id="textArea"
                                            placeholder="Write a message"
                                            rows="6"
                                        ></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
