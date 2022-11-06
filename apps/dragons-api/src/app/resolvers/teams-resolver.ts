export const teamsResolver = {
  Query: {
    teams: async (_, __, { TeamImageRepository }) => {
      return await TeamImageRepository.findAll();
    },
  },
};
