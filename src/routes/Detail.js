import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
function Detail() {
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState([]);
  // API 호출
  const { id } = useParams();
  const getItems = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    const json = await response.json();
    setDetail(json.data.movie);
    setLoading(false);
    console.log(json);
  };
  useEffect(() => {
    getItems();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <img src={detail.background_image} alt="{title}" />
          <h2>
            {detail.year} {detail.title}
          </h2>
        </div>
      )}
    </div>
  );
}
export default Detail;

