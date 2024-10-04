import React, { useState, useEffect } from "react";

function StationedImage({ image }) {
    const [isMobile, setIsMobile] = useState(false);

    const checkScreenWidth = () => {
        if (window.innerWidth <= 420) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    };

    useEffect(() => {
        checkScreenWidth();

        window.addEventListener("resize", checkScreenWidth);

        return () => window.removeEventListener("resize", checkScreenWidth);
    }, []);

    const backgroundImage = {
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: isMobile ? "scroll" : "fixed",
        height: "460px",
    };

    return <div className="image_container" style={backgroundImage}></div>;
}

export default StationedImage;
