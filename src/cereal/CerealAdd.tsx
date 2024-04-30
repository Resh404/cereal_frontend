import {useAddCereal} from "../hooks/CerealHooks.ts";
import CerealForm from "./CerealForm.tsx";
import {Cereal} from "../types/Cereal";

const CerealAdd = () => {
    const addCerealMutation = useAddCereal();

    const cereal: Cereal = {
        name: "N/A",
        manufacturer: "N/A",
        type: "N/A",
        calories: 0,
        protein: 0,
        fat: 0,
        sodium: 0,
        fiber: 0,
        carbo: 0,
        sugars: 0,
        potass: 0,
        vitamins: 0,
        shelf: 0,
        weight: 0,
        cups: 0,
        rating: "N/A",
    }

    return (
        <CerealForm
            cereal={cereal}
            submitted={ (c) => addCerealMutation.mutate(c)}
        />
    );
}

    export default CerealAdd;