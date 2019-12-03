import { Chef } from "#root/db/models";

const chefsResolver = () => {
  return Chef.findAll();
};

export default chefsResolver;
