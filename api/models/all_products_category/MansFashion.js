import mongoose from "mongoose";


// create student schema
const mansFashionSchema = mongoose.Schema({

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
    category : {
        type : Array,
        default : []
    },
    tags : {
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
    colorFamily : {
        type : Array,
        default : []
    },
    mainMaterial : {
        type : Array,
        default : []
    },
    warrantyTypes : {
        type : Array,
        default : []
    },
    teeNeckline : {
        type : Array,
        default : []
    },
    teeSleeveLength : {
        type : Array,
        default : []
    },
    warrantyPeriod : {
        type : Array,
        default : []
    },
    

}, {
    timestamps : true
});




// export model 
export default mongoose.model('MansFashion', mansFashionSchema);
