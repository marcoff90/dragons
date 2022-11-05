import { gql } from 'apollo-server-express';
import { server } from '../src/app/config/apollo-server';

/**
 * Dragons api is read only -> we can use the real server for testing without mocking
 * and overwriting any values in db
 */

describe('Query tests', () => {
  test('Dragons query no params', async () => {
    const DragonsQuery = gql(`
      {
        dragons {
          id
          name
        }
      }
    `);
    const res = await server.executeOperation({ query: DragonsQuery });
    expect(res).toMatchSnapshot();
  });

  test('Dragons query with class and species', async () => {
    const DragonsQuery = gql(`
      {
        dragons {
          id
          name
          class
          species
        }
      }
    `);
    const res = await server.executeOperation({ query: DragonsQuery });
    expect(res).toMatchSnapshot();
  });

  test('Dragons query with params', async () => {
    const DragonsQuery = gql(`
      {
        dragons(limits: { limit: 5 }) {
          id
          name
        }
      }
    `);
    const res = await server.executeOperation({ query: DragonsQuery });
    expect(res).toMatchSnapshot();
  });

  test('Dragon query with name param', async () => {
    const DragonQuery = gql(`
      {
        dragon(input: { name: "Toothless" }) {
          id
        }
      }
    `);
    const res = await server.executeOperation({ query: DragonQuery });
    expect(res).toMatchSnapshot();
  });

  test('Dragon query with no param returns Error', async () => {
    const DragonQuery = gql(`
      {
        dragon {
          id
        }
      }
    `);
    const res = await server.executeOperation({ query: DragonQuery });
    expect(res).toMatchSnapshot();
    expect(res.errors[0].message).toEqual(
      'Field "dragon" argument "input" of type "OneDragon!" is required, but it was not provided.'
    );
  });

  test('Dragon query with no no name in db returns Error', async () => {
    const DragonQuery = gql(`
      {
        dragon(input: { name: "HelloWorld" }) {
          id
        }
      }
    `);
    const res = await server.executeOperation({ query: DragonQuery });
    expect(res).toMatchSnapshot();
    expect(res.errors[0].message).toEqual('HelloWorld not found');
  });

  test('Distinct heads returns values for filters', async () => {
    const HeadQuery = gql(`
      {
        distinctHeads {
          heads
        }
      }
    `);
    const res = await server.executeOperation({ query: HeadQuery });
    expect(res).toMatchSnapshot();
  });

  test('Teams query', async () => {
    const TeamsQuery = gql(`
      {
        teams {
          id
          image
        }
      }
    `);
    const res = await server.executeOperation({ query: TeamsQuery });
    expect(res).toMatchSnapshot();
  });

  test('Classes query', async () => {
    const ClassesQuery = gql(`
      {
        classes {
          id
          name
          image
        }
      }
    `);
    const res = await server.executeOperation({ query: ClassesQuery });
    expect(res).toMatchSnapshot();
  });

  test('Species query', async () => {
    const SpeciesQuery = gql(`
      {
        species {
          id
          species
        }
      }
    `);
    const res = await server.executeOperation({ query: SpeciesQuery });
    expect(res).toMatchSnapshot();
  });
});
