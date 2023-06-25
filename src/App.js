import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './routes/Home';
import Detail from './routes/Detail';
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movie">
          <Detail />
        </Route>
        <Route path="/">
          {/*누군가 나의 웹사이트 "/"url에 있다면 Home 컴포넌트를 보여줄 것이다.*/}
          <Home />
        </Route>
      </Switch>
    </Router>
  );
  //Router -> 누군가 만들어 놓은 컴포넌트를 그냥 사용하면 된다.
}
export default App;


