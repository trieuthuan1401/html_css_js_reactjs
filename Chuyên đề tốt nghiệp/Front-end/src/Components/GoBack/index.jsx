import React from 'react'
import './style.css'
function handleReloadPage(event) {
    event.preventDefault();
    window.location.replace('http://localhost:3000');
}
export default function GoBack() {
    return (
        <div className="go-back" onClick={(event) => { handleReloadPage(event) }}>
            <i className="fa fa-arrow-left"></i>
        </div>
    )

}
