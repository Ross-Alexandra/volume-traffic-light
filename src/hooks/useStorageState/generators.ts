import {
    useStorageState,
    useReadOnlyStorageState
} from './hooks';
import {
    numberToStringTransformer,
    stringToFloatTransformer,
    stringToIntTransformer,
    objectToStringTransformer,
    stringToObjectTransformer
} from './transformers';

// Builder function to prebuild the useStorageState and
// useReadOnlyStorageState hooks. This will allow a user to
// generateStorageStateHooks(key, default, toString, toValue)
// returning them a no-argument hook for each of their state
// variables.
export function generateStorageStateHooks<T>(key: string, defaultValue?: T, toString?: stringTransformer<T>, toValue?: valueTransformer<T>) {
    const readWriteHook = () => useStorageState(key, defaultValue, toString, toValue);
    const readOnlyHook = () => useReadOnlyStorageState(key, defaultValue, toValue);

    return [readWriteHook, readOnlyHook];
}

export function GenerateIntStorageStateHooks(key: string, defaultValue?: number) {
    return generateStorageStateHooks(key, defaultValue, numberToStringTransformer, stringToIntTransformer);
}

export function GenerateFloatStorageStateHooks(key: string, defaultvalue?: number) {
    return generateStorageStateHooks(key, defaultvalue, numberToStringTransformer, stringToFloatTransformer);
}

export function GenerateObjectStorageStateHooks<T>(key: string, defaultValue?: T) {
    return generateStorageStateHooks(key, defaultValue, objectToStringTransformer<T>, stringToObjectTransformer);
}
