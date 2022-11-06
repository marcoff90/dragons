export const speciesResolver = {
  Query: {
    species: async (_, __, { SpeciesRepository }) => {
      return await SpeciesRepository.findAll();
    },
  },
};
