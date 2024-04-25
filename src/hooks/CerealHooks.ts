import {Cereal} from "../types/Cereal.ts";
import config from "../config.ts";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import axios, {AxiosError, AxiosResponse} from "axios";
import {useNavigate} from "react-router-dom";

const useFetchCereals = () => {
    return useQuery<Cereal[], AxiosError>({
        queryKey: ["cereals"],
        queryFn: async () =>
            axios.get(`${config.baseApiUrl}/api/Cereal`)
                .then((response) => response.data),
            });
    }

const useFetchCerealById = (id: number) => {
    return useQuery<Cereal, AxiosError>({
        queryKey: ["cereal", id],
        queryFn: async () =>
            axios.get(`${config.baseApiUrl}/api/Cereal/id/${id}`)
                .then((response) => response.data),
    });
}

const useFetchCerealByName = (name: string) => {
    return useQuery<Cereal, AxiosError>({
        queryKey: ["cereal", name],
        queryFn: async () =>
            axios.get(`${config.baseApiUrl}/api/Cereal/name/${name}`)
                .then((response) => response.data),
    });
}

const useAddCereal = () => {
    const nav = useNavigate();
    const queryClient = useQueryClient();
    return useMutation<AxiosResponse, AxiosError, Cereal>({
        mutationFn: async (cereal: Cereal) =>
            axios.post(`${config.baseApiUrl}/api/Cereal`, cereal),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["cereals"],
            });
            nav("/");
        },
    });
}

const useUpdateCereal = () => {
    const nav = useNavigate();
    const queryClient = useQueryClient();
    return useMutation<AxiosResponse, AxiosError, Cereal>({
        mutationFn: async (cereal: Cereal) =>
            axios.put(`${config.baseApiUrl}/api/Cereal/update`, cereal),
        onSuccess: (_, cereal) => {
            queryClient.invalidateQueries({
                queryKey: ["cereals"],
            });
            nav(`/cereal/${cereal.id}`);
        },
    });
}

const useDeleteCereal = () => {
    const nav = useNavigate();
    const queryClient = useQueryClient();
    return useMutation<AxiosResponse, AxiosError, Cereal>({
        mutationFn: async (cereal: Cereal) =>
            axios.put(`${config.baseApiUrl}/api/Cereal/delete/${cereal.id}`, cereal),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["cereals"],
            });
            nav("/");
        },
    });
}
export default useFetchCereals;
export {useFetchCerealById, useFetchCerealByName, useAddCereal, useUpdateCereal, useDeleteCereal};