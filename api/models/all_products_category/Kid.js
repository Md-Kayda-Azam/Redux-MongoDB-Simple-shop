import mongoose from "mongoose";


// create student schema
const kidsSchema = mongoose.Schema({

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
    colorFamilys : {
        type : Array,
        default : []
    },
    shelfLife : {
        type : Array,
        default : []
    },
    packSizes : {
        type : Array,
        default : []
    },
    countryofOrigin : {
        type : Array,
        default : []
    },
    

}, {
    timestamps : true
});




// export model 
export default mongoose.model('Kid', kidsSchema);
