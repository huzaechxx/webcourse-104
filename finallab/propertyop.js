const propertymodel = require("./models/roommodel");
const createproperty = async(location,price,avaliability,pic1,pic2,pic3,rating)=>{
    console.log("create property");
    let property = new propertymodel();
    property.location = location;
    property.price = price;
    property.avaliability = avaliability;
    property.pic1= pic1;
    property.pic2=pic2;
    property.pic3=pic3;
    property.rating= rating;
    await property.save();
    return property;
};
module.exports.createproperty = createproperty;