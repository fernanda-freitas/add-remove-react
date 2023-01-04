import { Route } from 'react-router-dom'
import './App.css';
import ControlledForm from '../ControlledForm'
import Nav from '../Nav'

export default function App() {
  return (
    <div className='app-content'>
      <Nav />
      <div className="list-wrapper">
        <ControlledForm />
      </div>
    </div>
  );
}
