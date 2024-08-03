import React, { forwardRef, useRef } from "react";
import Cards from "./Cards";

const Service = forwardRef(({ title, images }, ref) => {
    const theme = "theme2";
    return (
        <div class="Service_Container" ref={ref}>
            <div className="About-Header-Text">
                {/* <h1>Services</h1> */}

                <span className="Service-Title">
                    <h2>{title}</h2>
                </span>
            </div>
            <div class="Content_Holder">
                <div class="export_services row justify-content-center">
                    <div class="col-lg-4 col-md-6 mb-4">
                        <Cards
                            cardTitle={"Tyer"}
                            cardSmallDescription={
                                "Humera and wellega finest sesame seeds"
                            }
                            cardDescription={
                                "Humera and Wellega are renowned varieties of Ethiopian sesame seeds, valued for their high oil content and rich flavor. Humera is known for its whitish color, while Wellega is darker and aromatic."
                            }
                            image={images[0]}
                            theme={theme}
                        />
                    </div>
                    <div class="col-lg-4 col-md-6 mb-4">
                        <Cards
                            cardTitle={"Trucks and Machinery"}
                            cardSmallDescription={
                                "High protine Soya beans from northern Ethiopia"
                            }
                            cardDescription={
                                "Ethiopian soybeans are notable for their high protein content and adaptability, contributing significantly to the country's agriculture by enhancing food security and supporting local industries."
                            }
                            image={images[1]}
                            theme={theme}
                        />
                    </div>
                    <div class="col-lg-4 col-md-6 mb-4">
                        <Cards
                            cardTitle={"Industrial Chemicals"}
                            cardSmallDescription={
                                "High oil content and quality Ethiopian Niger seed"
                            }
                            cardDescription={
                                "Ethiopian Niger seed is prized for its high oil content and quality, commonly used for edible oil production. It supports local agriculture and is an important export commodity. The finest in Ethiopia"
                            }
                            image={images[2]}
                            theme={theme}
                        />
                    </div>
                    <div class="col-lg-4 col-md-6 mb-4">
                        <Cards
                            cardTitle={"Plastics "}
                            cardSmallDescription={
                                "A unique appearance and high protein content"
                            }
                            cardDescription={
                                "Ethiopian White Speckled Beans are valued for their rich protein content and unique appearance, contributing to local diets and serving as an important export crop for the country's agriculture."
                            }
                            image={images[3]}
                            theme={theme}
                        />
                    </div>
                    <div class="col-lg-4 col-md-6 mb-4">
                        <Cards
                            cardTitle={"Ceramic"}
                            cardSmallDescription={
                                "high nutritional value and versatility in cooking"
                            }
                            cardDescription={
                                "Ethiopian Green Mung Beans are known for their high nutritional value and versatility in cooking, playing a significant role in local diets and contributing to the countrys agricultural exports the best quility in Ethiopia "
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
