import "react";
import { useState } from "react";


export function MCQChallenge({ challenge, showExpalanation = false }) {
    const [selectedOption, setSelectedOption] = useState(null);
    const [shouldShowExplanation, setShouldShowExplanation] = useState(showExpalanation);

    // Wants options in Json format
    const option = typeof challenge.options === "string" ? JSON.parse(challenge.options) : challenge.options;

    const handleOptionSelect = (index) => {
        if (selectedOption !== null) return; // Prevent re-selection
        setSelectedOption(index);
        setShouldShowExplanation(true);
    }

    // Change color if correct or incorrect
    // First check: If no option is selected yet, show default styling
    // Second check: Always highlight the correct answer (regardless of what user picked)
    // Third check: Show the user's wrong choice as incorrect
    const getOptionClass = (index) => {
        if (selectedOption === null) return "option";

        if (index === challenge.correct_answer_id) {
            return "option correct";
        } 

        if (selectedOption === index && index !== challenge.correct_answer_id) {
            return "option incorrect";
        }
        
        return "option";
    }

    return <div className="challenge-display">
        <p><strong>Difficulty</strong>: {challenge.difficulty}</p>
        <p className= "challenge-title">{challenge.title}</p>
        <div className="options">
            {option.map((option, index) => (
                <div 
                    key={index} 
                    className={getOptionClass(index)} 
                    onClick={() => handleOptionSelect(index)}
                >
                    {option}
                </div>
            ))}
        </div>

        {shouldShowExplanation && selectedOption !== null && (
            <div className="explaination">
                <h4>Explanation</h4>
                <p>{challenge.explanation}</p>
            </div>
        )}
    </div>
}