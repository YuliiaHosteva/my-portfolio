import PropTypes from 'prop-types';
import icons from '../assets/img/icons.svg';

const ProjectCard = ({ title, description, imgUrl, gitUrl, url }) => {
  return (
    <article className="cp-card">
      <div className="cp-card__frame">
        <img src={imgUrl} alt={title} className="cp-card__img" loading="lazy" />
        <div className="cp-card__body">
          <h3 className="cp-card__title">{title}</h3>
          <p className="cp-card__desc">{description}</p>
          <div className="cp-card__actions">
            <a className="cp-btn" href={url} target="_blank" rel="noreferrer">
              <svg className="cp-ico" width="18" height="18">
                <use href={`${icons}#icon-link`} />
              </svg>
              Live
            </a>
            <a className="cp-btn ghost" href={gitUrl} target="_blank" rel="noreferrer">
              <svg className="cp-ico" width="18" height="18">
                <use href={`${icons}#icon-github`} />
              </svg>
              Code
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  gitUrl: PropTypes.string.isRequired,
};

export default ProjectCard;
