import { useEffect, useState, useRef } from "react";

import './highlight.sass'

export default function Highlight({ projectInfo, handleModal }) {
    const [project, setProject] = useState(null)
    const [animated, setAnimated] = useState(true)

    const containerRef = useRef(null)

    useEffect(() => {
        if (projectInfo) {
            setProject(projectInfo)
        }
    }, [projectInfo]);

    useEffect(() => {
        setAnimated(true)

        setTimeout(() => {
            setAnimated(false)
        }, 500)

    }, [project])

    return (
        <>
            {project && <div className={animated ? 'container-highlight animated' : 'container-highlight'} ref={containerRef}>
                <img src={project.image} alt='project' />

                <div className='text-content'>
                    <h3 className='text-content-title'>Tecnologias usadas</h3>

                    <div className='text-content-techs'>
                        {project.techs.map((Tech, i) => {
                            return <Tech className='icon static' key={i} />
                        })}
                    </div>

                    <button className='btn links' onClick={() => { handleModal() }}>Links</button>
                </div>
            </div>}

        </>
    )
}