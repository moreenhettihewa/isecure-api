class ScanProcessor {
    // making abstract
    constructor() {
        if (this.constructor === ScanProcessor) {
            throw new Error("Abstract classes can't be instantiated.");
        }
    }

    async process(prevScanImg, currentScanImg) {
        throw new Error("Method 'process()' must be implemented.");
    }
}

export default ScanProcessor;
