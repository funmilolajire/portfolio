import axios from 'axios';
import ReactDOM from 'react-dom';
import { useState, useEffect, useCallback } from 'react';
import { MdClose } from 'react-icons/md';

export const ProjectInfo = ({ projectName, setClickedProject, showModal, setShowModal, modalRef, closeModal }) => {
    const [project, setProject] = useState({})
    const getProjectData = useCallback(async () => {
        const project = await axios.get('/projectsdetail.json').then(res => {
            const data = res.data.projects.filter(item => item.name === projectName.toLowerCase())[0]
            return data
        })
        project.name = project.name.charAt(0).toUpperCase() + project.name.substring(1);
        setProject(project)
    }, [projectName])
    const handleClick = () => {
        setShowModal(false);
        setClickedProject('')
    }
    useEffect(() => {
        getProjectData()
    }, [getProjectData, showModal])

    return ReactDOM.createPortal(
        <div ref={modalRef} onClick={closeModal} className="ProjectInfo">
            <div className="w-9/12 h-5/6 Modal">
                <div style={{ backgroundColor: project.backgroundColor }} className="Image">
                    <figure>
                        <img src={project.image} alt={project.name} />
                    </figure>
                </div>
                <section className="Content">
                    <h2>{project.name}</h2>
                    {project.moreInformation && <p className="background">{project.moreInformation.projectBackground}</p>}
                    {project.thumbnailContent && <p className="description">{project.thumbnailContent.description}</p>}
                    {project.thumbnailContent && <p className="tools">Tools Used: {project.thumbnailContent.toolsUsed.join("/")}</p>}
                    <div className="buttons">
                        {project.moreInformation && <a href={project.moreInformation.githubLink}><button>Github Link</button></a>}
                        {project.moreInformation && <a href={project.moreInformation.websiteLink}><button>Visit Website</button></a>}
                    </div>
                    <span onClick={handleClick} aria-label="Close Modal" className="CloseModal">
                        <MdClose className="text-gdb hover:text-red-700" />
                    </span>
                </section>
            </div>
        </div>,
        document.getElementById('portal')
    )
}