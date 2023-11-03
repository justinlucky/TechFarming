import React from 'react'
import './Languages.css';

const Languages = () => {

    return (

        <div id='language-selector'>
            <select className="language-selector">
                <option value="en">English</option>
                <option value="te">Telugu</option>
                <option value="hi">Hindi</option>
                <option value="ro">Rongmei</option>
                <option value="me">Maitei</option>
            </select>
        </div>
    )
}

export default Languages