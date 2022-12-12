import React from 'react';
import './Statistics.css';
import PropTypes from 'prop-types';

const randomColor = () =>
  `#${Math.floor(Math.random() * 16777215).toString(16)}`;

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
              style={{ backgroundColor: randomColor() }}>
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
    }).isRequired
  ).isRequired,
};

export default Statistics;