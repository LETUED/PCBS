import React from 'react';
import InputOption from '../Option/InputOption';

function Strategy3Component({strategyParams, handleParamChange}) {
    return (
        <div>
            <InputOption
                key={1}
                label='period'
                value={strategyParams[`period`] || ''}
                onChange={(e) => handleParamChange(`period`, e.target.value)}
                minmax="default: 20"
            />
            <InputOption
                key={1}
                label='devfactor'
                value={strategyParams[`devfactor`] || ''}
                onChange={(e) => handleParamChange(`devfactor`, e.target.value)}
                minmax="default: 2"
            />
        </div>
    );
}

export default Strategy3Component;
