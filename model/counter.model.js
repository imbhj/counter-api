module.exports = (sequelize, DataTypes) => {
    return sequelize.define("counter", {
        value: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        freezeTableName: false,
        timestamps: true,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci"
    })
}