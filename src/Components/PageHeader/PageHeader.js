import React from 'react'
import "../PageHeader/PageHeader.css"
function PageHeader(props) {
    return (
        <div className= "ContainerP">
            <hr/>
            <h1>{props.title}</h1>
            
        </div>
    )
}

export default PageHeader
