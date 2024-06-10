import React from 'react';
import ToggleOption from '../Option/InputOption';
import InputOption from "../Option/InputOption";

function Strategy1Component({strategyParams, handleParamChange}) {
    return (
        <div>
            <InputOption
                key={1}
                label='fastema'
                value={strategyParams[`fastema`] || ''}
                onChange={(e) => handleParamChange(`fastema`, e.target.value)}
                minmax="default: 12"
            />
            <InputOption
                key={1}
                label='slowema'
                value={strategyParams[`slowema`] || ''}
                onChange={(e) => handleParamChange(`slowema`, e.target.value)}
                minmax="default: 26"
            />
            <InputOption
                key={1}
                label='signal'
                value={strategyParams[`signal`] || ''}
                onChange={(e) => handleParamChange(`signal`, e.target.value)}
                minmax="default: 9"
            />
        </div>
    );
}

export default Strategy1Component;
