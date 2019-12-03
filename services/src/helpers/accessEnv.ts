// accesses a variable inside of process.env, throwing an error if it's not found
// always run this method in advance (i.e. upon initialisation) so that the error is thrown as early as possible
// caching the values improves performance - accessing process.env many times is bad

const cache: { [key: string]: any } = {};

const accessEnv = (key: string, defaultValue?: any) => {
  if (!(key in process.env)) {
    if (defaultValue) return defaultValue;
    throw new Error(`${key} not found in process.env!`);
  }

  if (cache[key]) return cache[key];

  cache[key] = process.env[key];

  return process.env[key];
};

export default accessEnv;
