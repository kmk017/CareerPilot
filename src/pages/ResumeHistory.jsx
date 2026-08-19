import { useEffect, useState } from "react";
import "./ResumeHistory.css";
import { API_BASE } from "../config";

function ResumeHistory() {

    const [resumes, setResumes] = useState([]);

    async function loadResumes() {

        try {
    
            const token = localStorage.getItem("token");
    
            const response = await fetch(
                `${API_BASE}/api/resumes`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
    
            if (!response.ok) {
                throw new Error("Failed to load resume history");
            }
    
            const data = await response.json();
    
            setResumes(data);
    
        } catch (error) {
    
            console.error("Resume history error:", error);
    
        }
    
    }

    useEffect(() => {

        loadResumes();
    
    }, []);

    return (

        <div className="resume-history-page">
            <h1>Resume History</h1>

            <div className="history-card">
    
            <table className="history-table">
    
                <thead>
    
                    <tr>

                        <th>Name</th>
                    
                        <th>Email</th>
                    
                        <th>Score</th>
                    
                        <th>Level</th>
                    
                        <th>Date</th>
                    
                    </tr>
    
                </thead>
    
                <tbody>
                
                    {resumes.length === 0 ? (
                
                        <tr>
                
                            <td colSpan="5">
                
                                No resume history found.
                
                            </td>
                
                        </tr>
                
                    ) : (
                
                        resumes.map((resume) => (
                
                            <tr key={resume.id}>
                
                                <td>{resume.name}</td>
                
                                <td>{resume.email}</td>
                
                                <td>{resume.score}%</td>
                
                                <td>{resume.level}</td>
                
                                <td>
                
                                    {new Date(
                                        resume.created_at
                                    ).toLocaleDateString()}
                
                                </td>
                
                            </tr>
                
                        ))
                
                    )}
                
                </tbody>
    
            </table>

            </div>
    
        </div>
    
    );

}

export default ResumeHistory;