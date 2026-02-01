import { Audit, User, Scan } from '../models/associations.js';


// Create a new audit
export const createAudit = async (req, res) => {
    try {
        const { userId, name, description } = req.body;
        const audit = await Audit.create({ userId, name, description });
        res.status(201).json(audit);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


// Update an audit by ID
export const updateAudit = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description, prevScanId, currentScanId } = req.body;
        const audit = await Audit.findByPk(id);
        if (!audit) return res.status(404).json({ error: 'Audit not found' });
        await audit.update({ name, description, prevScanId, currentScanId });
        res.json(audit);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// Get all audits
export const getAllAudits = async (req, res) => {
    try {
        const audits = await Audit.findAll({
            include: [
                { model: User, attributes: ['id', 'username', 'email'] },
                { model: Scan, as: 'prevScan' },
                { model: Scan, as: 'currentScan' }
            ]
        });
        res.json(audits);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// Get an audit by ID
export const getAuditById = async (req, res) => {
    try {
        const audit = await Audit.findByPk(req.params.id, {
            include: [
                { model: User, attributes: ['id', 'username', 'email'] },
                { model: Scan, as: 'prevScan' },
                { model: Scan, as: 'currentScan' }
            ]
        });
        if (!audit) return res.status(404).json({ error: 'Audit not found' });
        res.json(audit);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
