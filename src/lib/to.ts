export default <T>(promise: Promise<T>): Promise<[Error | undefined, T]> =>
  promise
    .then<[undefined, T]>((res: T) => [undefined, res])
    .catch<[Error, any]>((err: Error) => [err, undefined]);
