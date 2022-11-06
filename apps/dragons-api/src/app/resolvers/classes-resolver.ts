export const classesResolver = {
  Query: {
    classes: async (_, __, { ClassRepository }) => {
      return await ClassRepository.findAll();
    },
  },
};
