import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function StudentDetail() {
    const { name } = useParams();
    const [student, setStudent] = useState(null);

    useEffect(() => {
        fetch(`?/students/${name}`)
            .then(response => response.json())
            .then(data => setStudent(data))
            .catch(error => console.error("Error getting data", error));
    }, [name]);

    if (!student) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>{student.name}</h2>
        </div>
    );
}

export default StudentDetail;
