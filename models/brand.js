module.exports = function (sequelize, DataTypes) {
  let Brand = sequelize.define(
    "Brand",
    {
      id: {
        type: DataTypes.Int,
        allowNull: false,
        validate: {
          len: [1],
        },
      },

      brand_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1],
        },
      },
    },
    {
      freezeTableName: true,
    }
  );
  return Review;
};
