import react from 'react';
import './App.css'

const ResultContainer = () => {
    return (
<div className='bmi-result-container'>
    <div className='result-number-container'>
        <p className='result-text'>
            Your BMI is... 
        </p>
        <p className='result-number'> 24 </p>
    </div>

    <div className='result-detail-container'>
        <p className='result-explained-text'>
            Your BMI Suggest...
        </p>
    </div>
</div>
    );
};

export default ResultContainer;


