module.exports.up = (queryInterface, DataTypes) => {
  return queryInterface.createTable(
    "chefs",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER.UNSIGNED
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      deletedAt: {
        allowNull: true,
        type: DataTypes.DATE
      }
    },
    {
      charset: "utf8"
    }
  );
};

module.exports.down = queryInterface => queryInterface.dropTable("chefs");
