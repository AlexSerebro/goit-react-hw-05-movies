import PropTypes from 'prop-types';

export function Review({ reviews }) {
  const { author, content } = reviews;

  return (
    <div>
      <h3>Author: {author}</h3>
      <p>{ content}</p>
    </div>
  )
}