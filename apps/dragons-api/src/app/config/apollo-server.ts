import { ApolloServer } from 'apollo-server-express';
import { dragonSchema } from '../schemas/dragon-schema';
import { classSchema } from '../schemas/class-schema';
import { speciesSchema } from '../schemas/species-schema';
import { teamSchema } from '../schemas/team-image-schema';
import { dragonsResolver } from '../resolvers/dragons-resolver';
import { teamsResolver } from '../resolvers/teams-resolver';
import { classesResolver } from '../resolvers/classes-resolver';
import { speciesResolver } from '../resolvers/species-resolver';
import logger from '@dragons/util-logger';
import { querySchema } from '../schemas/query-schema';
import ClassRepository from '../repositories/class-repository';
import DragonRepository from '../repositories/dragon-repository';
import SpeciesRepository from '../repositories/species-repository';
import TeamImageRepository from '../repositories/team-image-repository';
import { buildSubgraphSchema } from '@apollo/subgraph';

export const server = new ApolloServer({
  schema: buildSubgraphSchema([
    {
      typeDefs: dragonSchema,
      resolvers: dragonsResolver,
    },
    {
      typeDefs: classSchema,
      resolvers: classesResolver,
    },
    {
      typeDefs: speciesSchema,
      resolvers: speciesResolver,
    },
    {
      typeDefs: teamSchema,
      resolvers: teamsResolver,
    },
    {
      typeDefs: querySchema,
    },
  ]),
  formatError: (error) => {
    logger.error(error);
    return new Error(error.message);
  },
  context: () => ({
    DragonRepository,
    ClassRepository,
    SpeciesRepository,
    TeamImageRepository,
  }),
});
