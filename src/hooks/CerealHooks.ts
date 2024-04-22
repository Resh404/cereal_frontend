import {Cereal} from "../types/Cereal.ts";
import config from "../config.ts";
import {useQuery} from "@tanstack/react-query";
import axios, {AxiosError} from "axios";

const useFetchCereals = () => {
    return useQuery<Cereal[], AxiosError>({
        queryKey: ["cereals"],
        queryFn: async () =>
            axios.get(`${config.baseApiUrl}/api/Cereal`)
                .then((response) => response.data),
            })
    }

export default useFetchCereals