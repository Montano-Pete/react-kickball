import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Kickball!!!</h1>
      <Link to="/teams">Go to teams</Link>{' '}
      <Link to="/players">Go to players</Link>
    </div>
  );
}

export default Home;
