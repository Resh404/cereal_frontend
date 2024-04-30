import {useParams} from "react-router-dom";
import {useFetchCerealById, useUpdateCereal} from "../hooks/CerealHooks.ts";
import ApiStatus from "../apiStatus.tsx";
import CerealForm from "./CerealForm.tsx";

const CerealEdit =  () => {
    const {id} = useParams();
    if (!id) throw Error("Id not found");
    const cerealId = parseInt(id);

    const {data, status, isSuccess} = useFetchCerealById(cerealId);
    const updateCerealMutation = useUpdateCereal();

    if (!isSuccess) return <ApiStatus status={status}/>

    return (
        <CerealForm
            cereal={data}
            submitted={c => updateCerealMutation.mutate(c)}
        />
    )
}

export default CerealEdit