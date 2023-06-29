import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

function Items({ id, coverImg, title, summary, genres }) {
  return (
    <div>
      <img src={coverImg} alt="{title}" />
      <h2>
        <Link to={`/items/${id}`}>{title}</Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

Items.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Items;

/**
 * 현재 props는 객체이다. 부모 컴포넌트에서
 * 매개변수를 받아와 사용 하고, 부모 컴포넌트에서 다시 Items라는 컴포넌트를 사용한다. Home.js 참고!
 */