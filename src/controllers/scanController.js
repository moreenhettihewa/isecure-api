import Scan from '../models/Scan.js';

export const createScan = async (req, res) => {
    try {
        const { type, url } = req.body;
        const scan = await Scan.create({ type, url });
        res.status(201).json(scan);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getAllScans = async (req, res) => {
    try {
        const scans = await Scan.findAll();
        res.json(scans);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getScansForUser = async (req, res) => {
    try {
        const scans = await Scan.findAll({ where: { userId: req.params.id } });
        res.json(scans);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getScanById = async (req, res) => {
    try {
        const scan = await Scan.findByPk(req.params.id);
        if (!scan) return res.status(404).json({ error: 'Scan not found' });
        res.json(scan);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
