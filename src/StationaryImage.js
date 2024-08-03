function StationedImage({ image }) {
    const backgroundImage = {
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        height: "460px",
    };

    return <div className="image_container" style={backgroundImage}></div>;
}

export default StationedImage;
