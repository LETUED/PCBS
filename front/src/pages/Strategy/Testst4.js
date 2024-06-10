import React from 'react';
import InputOption from "../Option/InputOption";

function Strategy4Component({ strategyParams, handleParamChange }) {

  return (
      <div>
        <InputOption
                key={1}
                label='lookback_period'
                value={strategyParams[`lookback_period`] || ''}
                onChange={(e) => handleParamChange(`lookback_period`, e.target.value)}
                minmax="default: 20"
            />
      </div>
  );
}



export default Strategy4Component;
