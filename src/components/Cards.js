import "../style/Cards.css";

function Cards({
    cardTitle,
    cardSmallDescription,
    cardDescription,
    image,
    theme,
}) {
    const Theme1 = {
        BackgroundColor: {
            backgroundColor: "rgba(190, 146, 78, 0.95)",
        },
        shadoTouse: "0 4px 8px rgba(219, 136, 34, 0.5)",
    };

    const Theme2 = {
        BackgroundColor: {
            backgroundColor: "rgba(19, 30, 42, 0.95)",
        },
        shadoTouse: "0 4px 8px rgba(19, 30, 42, 0.5)",
    };

    const cardStyle = {};
    const SelectedTheme = theme === "theme1" ? Theme1 : Theme2;

    const imageBackground = {
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
        backgroundSize: "contain",
        boxShadow: SelectedTheme.shadoTouse,
        "--box-shadow-color": SelectedTheme.BackgroundColor.backgroundColor,
    };

    return (
        <div className="card_container" style={imageBackground}>
            <div className="card_content" style={SelectedTheme.BackgroundColor}>
                <h3>{cardTitle}</h3>
                <h5>{cardSmallDescription}</h5>
                <p>{cardDescription}</p>
            </div>
        </div>
    );
}

export default Cards;
