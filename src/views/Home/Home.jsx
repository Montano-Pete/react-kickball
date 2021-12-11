import { Link, BrowserRouter as Router } from 'react-router-dom';

function Home() {
  return (
    <div>
      <Router>
        <h1>Kickball!!!</h1>
        <Link to="/teams">Go to teams</Link>{' '}
        <Link to="/players">Go to players</Link>
      </Router>
    </div>
  );
}

export default Home;
