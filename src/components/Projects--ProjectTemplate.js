export const ProjectTemplate = ({ project, setShowModal, setClickedProject }) => {
    const handleClick = () => {
        setClickedProject(project.name)
        setShowModal(true)
    }
    return (
        <div style={{ backgroundColor: project.backgroundColor }} className="ProjectTemplate">
            <figure>
                <img src={project.image} loading="lazy" alt={project.name} className="group-hover:opacity-10" />
            </figure>
            <div data-hover-state className="textContent">
                <h3>{project.name}</h3>
                <p className="description">{project.description}</p>
                <p className="tools">{project.toolsUsed.join("/")}</p>
                <button onClick={handleClick}>View Project</button>
            </div>
        </div>
    )
}