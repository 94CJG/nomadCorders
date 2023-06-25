import { useEffect, useState } from 'react';
import Items from './components/Items';

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const response = await fetch(
      'https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year'
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  console.log(movies);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((items) => (
            <Items
						// 함수 Items라는 것을 호출함.
						//이 값들을 ./component/Items안에 함수 쪽에다가 현재 넘겨줌 
						// 
              key={items.id}
              coverImg={items.medium_cover_image}
              title={items.title}
              summary={items.summary}
              genres={items.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
/**
 * coverImg는 우리의 prop이므로 원하는대로 이름을 지을 수 있다.
 * 30번째줄 => props으로써 우리의 component로 넘겨서,
 * 현재 Itme.js 파일에 넘겨서 사용 해 줄수 있게 만들어주고 있다. 
 * key는 React.js 에서만, map 안에서 component들을 render할
 * 때 사용하는 것! 매우 중요하다.
 */
