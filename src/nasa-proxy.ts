import axios, {AxiosResponse} from "axios";
import {serviceUrl} from "./consul";

export class NasaProxy {
    async findAll(): Promise<AxiosResponse> {
        let url = await serviceUrl('nasa-service');
        return axios.get(`http://${url}/api/meteors`)
            .then(({data}) => data);
    };
}