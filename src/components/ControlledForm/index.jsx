import { useState } from "react";
import './controlledForm.css';
import List from '../List';

export default function ControlledForm() {
  const newUsers = [
    {
      id: 1,
      name: 'Fernanda',
      age: 34
    },
    {
      id: 2,
      name: 'josé',
      age: 24
    }
  ]

  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [users, setUsers] = useState(newUsers)

  const handleSubmit = (e) => {
    e.preventDefault()
    setUsers([...users, {id: users.slice(-1)[0].id + 1, name: name, age: age}])
    setName('')
    setAge('')
  }

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id))
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <h4 className="form-title">Controlled form</h4>
        <div class="form-floating">
          <input type="text" class="form-control name" value={name} onChange={(e) => setName((e.target.value))} placeholder="Your friend's name" />
          <label for="floatingInput">Name</label>
        </div>
        <div class="form-floating">
          <input type="text" class="form-control age" value={age} onChange={(e) => setAge((e.target.value))} placeholder="age" />
          <label for="floatingInput">Age</label>
        </div>
        <button class="w-100 btn btn-lg btn-primary mt-4" type="submit">Add</button>
      </form>
      <List users={users} updateList={deleteUser}/>
    </>
  )
}
