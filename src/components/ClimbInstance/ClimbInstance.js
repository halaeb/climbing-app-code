import React from 'react';
import PropTypes from 'prop-types';
import '../Climb/Climb.css';
import userLogo from './user-logo.svg';
import shoeLogo from './shoe-logo.svg';
import likeIcon from './like-icon.svg';
import starIcon from './star-icon.svg';

const ClimbInstance = (props) => {
  const { handleLikeClick, handleDeleteClick, climb } = props;

  return (
    <div className="climb-container">
      <div className="climb-data-container">
        <img src={userLogo} className="user-logo" alt="user logo" />
        <div>
          <div className="climb-data-heading">
            {climb.username}
          </div>
          <div className="climb-data-container">
            <div className="climb-data-subheading">
              {climb.date}
              {' '}
              |
            </div>
            <div className="climb-data-subheading">
              {climb.gym}
            </div>
          </div>
        </div>
      </div>
      <div className="climb-data-container-2">
        <img src={shoeLogo} className="user-logo" alt="climbing shoe" />
        <div className="climb-stats-container">
          <div className="climb-data-subheading">Climb Type</div>
          <div>{climb.climbType}</div>
        </div>
        <div className="climb-stats-container">
          <div className="climb-data-subheading">Grade</div>
          <div>{climb.grade}</div>
        </div>
        <div className="climb-stats-container">
          <div className="climb-data-subheading">Rating</div>
          <div>
            {climb.rating}
            <img src={starIcon} className="icon" alt="star" />
          </div>
        </div>
      </div>

      <div className="button-container">
        <h3>
          {climb.likes}
          {' '}
          Likes
        </h3>
        <button type="button" className="button" onClick={handleLikeClick}>
          <img src={likeIcon} className="icon" alt="like" />
        </button>
        <button type="button" className="button" onClick={handleDeleteClick}>Delete</button>
      </div>
    </div>
  );
};

ClimbInstance.propTypes = {
  handleLikeClick: PropTypes.func,
  handleDeleteClick: PropTypes.func,
  climb: PropTypes.shape({
    username: PropTypes.string,
    date: PropTypes.string,
    gym: PropTypes.string,
    climbType: PropTypes.string,
    grade: PropTypes.string,
    rating: PropTypes.string,
    likes: PropTypes.number,
  }),
};

ClimbInstance.defaultProps = {
  handleLikeClick: () => {},
  handleDeleteClick: () => {},
  climb: {
    username: '',
    date: '',
    gym: '',
    climbType: '',
    grade: '',
    rating: '',
    likes: 0,
  },
};

export default ClimbInstance;
