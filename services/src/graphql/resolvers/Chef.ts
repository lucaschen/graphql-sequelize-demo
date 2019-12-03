import { Chef, Restaurant } from "#root/db/models";

const resolvers = {
  restaurants: (chef: Chef) => {
    return Restaurant.findAll({
      include: [
        {
          model: Chef,
          where: { id: chef.id }
        }
      ],
      order: [["name", "ASC"]]
    });
  }
};

export default resolvers;
