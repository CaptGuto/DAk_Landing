import React, { forwardRef } from "react";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./App.css";
import Slider from "./Slider";
import Header from "./Hearder";

import image1 from "./assets/images/tyre2.png";
import image2 from "./assets/images/_Oa86jjDAKgLGG_RwSpGt-transformed.png";
import image3 from "./assets/images/industrialChemicals1.png";

const Hero = forwardRef(({ scrollToSection, AboutRef, ServiceRef }, ref) => {
    const images = [image1, image2, image3];

    const { ref: welcomeRef, inView: welcomeInView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });
    const { ref: textRef, inView: textInView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });
    const { ref: buttonRef, inView: buttonInView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });
    const { ref: imageRef, inView: imageInView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });
    const { ref: bottomTextRef, inView: bottomTextInView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    return (
        <div className="Hero_Container" ref={ref}>
            <div className="Content_Holder">
                <div className="Welcome_Content">
                    <motion.h1
                        ref={welcomeRef}
                        initial={{ opacity: 0, x: -100 }}
                        animate={{
                            opacity: welcomeInView ? 1 : 0,
                            x: welcomeInView ? 0 : -100,
                        }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="WelcomStyleSpan1">WELCOME TO </span>
                        <span className="WelcomStyleSpan2">
                            DAK TRADING PLC
                        </span>
                    </motion.h1>
                    <motion.div
                        className="text_container"
                        ref={textRef}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{
                            opacity: textInView ? 1 : 0,
                            y: textInView ? 0 : 50,
                        }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <p>
                            DAK Trading PLC is a dynamic import-export company
                            specializing in the trade of agricultural
                            commodities and industrial products. With a strong
                            focus on quality, reliability, and customer
                            satisfaction, we connect global markets by
                            facilitating the exchange of goods across borders.
                        </p>
                    </motion.div>
                    <button
                        onClick={() => {
                            scrollToSection(AboutRef);
                        }}
                    >
                        Learn more
                    </button>
                </div>
                <div className="Image_Container">
                    <motion.div
                        ref={imageRef}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{
                            opacity: imageInView ? 1 : 0,
                            scale: imageInView ? 1 : 0.8,
                        }}
                        transition={{ duration: 0.5 }}
                    >
                        <Slider images={images} />
                    </motion.div>
                    <motion.div
                        className="Bottom_Image"
                        ref={bottomTextRef}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{
                            opacity: bottomTextInView ? 1 : 0,
                            x: bottomTextInView ? 0 : 100,
                        }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div>
                            <h2>Variours Products of DAK</h2>
                            <h3>
                                DAK Trading Plc offers a wide range of import
                                and export products, including oily seeds and
                                imported machinery.
                            </h3>
                        </div>
                        <div className="more_services_button ">
                            <button
                                onClick={() => {
                                    scrollToSection(ServiceRef);
                                }}
                            >
                                More
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
});

export default Hero;
