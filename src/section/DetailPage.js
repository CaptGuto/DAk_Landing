import detailImage from "./assets/images/grainVertical.jpg";

const DetailPage = () => {
    return (
        <div className="Detail_container">
            <div className="Content_Holder row">
                <div className="col-5">
                    <img src={detailImage} alt="" className="img-fluid" />
                </div>
                <div className="col-7" style={{ backgroundColor: "yello" }}>
                    other something
                </div>
            </div>
        </div>
    );
};

export default DetailPage;
