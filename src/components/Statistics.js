import React from 'react';
import './Statistics.css';
import PropTypes from 'prop-types';

function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  if (color === '#FFFFFF') {
    return getRandomColor();
  } else {
    return color;
  }
}

const Statistics = ({ title, data }) => {
  return (
    <section className="statistics">
      {title ? <h2 className="title">{title}</h2> : null}
      <ul className="stat-list">
        {data.map((item) => {
          
          return (
            <li
              key={item.id}
              className="item"
              style={{ backgroundColor: getRandomColor() }}
            >
              <span className="label">{item.label}</span>
              <span className="percentage">{item.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;