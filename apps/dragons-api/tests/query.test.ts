import { gql } from 'apollo-server-express';
import { createTestClient } from 'apollo-server-testing';
import { server } from '../src/app/config/apollo-server';

describe('Query tests', () => {
  const testClient = createTestClient(server);

  test('Dragons query no params', async () => {
    const DragonsQuery = gql(`
      {
        dragons {
          id
          name
        }
      }
    `);
    const { query } = testClient;
    const res = await query({ query: DragonsQuery });
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
    const { query } = testClient;
    const res = await query({ query: DragonsQuery });
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
    const { query } = testClient;
    const res = await query({ query: DragonsQuery });
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
    const { query } = testClient;
    const res = await query({ query: DragonQuery });
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
    const { query } = testClient;
    const res = await query({ query: DragonQuery });
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
    const { query } = testClient;
    const res = await query({ query: DragonQuery });
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
    const { query } = testClient;
    const res = await query({ query: HeadQuery });
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
    const { query } = testClient;
    const res = await query({ query: TeamsQuery });
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
    const { query } = testClient;
    const res = await query({ query: ClassesQuery });
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
    const { query } = testClient;
    const res = await query({ query: SpeciesQuery });
    expect(res).toMatchSnapshot();
  });
});
