import { GenerateIntStorageStateHooks } from '../hooks/useStorageState';

export const [useRedThreshold,  useReadOnlyRedThreshold] = GenerateIntStorageStateHooks('red-threshold', 190);
export const [useYellowThreshold,  useReadOnlyYellowThreshold] = GenerateIntStorageStateHooks('yellow-threshold', 150);
