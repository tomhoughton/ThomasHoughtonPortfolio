const ProjectDetails = (props) => {
    
    // Try Catch to make sure it doesn't crash on load.
    let tryProjectName = () => {
        try {
            console.log('Try');
            return props.project.name
        } catch (error) {
            return 'Loading'
        }
    }

    var name = tryProjectName();

    return (
        <div>
            <h1>{props.title}</h1>
            <h1>{name}</h1>
        </div>
    )
}

export default ProjectDetails



