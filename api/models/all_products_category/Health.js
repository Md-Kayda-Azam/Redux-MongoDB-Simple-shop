import mongoose from "mongoose";


// create student schema
const healthSchema = mongoose.Schema({

    name : {
        type : String,
        required : true,
        trim : true
    },
    regular_price : {
        type : Number,
        required : true,
    },
    sale_price : {
        type : Number,
    },
    stock : {
        type : Number,
    },
    photo : {
        type : String,
        default : "p.png"
    },
    gallery : {
        type : Array,
        default : []
    },
    brands : {
        type : Array,
        default : []
    },
    services : {
        type : Array,
        default : []
    },
    locations : {
        type : Array,
        default : []
    },
    packSizes : {
        type : Array,
        default : []
    },
    countryofOrigins : {
        type : Array,
        default : []
    },
    warrantyTypes : {
        type : Array,
        default : []
    },
    shelfLifes : {
        type : Array,
        default : []
    },
    colorFamily : {
        type : Array,
        default : []
    },
    weight : {
        type : Array,
        default : []
    },
    

}, {
    timestamps : true
});




// export model 
export default mongoose.model('Health', healthSchema);
