const ProjectDetails = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>Hello</p>
            <h1>{props.project.name}</h1>
        </div>
    )
}

export default ProjectDetails