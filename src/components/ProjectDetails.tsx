import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./styles.module.scss";

type Project = {
  id: number;
  title: string;
  status: string;
  startDate: string;
  endDate: string;
  area: string;
  address: string;
};

type ProjectDetailsProps = {
  project: Project;
};

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project }) => {
  return (
    <div className={styles.containerdetalhes}>
      <div className={styles.contentdetalhes}>
        <p>{project.title}</p>
        <h1>Ana Souza</h1>
        <div className={styles.contvendedor}>
          <FontAwesomeIcon icon={faUser} className={styles.iconuser} />
          <p>Caio - Vendedor</p>
        </div>
        <ul>
          <li>
            <strong>Status:</strong> {project.status}
          </li>
          <li>
            <strong>Início:</strong> {project.startDate} /{" "}
            <strong>Conluído:</strong> {project.endDate}
          </li>
          <li>
            <strong>Área construída:</strong> {project.area}
          </li>
          <li>
            <strong>Endereço:</strong> {project.address}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProjectDetails;
