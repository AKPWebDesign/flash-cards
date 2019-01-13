import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import style from './Card.less';

const Card = ({ name }) => {
  const [flipped, setFlipped] = useState(false);

  const containerClasses = classNames({
    [style.cardContainer]: true,
    [style.flipped]: flipped,
  });

  return (
    <div className={containerClasses} onClick={(e) => setFlipped(!flipped) && e.preventDefault()}>
      <div className={style.front}>{name}</div>
      <div className={style.back}>back</div>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Card;
