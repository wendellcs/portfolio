import { useEffect, useState, useRef } from "react";

import { projectsData } from './data'

import './highlight.sass'

export default function Highlight({ sharedState }) {
    const [projectInfo, setProjectInfo] = useState(null)
    const [animated, setAnimated] = useState(true)

    const containerRef = useRef(null)

    useEffect(() => {
        if (sharedState && projectsData[sharedState.id]) {
            setProjectInfo(projectsData[sharedState.id])
        }
    }, [sharedState]);

    useEffect(() => {
        setAnimated(true)

        setTimeout(() => {
            setAnimated(false)
        }, 500)

    }, [projectInfo])

    return (
        <>
            {projectInfo && <div className={animated ? 'container-highlight animated' : 'container-highlight'} ref={containerRef}>
                <img src={projectInfo.image} alt='project' />

                <div className='text-content'>
                    <h3 className='text-content-title'>Tecnologias usadas</h3>

                    <div className='text-content-techs'>
                        {projectInfo.techs.map((Tech, i) => {
                            return <Tech className='icon static' key={i} />
                        })}
                    </div>

                    <button className='btn more-details'>Mais detalhes</button>
                </div>
            </div>}

        </>
    )
}