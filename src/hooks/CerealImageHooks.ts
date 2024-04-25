import {useQuery} from "@tanstack/react-query";
import {Image} from "../types/CerealImages.ts";
import axios, {AxiosError} from "axios";
import config from "../config.ts";

const useFetchCerealImage = (id: number) => {
    return useQuery<Image, AxiosError>({
        queryKey: ["image", id],
        queryFn: async () =>
            axios.get(`${config.baseApiUrl}/api/image/${id}`)
                .then((response) => response.data),
    });
}

export default useFetchCerealImage;