import React from 'react';
import SelectOption from '../Option/SelectOption';

function Strategy2Component({ strategyParams, handleParamChange }) {
  return (
    <SelectOption
      label="옵션 2 선택"
      options={[
        { value: "option1", label: "옵션 1" },
        { value: "option2", label: "옵션 2" },
        { value: "option3", label: "옵션 3" }
      ]}
      value={strategyParams.selectOption || ''}
      onChange={(e) => handleParamChange('selectOption', e.target.value)}
    />
  );
}

export default Strategy2Component;
