import mongoose from "mongoose";


// create student schema
const electronicSchema = mongoose.Schema({

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
    ramMemory : {
        type : Array,
        default : []
    },
    batteryCapacitymAh : {
        type : Array,
        default : []
    },
    operatingSystem : {
        type : Array,
        default : []
    },
    storageCapacity : {
        type : Array,
        default : []
    },
    warrantyType : {
        type : Array,
        default : []
    },
    numberofSIM : {
        type : Array,
        default : []
    },
    screenSizeinches : {
        type : Array,
        default : []
    },
    cameraBackMegapixels : {
        type : Array,
        default : []
    },
    warrantyPeriod : {
        type : Array,
        default : []
    },
    cameraFrontMegapixels : {
        type : Array,
        default : []
    },
    

}, {
    timestamps : true
});




// export model 
export default mongoose.model('Electronic', electronicSchema);
