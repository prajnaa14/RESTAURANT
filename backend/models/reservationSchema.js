import mongoose from 'mongoose';
import validator from 'validator';  //for email

const reservationSchema= new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
        minLength: [3, "first name must contain atleast 3 charecters! "],
        maxLength: [30, "first name cannot exceed 30 charecters! "]
    },
    lastName:{
        type: String,
        required: true,
        minLength: [3, "last name must contain atleast 3 charecters! "],
        maxLength: [30, "last name cannot exceed 30 charecters! "]
    },
    email:{
        type: String,
        required: true,
        validate: [validator.isEmail ,"provide a valid email."]
    },
    phone:{
        type: String,
        required: true,
        minLength: [10, "phone number must contain atleast 10 charecters! "],
        maxLength: [10, "phone number cannot exceed 10 charecters! "]
    },
    date: {
        type: String,
        required: true,
    },
      time: {
        type: String,
        required: true,
    }
});

export const Reservation = mongoose.model("Reservation", reservationSchema);