import { resolveActionViews } from "./action-view-resolver";
import { resolveAsteroids } from "./resolve-asteroids";

export const resolvers = {
    Query: {
        actionViews: resolveActionViews,
    },

    ActionView: {
        asteroidList: resolveAsteroids,
    },
};