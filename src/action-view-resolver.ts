import {Context} from "./context";
import {AxiosResponse} from "axios";


export const resolveActionViews = (_: any, args: object, context: Context): Promise<AxiosResponse> => {
    return context.actionViewProxy.findAll();
}