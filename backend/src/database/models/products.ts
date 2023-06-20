import { DataTypes } from 'sequelize';

export default function (sequelize) {
  const products = sequelize.define(
    'products',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      description: {
        type: DataTypes.TEXT,
      },
      price: {
        type: DataTypes.DECIMAL,
      },
      code: {
        type: DataTypes.TEXT,
      },
      category: {
        type: DataTypes.TEXT,
      },
      url: {
        type: DataTypes.TEXT,
      },
      importHash: {
        type: DataTypes.STRING(255),
        allowNull: true,    
        validate: {
          len: [0, 255],
        },    
      },
    },
    {
      indexes: [
        {
          unique: true,
          fields: ['importHash', 'tenantId'],
          where: {
            deletedAt: null,
          },
        },

      ],
      timestamps: true,
      paranoid: true,
    },
  );

  products.associate = (models) => {


    models.products.hasMany(models.file, {
      as: 'image',
      foreignKey: 'belongsToId',
      constraints: false,
      scope: {
        belongsTo: models.products.getTableName(),
        belongsToColumn: 'image',
      },
    });
    
    models.products.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: false,
      },
    });

    models.products.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.products.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return products;
}
