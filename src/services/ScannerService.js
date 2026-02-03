import ScanProcessor from './ScanProcessor.js';

class ScannerService {

    constructor() {
        this.scanProcessor = null;
    }

    setProcessor(processor) {
        this.scanProcessor = processor;
    }

    async scan(prevScanImg, currentScanImg) {
        await this.scanProcessor.process(prevScanImg, currentScanImg);
    }


}