import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import css from './Card.less';

const Card = ({ name }) => {
  const [isFlipped, setFlipped] = useState(false);

  const flipCard = () => {
    setFlipped(!isFlipped);
  };

  const containerClasses = classNames({
    [css.cardContainer]: true,
    [css.flipped]: isFlipped,
  });

  return (
    <div className={containerClasses} role="presentation" onClick={flipCard} onKeyDown={flipCard}>
      <div className={css.front}>{name}</div>
      <div className={css.back}>back</div>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Card;
