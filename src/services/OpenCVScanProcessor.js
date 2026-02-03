import ScanProcessor from './ScanProcessor.js';

class OpenCVScanProcessor extends ScanProcessor {

    async process(prevScanImg, currentScanImg) {
        // Mock OpenCV processing logic
        console.log('Processing scan with OpenCV...');
        return {
            processor: 'OpenCV',
            scanId: scan.id,
            status: 'completed',
            results: {
                featuresDetected: 42,
                resolution: '1920x1080'
            }
        };
    }
}

export default OpenCVScanProcessor;
