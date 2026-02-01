import express from 'express';
import { createScan, getAllScans, getScanById, getScansForUser } from '../controllers/scanController.js';

const router = express.Router();


router.post('/', createScan);

router.get('/', getAllScans);

router.get('/:id', getScanById);

router.get('/user/:userId', getScansForUser);


export default router;
