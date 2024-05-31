import React from 'react';
import InputOption from '../Option/InputOption';

function Strategy3Component({ strategyParams, handleParamChange }) {
  return (
    <div>
      {[...Array(6)].map((_, index) => (
        <InputOption
          key={index}
          label={`숫자 입력 ${index + 1}`}
          value={strategyParams[`inputOption${index + 1}`] || ''}
          onChange={(e) => handleParamChange(`inputOption${index + 1}`, e.target.value)}
          minmax="1~10"
        />
      ))}
    </div>
  );
}

export default Strategy3Component;
