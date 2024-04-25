import {useParams} from "react-router-dom";
import ApiStatus from "../apiStatus.tsx";
import useFetchCerealImage from "../hooks/CerealImageHooks.ts";
import defaultImage from "./DefaultPhoto.ts";
import {useFetchCerealById} from "../hooks/CerealHooks.ts";

const CerealDetail = () => {
    const { id } = useParams();
    if (!id) throw Error("Id not found");
    const cerealId = parseInt(id);

    const { data: cerealData, status: cerealStatus, isSuccess: cerealIsSuccess } = useFetchCerealById(cerealId);

    const { data: imageData, status: imageStatus, isSuccess: imageIsSuccess } = useFetchCerealImage(cerealId);

    if (!cerealIsSuccess || !imageIsSuccess) return <ApiStatus status={cerealStatus || imageStatus} />;
    if (!cerealData) return <div>Cereal not found</div>

    const imgPath: string | undefined = imageData ? imageData : defaultImage;


    return (
        <div className="row">
            <div className="col-6">
                <div className="row">
                    <img
                        className="img-fluid"
                        src={imgPath}
                        alt="Cereal pic"
                        style={{ width: '500px', height: '500px' }}
                    />
                </div>
            </div>
            <div className="col-6">
                <div className="row mt-2">
                    <h2 className="col-12">{cerealData.name}</h2>
                </div>
                <div className="row">
                    <h4 className="col-12">{"Calories: " + cerealData.calories + " per serving"}</h4>
                </div>
                <div className="row">
                    <h4 className="col-12">{"Protein: " + cerealData.protein + "g"}</h4>
                </div>
                <div className="row">
                    <h4 className="col-12">{"Fat: " + cerealData.fat + "g"}</h4>
                </div>
                <div className="row">
                    <h4 className="col-12">{"Sodium: " + cerealData.sodium + "mg"}</h4>
                </div>
                <div className="row">
                    <h4 className="col-12">{"Fiber: " + cerealData.fiber + "g"}</h4>
                </div>
                <div className="row">
                    <h4 className="col-12">{"Sugars: " + cerealData.sugars + "g"}</h4>
                </div>
                <div className="row">
                    <h4 className="col-12">{"Vitamins: " + cerealData.vitamins + "%"}</h4>
                </div>
                <div className="row">
                    <h4 className="col-12">{"On shelf: " + cerealData.shelf}</h4>
                </div>
                <div className="row">
                    <h4 className="col-12">{"Rating: " + cerealData.rating}</h4>
                </div>

            </div>
        </div>
    );
};

export default CerealDetail;
