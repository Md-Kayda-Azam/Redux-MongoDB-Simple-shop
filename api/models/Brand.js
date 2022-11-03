import mongoose from "mongoose";


// create student schema
const brandSchema = mongoose.Schema({

    name : {
        type : String,
        required : true,
        trim : true
    },
    slug : {
        type : String,
    },
    photo : {
        type : String,
        default : "p.png"
    },
    status : {
        type : String,
        default : true
    },

}, {
    timestamps : true
});




// export model 
export default mongoose.model('Brand', brandSchema);
