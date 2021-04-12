import { ProjectTemplate } from "./Projects--ProjectTemplate";
import { ProjectInfo } from "./Projects--ProjectInfo";
import axios from "axios";
import { useState, useEffect, useLayoutEffect, useRef, useCallback } from 'react';

export const ProjectsMainIndex = () => {
    const [projects, setProjects] = useState([]);
    const [showModal, setShowModal] = useState(true);
    const [clickedProject, setClickedProject] = useState('');

    const getProjects = async () => {

        const capitalizeTitle = title => title.split("-")
            .map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(" ");

        const projects = await axios.get('/projectsdetail.json').then(({ data }) => {
            const response = data.projects
            return response.map(project => ({
                id: project.id,
                name: capitalizeTitle(project.name),
                image: project.image,
                backgroundColor: project.backgroundColor,
                description: project.thumbnailContent.description,
                projectLink: project.thumbnailContent.projectLink,
                toolsUsed: project.thumbnailContent.toolsUsed
            })
            )
        }
        ).catch(error => console.log(error))
        setProjects(projects);
    }
    useEffect(() => {
        getProjects()
    }, [])

    //resetting states on modal close
    const resetModal = () => {
        setShowModal(false);
        setClickedProject('')
        document.getElementsByTagName('body')[0].classList.remove('overflow-hidden');
        document.getElementsByTagName('body')[0].classList.add('overflow-auto');
    }

    //closing modal on escape key
    const keyClose = useCallback(({ key }) => {
        if (key === 'Escape' && showModal) {
            resetModal()
        }
    }, [showModal])

    useLayoutEffect(() => {
        document.addEventListener('keydown', keyClose);
        return () => {
            document.removeEventListener('keydown', keyClose);
        }
    }, [keyClose])

    //closing modal on background click
    const modalRef = useRef();
    const closeModal = ({ target }) => {
        if (modalRef.current === target) {
            resetModal()
        }
    };

    return (
        <div className="ProjectsIndex">
            <h2>Projects</h2>
            <div className="Projects">
                {projects && projects.map(project => <ProjectTemplate key={project.id} setClickedProject={setClickedProject} setShowModal={setShowModal} project={project} />)}
            </div>
            {showModal && clickedProject && <ProjectInfo projectName={clickedProject} resetModal={resetModal} showModal={showModal} modalRef={modalRef} closeModal={closeModal} setShowModal={setShowModal} setClickedProject={setClickedProject} />}
        </div>
    )
}