import express from 'express';
import {sendReservation} from '../controller/Reservation.js'

const router= express.Router();

router.post("/send", sendReservation); 

export default router;
