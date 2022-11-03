import mongoose from "mongoose";


// create student schema
const womensFashionSchema = mongoose.Schema({

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
    sizes : {
        type : Array,
        default : []
    },
    colorFamilys : {
        type : Array,
        default : []
    },
    mainMaterials : {
        type : Array,
        default : []
    },
    warrantyTypes : {
        type : Array,
        default : []
    },
    hijabStyles : {
        type : Array,
        default : []
    },
    patterns : {
        type : Array,
        default : []
    },
    listedYearSeasons : {
        type : Array,
        default : []
    },
    

}, {
    timestamps : true
});




// export model 
export default mongoose.model('WomensFashion', womensFashionSchema);
