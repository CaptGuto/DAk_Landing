import "../style/App.css";

function ContactForm() {
    return (
        <div className="contactForm-container d-flex justify-content-between">
            <div className="Content_Holder">
                <div class="row content_box">
                    <div className="col-lg-6 col-md-12 col-sm-12 ContactForm-content d-flex flex-column">
                        <h2>Contact US</h2>
                        <p>
                            For any inquiries or assistance, please reach out to
                            DAK Trading PLC. Our dedicated team is here to
                            support you with all your trading needs. Contact us
                            today and experience our commitment to excellence.
                        </p>
                    </div>
                    <div className="contactForm-form col-lg-6 col-md-12 col-sm-12">
                        <div class="mb-3 mt-5 remove-top-margin">
                            <label
                                htmlFor="exampleFormControlInput1"
                                className="form-label"
                                style={{ width: "100%", textAlign: "start" }}
                            >
                                Email address
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="exampleFormControlInput1"
                                placeholder="name@example.com"
                                // style={{ height: "50px" }}
                            />
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="exampleFormControlTextarea1"
                                className="form-label"
                                style={{
                                    width: "100%",
                                    textAlign: "start",
                                }}
                            >
                                Leave your comment
                            </label>
                            <textarea
                                className="form-control"
                                id="exampleFormControlTextarea1"
                                rows="4"
                            ></textarea>
                        </div>
                        <div className="mb-3">
                            <button
                                className="btn btn-primary submit-form-btn"
                                style={{ width: "100%", textAlign: "center" }}
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ContactForm;
