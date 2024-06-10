// utils.js
export const saveToLocalStorage = (key, data) => {
    if (key === 'coin') {
        localStorage.setItem(key, data); // 문자열로 저장
    } else {
        localStorage.setItem(key, JSON.stringify(data));
    }
};

export const loadFromLocalStorage = (key) => {
    const data = localStorage.getItem(key);
    if (key === 'coin') {
        return data; // 문자열 그대로 반환
    }
    try {
        return data ? JSON.parse(data) : null;
    } catch (error) {
        console.error(`Error parsing JSON data for key ${key}:`, error);
        return null;
    }
};

export const exportLocalStorageAsJson = () => {
    const allData = {};
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        try {
            if (key === 'coin') {
                allData[key] = localStorage.getItem(key); // 문자열 그대로 반환
            } else {
                allData[key] = JSON.parse(localStorage.getItem(key));
            }
        } catch (error) {
            console.error(`Error parsing JSON data for key ${key}:`, error);
            allData[key] = localStorage.getItem(key);
        }
    }
    return JSON.stringify(allData, null, 2);
};

export const clearLocalStorage = () => {
    localStorage.clear();
};

export const removeFromLocalStorage = (key) => {
    localStorage.removeItem(key);
};

export const saveStrategyToLocalStorage = (key, strategyData) => {
    // 기존 데이터를 초기화하고 새로운 전략 데이터로 저장
    if (key === 'strategy') {
        saveToLocalStorage(key, strategyData);
    } else if (key === 'coin') {
        // 'coin' key를 저장하는 로직 추가
        saveToLocalStorage(key, strategyData);
    }
};

export const saveConfigToLocalStorage = (key, configData) => {
    saveToLocalStorage(key, configData);
};
