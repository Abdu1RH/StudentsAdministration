import React from "react";
import { Link } from "react-router-dom";

function Courses() {
    return (
        <div>
            <h2>Courses</h2>
            <ul>
                <li>
                    <Link to="/courses/1">Course 1</Link>
                </li>
                <li>
                    <Link to="/courses/2">Course 2</Link>
                </li>
                {/* ... */}
            </ul>
        </div>
    );
}

export default Courses;
