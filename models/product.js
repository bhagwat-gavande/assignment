module.exports = (sequelize, DataTypes)=>{
    const Product = sequelize.define('product',{
        categoryName:{
            type:DataTypes.STRING
        },
        productName:{
            type:DataTypes.STRING
        },
        description:{
            type:DataTypes.STRING
        },
        price:{
            type:DataTypes.INTEGER
        },
        productImage:{
            type:DataTypes.TEXT
        },
        isActive:{
            type:DataTypes.BOOLEAN,
            defaultValue: true
        }
    },{
        freezeTableName: true,
        tableName: 'product',
    })

    Product.addProduct = (categoryName,productName,description,price,productImage) => Product.create({ categoryName, productName, description, price, productImage });

    Product.updateProduct = (id) => Product.update({},{ where: { id: id, isActive: true } });

    return Product;
}