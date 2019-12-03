import { Chef } from "#root/db/models";

const createChefResolver = (context: any, { name }: { name: string }) => {
  return Chef.create({ name });
};

export default createChefResolver;
