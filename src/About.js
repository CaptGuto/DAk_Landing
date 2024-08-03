import React, { forwardRef } from "react";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import imageCard1 from "./assets/images/AboutSeeme-Photoroom.png";
import aboutImage from "./assets/images/aboutTyer.png";
import "./App.css";

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
                                    DAK Trading PLC is a leading Ethiopian
                                    import-export company dedicated to
                                    facilitating seamless global trade. We
                                    empower Ethiopian businesses by connecting
                                    their high-quality exports, like sesame
                                    seeds, soya beans, and various pulses, with
                                    international markets. Additionally, we
                                    serve Ethiopian industries by importing
                                    essential products such as tires, ceramics,
                                    trucks and industrial machinery, industrial
                                    chemicals, and plastics.
                                </p>
                            </div>
                            <div className="bottom_content">
                                <div className="left_content_paragraph_image_holder">
                                    <img src={imageCard1} alt="Sesame Seed" />
                                </div>
                                <div className="left_content_paragraph">
                                    <ul>
                                        <li>
                                            To promote Ethiopian exports by
                                            creating reliable market access for
                                            local producers.
                                        </li>
                                        <li>
                                            To ensure a consistent supply of
                                            essential goods for Ethiopian
                                            industries and consumers.
                                        </li>
                                        <li>
                                            {" "}
                                            To foster international trade
                                            partnerships that benefit Ethiopia's
                                            economic growth.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="left_content_paragraph top_content">
                                <p>
                                    DAK Trading PLC is a leading Ethiopian
                                    import-export company dedicated to
                                    facilitating seamless global trade. We
                                    empower Ethiopian businesses by connecting
                                    their high-quality exports, like sesame
                                    seeds, soya beans, and various pulses, with
                                    international markets. Additionally, we
                                    serve Ethiopian industries by importing
                                    essential products such as tires, ceramics,
                                    trucks and industrial machinery, industrial
                                    chemicals, and plastics.
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
                        <img src={aboutImage} alt="About DAK Trading PLC" />
                    </motion.div>
                </div>
            </section>
        </div>
    );
});

export default About;
