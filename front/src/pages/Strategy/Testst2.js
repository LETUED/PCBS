import React from 'react';
import InputOption from "../Option/InputOption";

function Strategy2Component({strategyParams, handleParamChange}) {
    return (
        <div>
            <InputOption
                key={1}
                label='rsi_period'
                value={strategyParams[`rsi_period`] || ''}
                onChange={(e) => handleParamChange(`rsi_period`, e.target.value)}
                minmax="default: 14"
            />
            <InputOption
                key={1}
                label='rsi_upper'
                value={strategyParams[`rsi_upper`] || ''}
                onChange={(e) => handleParamChange(`rsi_upper`, e.target.value)}
                minmax="default: 70"
            />
            <InputOption
                key={1}
                label='rsi_lower'
                value={strategyParams[`rsi_lower`] || ''}
                onChange={(e) => handleParamChange(`rsi_lower`, e.target.value)}
                minmax="default: 30"
            />
        </div>
    );
}

export default Strategy2Component;
