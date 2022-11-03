/**
 * dragons -> findAll without include -> used mainly for overview of dragons, no need to load
 *  extra data (class, species) -> in case of querying for class / species -> queried under
 *  Dragon type
 *
 * dragon -> full profile of dragon including class and species
 */

export const dragonsResolver = {
  Query: {
    dragons: async (_, { input, limits }, { DragonRepository }) => {
      return await DragonRepository.findDragonsDynamically(input, limits);
    },
    dragon: async (_, { input }, { DragonRepository }) => {
      const dragon = await DragonRepository.findOneByName(input.name);

      if (dragon) return dragon;

      throw new Error(`${input.name} not found`);
    },
    distinctHeads: async (_, __, { DragonRepository }) => {
      const dragonsHeadsCount =
        await DragonRepository.getDistinctHeadsProperty();
      return { heads: dragonsHeadsCount.map((drg) => drg.heads) };
    },
  },
  Dragon: {
    class: async (dragon, __, { ClassRepository }) => {
      if (!dragon.class) {
        return await ClassRepository.findOneById(dragon.classId);
      }
      return dragon.class;
    },
    species: async (dragon, __, { SpeciesRepository }) => {
      if (!dragon.species)
        return await SpeciesRepository.findOneById(dragon.speciesId);

      return dragon.species;
    },
  },
};
