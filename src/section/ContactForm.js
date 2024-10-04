import React, { useState } from "react";
import "../style/App.css";

function ContactForm() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [response, setResponse] = useState("");
    const [loading, setLoading] = useState(false); // New loading state

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true); // Set loading to true when submitting

        const formData = new FormData();
        formData.append("email", email);
        formData.append("message", message);

        fetch("/send_mail.php", {
            method: "POST",
            body: formData,
        })
            .then((res) => res.text())
            .then((data) => {
                setResponse(data);
                setLoading(false); // Stop loading when response is received
            })
            .catch((error) => {
                setResponse("Error sending email.");
                setLoading(false); // Stop loading in case of error
            });
    };

    return (
        <div className="contactForm-container d-flex justify-content-between">
            <div className="Content_Holder">
                <div className="row content_box">
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
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3 mt-5 remove-top-margin">
                                <label
                                    htmlFor="email"
                                    className="form-label"
                                    style={{
                                        width: "100%",
                                        textAlign: "start",
                                    }}
                                >
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    disabled={loading} // Disable input during loading
                                />
                            </div>
                            <div className="mb-3">
                                <label
                                    htmlFor="message"
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
                                    id="message"
                                    rows="4"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                    disabled={loading} // Disable input during loading
                                ></textarea>
                            </div>
                            <div className="mb-3">
                                <button
                                    type="submit"
                                    className="btn btn-primary submit-form-btn"
                                    style={{
                                        width: "100%",
                                        textAlign: "center",
                                    }}
                                    disabled={loading} // Disable button during loading
                                >
                                    {loading ? "Sending..." : "Submit"}{" "}
                                    {/* Button text changes based on loading state */}
                                </button>
                            </div>
                            {loading && <p>Sending your message...</p>}{" "}
                            {/* Display loading message */}
                            <p>{response}</p> {/* Response from the server */}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;
