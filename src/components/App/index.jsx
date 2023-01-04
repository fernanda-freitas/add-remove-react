import { Route } from 'react-router-dom'
import './App.css';
import ControlledForm from '../ControlledForm'
import UncontrolledForm from '../UncontrolledForm'
import Nav from '../Nav'

export default function App() {
  return (
    <div className='app-content'>
      <Nav />
      {/* <ControlledForm /> */}
      <UncontrolledForm />
    </div>
  );
}
