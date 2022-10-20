import { GenerateIntStorageStateHooks } from '../hooks/useStorageState';

export const [useRedThreshold, useReadOnlyRedThreshold] = GenerateIntStorageStateHooks('red-threshold', 190);
export const [useYellowThreshold, useReadOnlyYellowThreshold] = GenerateIntStorageStateHooks('yellow-threshold', 150);

export const [useMinMicVolume, useReadOnlyMinMicVolume] = GenerateIntStorageStateHooks('min-mic', -40);
export const [useMaxMicVolume, useReadOnlyMaxMicVolume] = GenerateIntStorageStateHooks('max-mic', -10);