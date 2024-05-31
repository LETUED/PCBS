import React from 'react';
import SliderOption from '../Option/SliderOption';

function Strategy4Component({ strategyParams, handleParamChange }) {
  return (
    <SliderOption
      label="슬라이더 조정"
      min={1}
      max={10}
      value={strategyParams.sliderOption || 1}
      onChange={(value) => handleParamChange('sliderOption', value)}
    />
  );
}

export default Strategy4Component;
