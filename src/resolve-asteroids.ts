import {Context} from "./context";
import {AxiosResponse} from "axios";

export const resolveAsteroids = (_: any, args: object, context: Context): Promise<AxiosResponse> => {
    return context.nasaProxy.findAll();
}