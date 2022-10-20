export const MAX_VOLUME = 255;

export async function setupMic(onCannotGetMic: () => void) {
    try {
        const micStream = await navigator.mediaDevices.getUserMedia({
            audio: true
        });

        const audioContext = new AudioContext();

        const mic = audioContext.createMediaStreamSource(micStream);
    
        // Set the analyzer values to allow checking the volume.
        const analyzer = audioContext.createAnalyser();
        analyzer.fftSize = 512;
        analyzer.minDecibels = -50;
        analyzer.maxDecibels = -18;
        analyzer.smoothingTimeConstant = 0.4;
    
        mic.connect(analyzer);
        const volumes = new Uint8Array(analyzer.frequencyBinCount);

        const getMicVolumeCallback = () => {
            analyzer.getByteFrequencyData(volumes);

            // const nonZeroFreqs = volumes.filter(vol => vol > 0);
            // const volumeSum = nonZeroFreqs.reduce((acc, vol) => {
            //     return acc = vol;
            // }, 0);
            // const averageVolume = (volumeSum / nonZeroFreqs.length);

            // Weird type conversion to allow us to treat the Uint8Array as
            // a number[]. For Math.max, this is a reasonable assumption.
            const unknownVolumes: unknown = volumes;
            const maxVolume = Math.max.apply(null, (unknownVolumes as number[]));

            return maxVolume;
        };


        return getMicVolumeCallback;
    } catch (error) {
        console.log(error);

        onCannotGetMic();
        return;
    }
}
