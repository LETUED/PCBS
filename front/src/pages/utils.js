// utils.js
export const saveToLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const loadFromLocalStorage = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};

export const exportLocalStorageAsJson = () => {
  const allData = {};
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    allData[key] = JSON.parse(localStorage.getItem(key));
  }
  return JSON.stringify(allData, null, 2);
};

export const clearLocalStorage = () => {
  localStorage.clear();
};

export const removeFromLocalStorage = (key) => {
  localStorage.removeItem(key);
};

export const saveStrategyToLocalStorage = (configKey, strategyKey, strategyData) => {
  const config = loadFromLocalStorage(configKey);
  localStorage.clear();
  if (config) {
    saveToLocalStorage(configKey, config);
  }
  saveToLocalStorage(strategyKey, strategyData);
};
export const saveConfigToLocalStorage = (configKey, configData) => {
  const currentConfig = loadFromLocalStorage(configKey);
  localStorage.clear();
  if (currentConfig) {
    saveToLocalStorage(configKey, currentConfig);
  }
  saveToLocalStorage(configKey, configData);
};