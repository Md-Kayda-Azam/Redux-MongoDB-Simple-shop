import mongoose from "mongoose";


// create student schema
const tagSchema = mongoose.Schema({

    name : {
        type : String,
        required : true,
        trim : true
    },
    slug : {
        type : String,
    },
    status : {
        type : String,
        default : true
    },

}, {
    timestamps : true
});




// export model 
export default mongoose.model('Tag', tagSchema);
