import {ActionViewProxy} from "./action-view-proxy";
import {NasaProxy} from "./nasa-proxy";

export interface Context {
    actionViewProxy: ActionViewProxy,
    nasaProxy: NasaProxy,
}