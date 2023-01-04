import './App.css';
import List from '../List'
import Nav from '../Nav'

export default function App() {
  return (
    <div className='app-content'>
      <Nav />
      <div className="list-wrapper">
        <List />
      </div>
    </div>
  );
}
