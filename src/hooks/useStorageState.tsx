import _ from 'lodash';
import { useState, useCallback, createContext, useContext } from 'react';

type stringTransformer<T> = (input: T) => string;
type valueTransformer<T> = (input: string) => T;

interface StringMap {
    // Allow any here as the caller could technically store
    // any kind of value they wanted in this state.
    //eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
}

interface LocalStorageContextType extends StringMap {
    setValue?: <T,>(key: string, value: T, transformer? :stringTransformer<T>) => void;
    loadFromLocalStorage?: <T,>(key: string, transformer?: valueTransformer<T>) => void;
}

const LocalStorageContext = createContext<LocalStorageContextType>({});

function getStringValue<T>(value: T, transformer?: stringTransformer<T>) {
    return transformer?.(value) ?? `${value}`;
}

function getRealValue<T>(value: string, transformer?: valueTransformer<T>) {
    // If a transformer is not provided, assume that T is 
    // a string, and convert T => string.
    return transformer?.(value) ?? ((value as unknown) as T);
}

export const ProvideLocalStorage: React.FC<React.PropsWithChildren> = ({children}) => {
    const [localState, _setLocalState] = useState<StringMap>({});

    const setLocalState = useCallback(<T,>(key: string, value: T) => {
        _setLocalState(currentLocalState => {
            return {
                ...currentLocalState,
                [key]: value
            };
        });
    }, [_setLocalState]);

    const setValue = useCallback(<T,>(key: string, value: T, transformer? :stringTransformer<T>) => {
        // Set the local variant which is not stored as a string,
        setLocalState<T>(key, value);

        // Set the localStorage string variant.
        const stringValue = getStringValue<T>(value, transformer);
        window.localStorage.setItem(key, stringValue);
    }, [setLocalState]);

    const loadFromLocalStorage = useCallback(<T,>(key: string, transformer?: valueTransformer<T>) => {
        const stringValue = window.localStorage.getItem(key);
        if (!stringValue) return;

        const value = getRealValue<T>(stringValue, transformer);
        setLocalState<T>(key, value);

        return value;
    }, []);

    const value = {
        ...localState,
        setValue,
        loadFromLocalStorage
    };

    return (
        <LocalStorageContext.Provider value={value}>
            {children}
        </LocalStorageContext.Provider>
    );
};

export function useStorageState<T>(key: string, defaultValue?: T, toString?: stringTransformer<T>, toValue?: valueTransformer<T>) {

    // Use the provided key to lookup the value from the context, and 
    // get the setter & loader.
    const {[key]: storedValue, setValue, loadFromLocalStorage} = useContext(LocalStorageContext);
    
    const stateSetter = (newValue: T) => setValue?.<T>(key, newValue, toString);

    // If there is no value currently in state, attempt to load one
    // from localStorage.
    const existingValue = storedValue ?? loadFromLocalStorage?.(key, toValue);

    // If there is no value in local state, then this is a newly registered
    // value.
    const currentValue = existingValue ?? defaultValue;

    // If there is nothing in local state, local storage, and
    // the value which would be newly registered in undefined,
    // then ignore then and expose the setter.
    if (_.isUndefined(currentValue)) return [undefined, stateSetter];
    
    // If current value is undefined, then default Value
    // must have been undefined, and the above return would have
    // been caught.
    // If existing value is undefined, then this is the first time accessing
    // it, so we need to set it.
    if (_.isUndefined(existingValue)) setValue?.<T>(key, defaultValue as T, toString);

    return [currentValue, stateSetter];
}

// Some default transformers
export const objectToStringTransformer= <T,>(value: T) => JSON.stringify(value);
export const stringToObjectTransformer = (value: string) => JSON.parse(value);

export const numberToStringTransformer = (value: number) => value + '';
export const stringToIntTransformer = (value: string) => Number.parseInt(value);
export const stringToFloatTransformer = (value: string) => Number.parseFloat(value);