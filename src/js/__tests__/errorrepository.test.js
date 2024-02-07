import ErrorRepository from '../ErrorRepository';

test.each([
  [404, 'Page not found'],
  [500, 'Internal server error'],
])('test translate method', (code, description) => {
  const repo = new ErrorRepository();
  repo.data.set(code, description);
  expect(repo.translate(code)).toEqual(description);
});

test('test translate method error', () => {
  const repo = new ErrorRepository();
  const expected = new Error('Unknown error');
  expect(() => { repo.translate(404); }).toThrow(expected);
});
