import React, { forwardRef } from "react";
import Cards from "../components/Cards";

const Service = forwardRef(({ title, images }, ref) => {
    const theme = "theme2";
    return (
        <div class="Service_Container" ref={ref}>
            <div className="About-Header-Text">
                {/* <h1>Services</h1> */}

                <span className="Service-Title">
                    <h2 style={{ fontWeight: "bold" }}>
                        {title}
                        <span className=" makeBlue">Items</span>
                    </h2>
                </span>
            </div>
            <div class="Content_Holder">
                <div class="export_services row justify-content-center">
                    <div class="col-lg-4 col-md-6 mb-4">
                        <Cards
                            cardTitle={"Tyre"}
                            cardSmallDescription={
                                "Our imported tyres offer an exceptional balance of quality and affordability."
                            }
                            cardDescription={
                                "Designed for durability and optimal performance, these tyres provide reliability for a variety of vehicles, ensuring safety and value for our customers. For everyday use or long-distance travel, our tyres stand out for their quality."
                            }
                            image={images[0]}
                            theme={theme}
                        />
                    </div>
                    <div class="col-lg-4 col-md-6 mb-4">
                        <Cards
                            cardTitle={"Trucks and Machinery"}
                            cardSmallDescription={
                                "Top-quality, exceptional performance and reliability at great value."
                            }
                            cardDescription={
                                "Designed for power and endurance, our trucks and machinery deliver exceptional performance across demanding industries. Whether for construction, transport, or agriculture, they are built to handle tough tasks efficiently."
                            }
                            image={images[1]}
                            theme={theme}
                        />
                    </div>
                    <div class="col-lg-4 col-md-6 mb-4">
                        <Cards
                            cardTitle={"Rebars"}
                            cardSmallDescription={
                                " Formulated to meet the highest standards of quality and efficiency."
                            }
                            cardDescription={
                                "Suitable for a wide range of applications, they provide reliable performance in manufacturing, processing, and other industrial operations. With a focus on safety and effectiveness, our chemicals ensure consistency and value."
                            }
                            image={images[2]}
                            theme={theme}
                        />
                    </div>
                    <div class="col-lg-4 col-md-6 mb-4">
                        <Cards
                            cardTitle={"Building Materials "}
                            cardSmallDescription={
                                "Reliable strength, durability, and versatility for all construction needs."
                            }
                            cardDescription={
                                "Our building materials are designed to support a wide range of construction projects, providing exceptional quality and reliability. Whether for residential or commercial use, these materials ensure stability and long-lasting performance."
                            }
                            image={images[5]}
                            theme={theme}
                        />
                    </div>
                    <div class="col-lg-4 col-md-6 mb-4">
                        <Cards
                            cardTitle={"Plastics "}
                            cardSmallDescription={
                                "Superior strength, versatility, durability, and wide range of applications."
                            }
                            cardDescription={
                                "From packaging to industrial use, these plastics provide reliable performance and flexibility, ensuring long-lasting results. With a focus on quality and sustainability, helps meet the needs of both manufacturers and consumers."
                            }
                            image={images[3]}
                            theme={theme}
                        />
                    </div>
                    <div class="col-lg-4 col-md-6 mb-4">
                        <Cards
                            cardTitle={"Porcelain Tiles"}
                            cardSmallDescription={
                                "Crafted for durability and precision, our ceramics blend elegance with strength."
                            }
                            cardDescription={
                                "With their refined aesthetic and robust durability, these ceramics enhance both functionality and visual appeal. Ideal for applications requiring both style and resilience, our high-quality ceramics provide lasting value and quality."
                            }
                            image={images[4]}
                            theme={theme}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Service;

{
    /* <div className="container-fluid">
    <Cards
        cardTitle={"The Card Test"}
        cardSmallDescription={"a bit of something about the product in talk"}
        cardDescription={
            "writing a half lorem jus tto dipict the long description needed for this component to function properly"
        }
        image={images[1]}
    />
</div>; */
}
