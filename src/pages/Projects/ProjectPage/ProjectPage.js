import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { data } from '../data'

function ProjectPage() {
    const { projectId } = useParams()
    const [project, setProject] = useState({})

    useEffect(() => {
        setProject(data[projectId - 1])
    }, [])

    const { img, name, description } = project

    return (
        <div>
            <img src={img} alt={name} />
            <div>
                <h1>{name}</h1>
                <h4>{description}</h4>
            </div>
        </div>
    )
}

export default ProjectPage
