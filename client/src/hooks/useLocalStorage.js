import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        const item = localStorage.getItem(key);

        if (item) {
            return JSON.parse(item);
        } else {
            localStorage.setItem(key, JSON.stringify(initialValue));

            return initialValue;
        }
    });

    const setValue = value => {
        setStoredValue(value);
        localStorage.setItem(key, JSON.stringify(value));
    };

    return [storedValue, setValue];
}