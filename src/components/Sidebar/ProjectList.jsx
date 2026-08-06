import { projectData } from "../../data/projectData";
import "./ProjectList.css";

function ProjectList() {
    return (
        <div>
            <div className="project-header">
                <h3>Dự án</h3>
                <button className="add-project-btn">
                    +
                </button>
            </div>


            {projectData.map((project) => (
                <div className="project-item" key={project.id}>
                    <span
                        className="dot"
                        style={{
                            backgroundColor: project.color,
                        }}
                    ></span>

                    {project.name}
                </div>
            ))}
        </div>
    );
}

export default ProjectList;