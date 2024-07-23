import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';

const ProjectCard = ({ title, description, imgUrl, url }) => {
  return (
    <Col sm={4} md={4}>
      <a href={url} target="_blank" rel="noreferrer" className="proj-link">
        <div className="proj-imgbx">
          <img src={imgUrl} alt="project" className="proj-img" />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <p>{description}</p>
          </div>
        </div>
      </a>
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