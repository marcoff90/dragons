test('', () => {
  const mockCreateUser = jest.fn(({ id, email }) => {
    return {
      extraProperty: 'info',
      id,
      email,
    };
  });

  const result = mockCreateUser({ id: 1, email: 'test@example.com' });
  expect((({ id, email }) => ({ id, email }))(result)).toEqual({
    id: 1,
    email: 'test@example.com',
  });
});
