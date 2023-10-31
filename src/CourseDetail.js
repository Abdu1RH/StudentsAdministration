import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function CourseDetail() {
    const { id } = useParams();
    const [course, setCourse] = useState(null);

    useEffect(() => {
        fetch(`?/courses/${id}`)
            .then(response => response.json())
            .then(data => setCourse(data))
            .catch(error => console.error("Error getting data ", error));
    }, [id]);

    if (!course) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>{course.courseName}</h2>
        </div>
    );
}

export default CourseDetail;
