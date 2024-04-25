import {ApolloServer} from "@apollo/server";
import express, {Express} from 'express';
import {config} from 'dotenv';
import {typeDefs} from "./src/schema";
import {resolvers} from "./src/resolver";
import {registerToConsul} from "./src/consul";
import {Context} from "./src/context";
import {expressMiddleware} from "@apollo/server/express4";
import {ActionViewProxy} from "./src/action-view-proxy";
import * as process from "process";
import {NasaProxy} from "./src/nasa-proxy";

config();

const app: Express = express();
const { PORT} = process.env;


const server = new ApolloServer<Context>({
    typeDefs,
    resolvers,
});

app.get('/health', (req, res): void => {
    res.status(200).json({ status: 'UP' });
});


server.start()
    .then(() => {
        app.use('/graphql', express.json(), expressMiddleware(
            server,
            {
                context: async () => ({
                    actionViewProxy: new ActionViewProxy(),
                    nasaProxy: new NasaProxy(),
                })
            })
        );
    })

registerToConsul();

app.listen(PORT, () => {
    console.log(`listening port ${PORT}`);
});