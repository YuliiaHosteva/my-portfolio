import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
import icons from '../assets/img/icons.svg'

const ProjectCard = ({ title, description, imgUrl, gitUrl, url }) => {
  return (
    <Col sm={4} md={4}>
        <div className="cyberpunk-frame">
          <img src={imgUrl} alt="project" className="proj-img" />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <p>{description}</p>
          </div>
          <div className="proj-cnt">
            <svg className="icon-project" width={18} height={18}>
            <use href={`${icons}#icon-link`}></use>
            </svg> 
            <a href={url} target="_blank" rel="noreferrer" className="proj-link">
            Live Preview
          </a>
          <svg className="icon-project" width={18} height={18}>
            <use href={`${icons}#icon-github`}></use>
            </svg> 
            <a href={gitUrl} target="_blank" rel="noreferrer" className="proj-link">
            View Code
          </a>
          </div>
        </div>
    </Col>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default ProjectCard;