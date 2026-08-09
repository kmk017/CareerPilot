import { useEffect, useState } from "react";
import "./ResumeHistory.css";

function ResumeHistory() {

    const [resumes, setResumes] = useState([]);

    async function loadResumes() {

        try {
    
            const response = await fetch(
    
                "http://127.0.0.1:5000/api/resumes"
    
            );
    
            const data = await response.json();
    
            setResumes(data);
    
        }
    
        catch (error) {
    
            console.error(error);
    
        }
    
    }

    useEffect(() => {

        loadResumes();
    
    }, []);

    return (

        <div className="resume-history">
    
            <h1>Resume History</h1>
    
            <table>
    
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
    
    );

}

export default ResumeHistory;