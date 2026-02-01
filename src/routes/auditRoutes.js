import express from 'express';
import { createAudit, getAllAudits, getAuditById, updateAudit } from '../controllers/auditController.js';

const router = express.Router();


router.post('/', createAudit);

router.put('/:id', updateAudit);

router.get('/', getAllAudits);

router.get('/:id', getAuditById);


export default router;
