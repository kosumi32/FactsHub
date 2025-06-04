import "react";
import { useState, useEffect } from "react";
import { MCQChallenge } from "../challenge/MCQChallenge";


export function HistoryPanel() {
    const [history, setHistory] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // run as soon as component renders
    useEffect (() => {
        fetchHistory();
    }, []);

    const fetchHistory = async () => {
        setLoading(false);
    }

    if (loading) {
        return <div className="loading">Loading the history ...</div>
    }

    if (error) {
        return <div className="error-message">
            <p>{error}</p>
            <button onClick={fetchHistory}>Retry</button>
        </div>
    }

    return <div className="history-panel">
        <h1>History</h1>
        {history.length === 0 ? <p>No history available.</p> : 
        <div className="history-list">
            {/* For every variable challenge, loop history.map */}
            {history.map((challenge) => {
                return <MCQChallenge challenge={challenge} key={challenge.id} showExplanation/>
            })}

            {/* key: used when rendering a list of components (like with .map) to help React know: 
                “Which items changed, added, or removed?”
            */}
            </div>
    }

    
    </div>
}