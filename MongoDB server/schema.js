const mongoose=require("mongoose");
const schema=mongoose.Schema({
 facultyId:Number,
 facultyName:String,
 facultyInitial:String
})
module.exports =mongoose.model("faculties",schema)
//mongodb+srv://Drashti:<db_password>@cluster0.cgje9.mongodb.net/
//for compass connection
