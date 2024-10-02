import React, { forwardRef, useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import imageCard1 from "../assets/images/AboutSeeme-Photoroom.webp";
import aboutImage from "../assets/images/aboutTyer.webp";
import machinery from "../assets/images/machinery.webp";
import "../style/App.css";
import "../style/About.css";

const AboutNew = forwardRef(({ scrollToSection, ServiceRef }, ref) => {
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

    const [firstBoxisVisible, firstBoxsetIsVisible] = useState(false);
    const [secondBoxisVisible, secondBoxsetIsVisible] = useState(false);

    const firstContainerRef = useRef(null);
    const secondContainerRef = useRef(null);
    let counterNumber = 0;
    let counterNumber1 = 0;

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (counterNumber === 0) {
                            firstBoxsetIsVisible(true);
                        }
                        counterNumber++;
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (firstContainerRef.current) {
            observer.observe(firstContainerRef.current);
        }

        return () => {
            if (firstContainerRef.current) {
                observer.unobserve(firstContainerRef.current); // Cleanup observer on unmount
            }
        };
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (counterNumber1 === 0) {
                            secondBoxsetIsVisible(true);
                            console.log("this staged has been reached");
                        }
                        counterNumber1++;
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (secondContainerRef.current) {
            observer.observe(secondContainerRef.current);
        }
        return () => {
            if (secondContainerRef.current) {
                observer.unobserve(secondContainerRef.current); // Cleanup observer on unmount
            }
        };
    }, []);

    return (
        <div className="" ref={ref}>
            <section className="Replacement-About-Container About-section-title">
                <div className="Content_Holder">
                    <div className="About_content_holder">
                        <div className="head-text-container">
                            <div className="text-about-us-container">
                                <h1>
                                    About
                                    <span className="makeGold"> US</span>
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section
                ref={firstContainerRef}
                className="Replacement-About-Container first-about-container"
                style={{
                    backgroundPosition: firstBoxisVisible
                        ? window.matchMedia("(max-width: 400px)").matches
                            ? "30% bottom" // For screens below 400px
                            : "35% bottom" // For screens above 400px
                        : "left bottom",
                    transition: "background-position 0.7s ease-out",
                }}
            >
                <div className="Content_Holder">
                    <div className="About_content_holder">
                        <div className="first-box">
                            <div className="text-section">
                                {" "}
                                <p className="first-paragraph">
                                    <span className="dak-name-in-paragraph">
                                        DAK Trading PLC{" "}
                                    </span>
                                    one of the largest import export companies
                                    in Ethiopia
                                </p>
                                <p>
                                    Our mission is to ensure the highest quality
                                    in both our exports and imports while
                                    delivering exceptional service to our
                                    partners and clients.
                                </p>
                                <p>
                                    We aim to set the standard for excellence
                                    and innovation in trade, fostering growth
                                    and success in our industry.
                                </p>
                                <div
                                    className="check-product-btn"
                                    onClick={() => scrollToSection(ServiceRef)}
                                >
                                    <button>Check our products</button>
                                </div>
                            </div>
                            <div className="image-section-container">
                                <div className="image-section">
                                    <img
                                        loading="lazy"
                                        src={imageCard1}
                                        alt="Sesame Seed"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="Replacement-About-Container second-about-container">
                <div className="Content_Holder">
                    <div className="About_content_holder">
                        <div className="second-box">
                            <div className="image-section-container">
                                <div className="image-section">
                                    <img
                                        loading="lazy"
                                        src={machinery}
                                        alt="Sesame Seed"
                                    />
                                </div>
                            </div>
                            <div className="text-section">
                                <div className="paragraph-listing">
                                    <div className="paragraph-listing-heading">
                                        <h5>Our Mission</h5>
                                    </div>
                                    <ul>
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
                        </div>
                    </div>
                </div>
            </section>
            <section
                ref={secondContainerRef}
                className="Replacement-About-Container third-about-container"
                style={{
                    backgroundPosition: secondBoxisVisible
                        ? "35% bottom"
                        : "right bottom",
                    transition: "background-position 1s ease-out",
                }}
            >
                <div className="Content_Holder">
                    <div className="About_content_holder">
                        <div className="third-box">
                            <div className="text-section">
                                <div className="paragraph-listing-heading">
                                    <h5>Vision and Core Values</h5>
                                </div>
                                <p>
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
                            <div className="image-section-container">
                                <div className="image-section">
                                    <img
                                        className="rotate-image"
                                        loading="lazy"
                                        src={aboutImage}
                                        alt="Sesame Seed"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
});

export default AboutNew;
