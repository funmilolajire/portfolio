import axios from 'axios';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { MdClose } from 'react-icons/md';

export const ProjectInfo = ({ projectName, setClickedProject, showModal, setShowModal, modalRef, closeModal }) => {
    const [project, setProject] = useState({})
    const getProjectData = async () => {
        const project = await axios.get('/projectsdetail.json').then(res => {
            const data = res.data.projects.filter(item => item.name === projectName.toLowerCase())[0]
            return data
        })
        project.name = project.name.charAt(0).toUpperCase() + project.name.substring(1);
        setProject(project)
    }
    const handleClick = () => {
        setShowModal(false);
        setClickedProject('')
    }
    useEffect(() => {
        getProjectData()
    }, [projectName, showModal])

    //animation
    const animation = useSpring({
        config: {
            duration: 250
        },
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(0%)` : `translateY(-100%)`
    })

    return ReactDOM.createPortal(
        <div ref={modalRef} onClick={closeModal} className="fixed top-0 z-40 flex items-center justify-center w-screen h-screen bg-gdb bg-opacity-70 ProjectInfo">
            {/* <animated.div style={animation}> */}
            <div className="relative flex w-9/12 h-9/12 bg-gray-50 Modal">
                <div style={{ backgroundColor: project.backgroundColor }} className="w-1/2 max-h-full Image">
                    <figure className="max-h-full p-2 pb-0">
                        <img src={project.image} className="w-full" alt={project.name} />
                    </figure>
                </div>
                <section className="w-1/2 p-8 Content">
                    <h2 className="pb-5 text-5xl font-bold text-transparent bg-gradient-to-bl bg-clip-text from-name1 to-gdb">{project.name}</h2>
                    {project.moreInformation && <p className="pb-4 text-base">{project.moreInformation.projectBackground}</p>}
                    {project.thumbnailContent && <p className="pb-5 text-base">{project.thumbnailContent.description}</p>}
                    {project.thumbnailContent && <p className="pb-10">Tools Used: {project.thumbnailContent.toolsUsed.join("/")}</p>}
                    <div className="flex space-x-6 buttons">
                        {project.moreInformation && <a href={project.moreInformation.githubLink}><button style={{ letterSpacing: "2px" }} className="h-12 uppercase transition-colors duration-200 border focus:outline-none focus:ring-1 focus:ring-green-500 hover:bg-gdb hover:text-white border-gdb w-44">Github Link</button></a>}
                        {project.moreInformation && <a href={project.moreInformation.websiteLink}><button style={{ letterSpacing: "2px" }} className="h-12 uppercase transition-colors duration-200 border focus:outline-none focus:ring-1 focus:ring-green-500 hover:bg-gdb hover:text-white border-gdb w-44">Visit Website</button></a>}
                    </div>
                    <span onClick={handleClick} aria-label="Close Modal" className="absolute top-0 right-0 m-1 text-4xl cursor-pointer"><MdClose /></span>
                </section>
            </div>
            {/* </animated.div> */}
        </div>,
        document.getElementById('portal')
    )
}