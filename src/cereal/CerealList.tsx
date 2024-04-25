import useFetchCereals from "../hooks/CerealHooks.ts";
import ApiStatus from "../apiStatus.tsx";
import {useNavigate} from "react-router-dom";
import {Cereal} from "../types/Cereal.ts";

const CerealList = () => {
    const nav = useNavigate();
    const {data, status, isSuccess} = useFetchCereals()

    if (!isSuccess)
        return <ApiStatus status={status}/>

    return (
        <div>
            <div className={"row mb-2"}>
                <h5 className={"themeFontColor text-center"}>
                    List of Cereals</h5>
            </div>
            <table className={"table table-hover"}>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Manufacturer</th>
                    <th>Type</th>
                    <th>Calories</th>
                    <th>Protein</th>
                    <th>Fat</th>
                    <th>Sodium</th>
                    <th>Fiber</th>
                    <th>Carbo</th>
                    <th>Sugars</th>
                    <th>Potass</th>
                    <th>Vitamins</th>
                    <th>Shelf</th>
                    <th>Weight</th>
                    <th>Cups</th>
                    <th>Rating</th>
                </tr>
                </thead>
                <tbody>
                {data && data.map((cereal: Cereal) => (
                    <tr key={cereal.id} onClick={() => nav(`/cereal/${cereal.id}`)}>
                        <td>{cereal.name}</td>
                        <td>{cereal.manufacturer}</td>
                        <td>{cereal.type}</td>
                        <td>{cereal.calories}</td>
                        <td>{cereal.protein}</td>
                        <td>{cereal.fat}</td>
                        <td>{cereal.sodium}</td>
                        <td>{cereal.fiber}</td>
                        <td>{cereal.carbo}</td>
                        <td>{cereal.sugars}</td>
                        <td>{cereal.potass}</td>
                        <td>{cereal.vitamins}</td>
                        <td>{cereal.shelf}</td>
                        <td>{cereal.weight}</td>
                        <td>{cereal.cups}</td>
                        <td>{cereal.rating}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>)
}

export default CerealList

/* const [cereals, setCereals] = useState<Cereal[]>([])

const getCereals = async () => {
    const response = await fetch(`${config.baseApiUrl}/api/Cereal`);
    const data = await response.json()
    setCereals(data)
}
getCereals()*/