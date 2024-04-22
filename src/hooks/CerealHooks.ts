import {Cereal} from "../types/Cereal.ts"
import config from "../config.ts"
import {useEffect, useState} from "react";

const useFetchCereals = (): Cereal[] => {
    const [cereals, setCereals] = useState<Cereal[]>([])

    useEffect(() => {
        const fetchCereals = async () => {
            const response = await fetch(`${config.baseApiUrl}/api/Cereal`);
            const cereals = await response.json();
            setCereals(cereals);
        };

        fetchCereals();
    }, []);

    return cereals
}

export default useFetchCereals