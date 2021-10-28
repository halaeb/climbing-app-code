import React from 'react';
import PropTypes from 'prop-types';
import './Users.css';

const UserInstance = (props) => {
  const { user } = props;
  return (
    <div className="user-instance-container">
      <div>
        <div className="user-data-subheading">Username</div>
        <div>{user.username}</div>
      </div>
      <div>
        <div className="user-data-subheading">Number of Climbs</div>
        <div>{user.nClimbs}</div>
      </div>
    </div>
  );
};

UserInstance.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string,
    nClimbs: PropTypes.number,
  }),
};

UserInstance.defaultProps = {
  user: {
    username: '',
    nClimbs: 0,
  },
};

export default UserInstance;
