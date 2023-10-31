import React from "react";
import { Link } from "react-router-dom";

function Students() {
    return (
        <div>
            <h2>Studerende</h2>
                        <ul>
                <li>
                    <Link to="/students/1">Student 1</Link>
                </li>
                <li>
                    <Link to="/students/2">Student 2</Link>
                </li>
            </ul>
        </div>
    );
}

export default Students;
