import axios from 'axios';
import ReactDOM from 'react-dom';
import { useState, useEffect, useCallback } from 'react';
import { MdClose } from 'react-icons/md';

export const ProjectInfo = ({ projectName, resetModal, showModal, modalRef, closeModal }) => {
    const [project, setProject] = useState({})
    const getProjectData = useCallback(async () => {
        const project = await axios.get('/projectsdetail.json').then(res => {
            const data = res.data.projects.filter(item => item.name === projectName)[0]
            return data
        })
        setProject(project)
    }, [projectName])

    const handleClick = () => {
        resetModal()
    }
    useEffect(() => {
        getProjectData()
    }, [getProjectData, showModal])

    return ReactDOM.createPortal(
        <div ref={modalRef} onClick={closeModal} className="ProjectInfo">
            <div className="h-5/6 Modal w-9/12">
                <div style={{ backgroundColor: project.backgroundColor }} className="Image">
                    <figure>
                        <img src={project.image} loading="lazy" alt={project.name} />
                    </figure>
                </div>
                <section className="Content">
                    <h2>{project.name}</h2>
                    {/* {project.moreInformation && <p className="background">{project.moreInformation.projectBackground}</p>} */}
                    {project.thumbnailContent && <p className="description">{project.thumbnailContent.description}</p>}
                    <div className="tools">
                        <span className="title">Tools Used: </span>
                        <div>
                            {project.thumbnailContent && project.thumbnailContent.toolsUsed.map(tool => <span title={tool} className="tool">{tool}</span>)}
                        </div>
                    </div>
                    <div className="buttons">
                        {project.moreInformation && project.moreInformation.githubLink && <a href={project.moreInformation.githubLink}><button>Github Link</button></a>}
                        {project.moreInformation && project.moreInformation.websiteLink && <a href={project.moreInformation.websiteLink}><button>Visit Website</button></a>}
                    </div>
                    <span onClick={handleClick} aria-label="Close Modal" className="CloseModal">
                        <MdClose />
                    </span>
                </section>
            </div>
        </div>,
        document.getElementById('portal')
    )
}