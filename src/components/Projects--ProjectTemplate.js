export const ProjectTemplate = ({ project, setShowModal, setClickedProject }) => {
    const handleClick = () => {
        setClickedProject(project.name)
        setShowModal(true)
    }
    return (
        <div style={{ backgroundColor: project.backgroundColor }} className="relative w-full overflow-hidden transition-all duration-500 ease-out rounded-sm transform-gpu group hover:scale-125 ProjectTemplate">
            <figure className="box-border relative flex justify-center w-full h-full pt-12 overflow-hidden px-14">
                <img style={{ filter: 'drop-shadow(20px 20px 0px rgba(0, 0, 0, 0.147563))' }} src={project.image} loading="lazy" alt={project.name} className="w-full h-full transition-all duration-700 group-hover:opacity-10" />
            </figure>
            <div data-hover-state className="absolute bottom-0 z-10 pb-4 pl-6 pr-8 text-white transform-gpu">
                <h3 className="text-3xl font-bold transform-gpu">{project.name}</h3>
                <p className="pt-2 pb-2 text-sm transform-gpu">{project.description}</p>
                <p className="pb-2 text-xs transform-gpu">{project.toolsUsed.join("/")}</p>
                <button onClick={handleClick} style={{ letterSpacing: "2px" }} className="relative z-20 w-32 text-xs uppercase transition-colors duration-200 ease-linear focus:outline-none focus:ring-1 focus:ring-green-500 transform-gpu bg-gdb hover:text-white hover:bg-sdc h-9">View Project</button>
            </div>
        </div>
    )
}