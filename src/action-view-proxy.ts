import axios, {AxiosResponse} from "axios";
import {serviceUrl} from "./consul";

export class ActionViewProxy {
    async findAll(): Promise<AxiosResponse> {
        let url = await serviceUrl('query-service');
        return axios.get(`http://${url}/action-views`)
            .then(({data}) => data);
    };
}