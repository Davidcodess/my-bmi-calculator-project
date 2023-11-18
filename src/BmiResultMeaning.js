import react from 'react';
import './App.css'
import './image-man-eating.jpg';

const YourBmiResultMeaning = () => {
    return (
        <div className='bmi-result-meaning-container'>
            <div className='eating-man-container'>
                <img src='image-man-eating.jpg' alt=' a picture of a man eating sushi'></img>
            </div>
            <div className='bmi-result-text-container'>
                <h4> What your BMI  </h4>
                <p className='bmi-result-text'>
                A BMI range of 18.5 to 24.9 is considered a 'healthy weight.' 
                Maintaining a healthy weight may lower your chances of experiencing 
                health issues later on, such as obesity and type 2 diabetes. Aim for
                a nutritious diet with reduced fat and sugar content, incorporating 
                ample fruits and vegetables. Additionally, strive for regular physical
                activity, ideally about 30 minutes daily for five days a week.
                </p>
            </div>
        </div>
    )
};

export default YourBmiResultMeaning;