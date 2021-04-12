export const ProjectTemplate = ({ project, setShowModal, setClickedProject }) => {
    const handleClick = () => {
        setClickedProject(project.name)
        setShowModal(true);
        document.getElementsByTagName('body')[0].classList.add('overflow-hidden');
    }
    return (
        <div style={{ backgroundColor: project.backgroundColor }} className="ProjectTemplate">
            <figure>
                <img src={project.image} loading="lazy" alt={project.name} className="group-hover:opacity-10" />
            </figure>
            <div data-hover-state className="textContent">
                <h3>{project.name}</h3>
                <p className="description">{project.description.slice(0, 150) + '...'}</p>
                {/* <p className="tools">{project.toolsUsed.join("/")}</p> */}
                <button onClick={handleClick}>View Project</button>
            </div>
        </div>
    )
}