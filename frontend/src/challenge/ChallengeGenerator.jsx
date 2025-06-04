import "react";
import { useState, useEffect } from "react";
import { MCQChallenge } from "./MCQChallenge";

export function ChallengeGenerator() {
    const [challenge, setChallenge] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [difficulty, setDifficulty] = useState("easy");
    const [quota, setQuota] = useState(null);

    const fetchQuota = async () => {}

    const generateChallenge = async () => {}

    const getNextResetTime = () => {}

    return <div className="challenge-container">
        <h1>Facts Check</h1>
        <div className="quota-display">
            <p>Facts Questions remaining: {quota?.quota_remaining || 0}</p>
            {quota?.quota_remaining === 0 && (
                <p>Next Reset: {0}</p>
                )}
        </div>

        <div className="difficulty-selector">
            <label htmlFor="difficulty">Select Difficulty:</label>
            
            <select id="difficulty"
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
                disabled={loading}  // Disable while loading
            >
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
            </select>
        </div>

        {/* Button to generate a new Facts */}
        <button 
            onClick={generateChallenge} 
            disabled={loading || quota?.quota_remaining === 0}     // If no quota left, disable button
            className="generate-button"
        >
            {loading ? "Generating..." : "Generate Facts"}
        </button>
        
        {/* Shows a multiple-choice question component only if challenge data exists. */}
        {error && <p className="error-message">{error}</p>}
        {challenge && <MCQChallenge challenge={challenge} />}

    </div>
}