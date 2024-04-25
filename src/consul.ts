import Consul from 'consul';
import {config} from 'dotenv';

config();

const { PORT, SERVICE_NAME, CONSUL_PORT, CONSUL_URL } = process.env;

const consul: Consul.Consul = new Consul({ host: CONSUL_URL, port: CONSUL_PORT });

export const registerToConsul = async (): Promise<void> => {
    consul.agent.service.register({ name: SERVICE_NAME, port: Number(PORT) })
        .then(() => console.log(`Service ${SERVICE_NAME} registered`))
        .catch(err => console.log(err));
};

export const serviceUrl = async (serviceName: string): Promise<string> => {
    const [firstElement]: any = await consul.catalog.service.nodes(serviceName);
    const serviceAddress: string = firstElement['ServiceAddress'];
    const path: string = !!serviceAddress ? serviceAddress : firstElement['Address']
    return `${path}:${firstElement['ServicePort']}`
};