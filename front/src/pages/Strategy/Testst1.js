import React from 'react';
import ToggleOption from '../Option/ToggleOption';

function Strategy1Component({ strategyParams, handleParamChange }) {
  return (
    <ToggleOption
      label="옵션 1 활성화"
      value={strategyParams.toggleOption || false}
      onChange={(e) => handleParamChange('toggleOption', e.target.checked)}
    />
  );
}

export default Strategy1Component;
