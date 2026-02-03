import ScanProcessor from './ScanProcessor.js';

class AIScanProcessor extends ScanProcessor {
    async process(prevScanImg, currentScanImg) {

        // Mock AI processing logic
        return {
            processor: 'AI',
            scanId: scan.id,
            status: 'completed',
            results: {
                confidence: 0.98,
                objects: ['person', 'laptop']
            }
        };
    }
}

export default AIScanProcessor;
