module.exports = (sequelize, DataTypes) => {
    const Recipe = sequelize.define("Recipe", {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
      },
      servings: {
        type: DataTypes.INTEGER,
      },
      prep_time: {
        type: DataTypes.INTEGER, // waktu persiapan dalam menit
      },
      cook_time: {
        type: DataTypes.INTEGER, // waktu memasak dalam menit
      },
      total_time: {
        type: DataTypes.INTEGER, // total waktu
      },
      image: {
        type: DataTypes.STRING,
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
      },
    });
  
    return Recipe;
  };
  