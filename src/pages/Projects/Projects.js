import React, { useState, useEffect } from 'react'

import Project from './Project/Project'
import styles from './Projects.module.css'
import { data } from './data'

function Projects() {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        setProjects(data.map(project => (
            <Project key={project.id} project={project} />
        )))
    }, [])

    return (
        <div className={styles.container}>
            {projects}
        </div>
    )
}

export default Projects
