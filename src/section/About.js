import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import imageCard1 from "../assets/images/AboutSeeme-Photoroom.png";
import aboutImage from "../assets/images/aboutTyer.png";
import "../style/App.css";

const About = forwardRef((_, ref) => {
    const { ref: line1Ref, inView: line1InView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });
    const { ref: line2Ref, inView: line2InView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });
    const { ref: line3Ref, inView: line3InView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });
    const { ref: imageRef, inView: imageInView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    return (
        <div className="About_Container" ref={ref}>
            <section className="About_Body_Container">
                <div className="Content_Holder row">
                    <div className="leftContent col-sm-12">
                        <header className="About_Header_Container container-fluid col-sm-12">
                            <div className="Content_Holder container">
                                <div className="About-Header-Text">
                                    <h1>
                                        About
                                        <span className="makeGold"> US</span>
                                    </h1>
                                </div>
                            </div>
                        </header>
                        <div className="left_content_holder">
                            <div className="left_content_paragraph top_content">
                                <p>
                                    DAK Trading PLC is dedicated to creating
                                    sustainable and efficient trade pathways
                                    between Ethiopia and global markets. Our
                                    mission is to ensure the highest quality in
                                    both our exports and imports while
                                    delivering exceptional service to our
                                    partners and clients. We aim to set the
                                    standard for excellence and innovation in
                                    trade, fostering growth and success in our
                                    industry.
                                </p>
                            </div>
                            <div className="bottom_content">
                                <div className="left_content_paragraph_image_holder">
                                    <img
                                        loading="lazy"
                                        src={imageCard1}
                                        alt="Sesame Seed"
                                    />
                                </div>
                                <div className="left_content_paragraph">
                                    <ul>
                                        <h5>Our Mission</h5>
                                        <li>
                                            To be the preferred partner for
                                            sourcing premium Ethiopian
                                            agricultural products globally.
                                        </li>
                                        <li>
                                            To expand our network of
                                            international trade partners and
                                            foster long-term, mutually
                                            beneficial relationships.
                                        </li>
                                        <li>
                                            {" "}
                                            To contribute to the economic growth
                                            and development of Ethiopia by
                                            facilitating seamless international
                                            trade.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="left_content_paragraph top_content">
                                <p>
                                    <h5>Vision and Core Values</h5>
                                    Our vision is to lead the way in Ethiopia
                                    and East Africa, setting benchmarks for
                                    excellence through unwavering commitment to
                                    quality, reliability, and innovative
                                    solutions. We uphold core values of
                                    integrity, customer satisfaction, and
                                    sustainability, aiming to foster growth and
                                    make a significant impact on both local and
                                    global markets. At DAK Trading PLC, we are
                                    dedicated to building a legacy of trust and
                                    excellence.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* <motion.div
                        className="vertical-line1"
                        ref={line1Ref}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{
                            opacity: line1InView ? 1 : 0,
                            x: line1InView ? 0 : 100,
                        }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                    ></motion.div>
                    <motion.div
                        className="vertical-line2"
                        ref={line2Ref}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{
                            opacity: line2InView ? 1 : 0,
                            x: line2InView ? 0 : 100,
                        }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    ></motion.div>
                    <motion.div
                        className="vertical-line3"
                        ref={line3Ref}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{
                            opacity: line3InView ? 1 : 0,
                            x: line3InView ? 0 : 100,
                        }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                    ></motion.div> */}
                    <motion.div
                        className="rightContent"
                        ref={imageRef}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{
                            opacity: imageInView ? 1 : 0,
                            scale: imageInView ? 1 : 0.8,
                        }}
                        transition={{ duration: 0.5, delay: 1.2 }}
                    >
                        <img
                            loading="lazy"
                            src={aboutImage}
                            alt="About DAK Trading PLC"
                        />
                    </motion.div>
                </div>
            </section>
        </div>
    );
});

export default About;
