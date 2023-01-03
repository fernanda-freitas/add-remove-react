import { useState } from "react";
import './list.css'

export default function List() {
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

  return(
    <div className="form m-auto">
      <form onSubmit={handleSubmit}>
        <h4 class="mb-3 fw-normal">Add a friend to the list</h4>

        <div class="form-floating">
          <input type="text" class="form-control name" value={name} onChange={(e) => setName((e.target.value))} placeholder="Your friend's name"/>
          <label for="floatingInput">Name</label>
        </div>

        <div class="form-floating">
          <input type="text" class="form-control age" value={age} onChange={(e) => setAge((e.target.value))} placeholder="age"/>
          <label for="floatingInput">Age</label>
        </div>

        <button class="w-100 btn btn-lg btn-primary mt-4" type="submit">Enviar</button>
      </form>

      <ul>
        {users.map((user) => {
          return (
            <div className="d-flex my-3">
              <li>{user.id} - {user.name}: {user.age}</li>
              <button
                type="button"
                className="btn btn-secondary ms-3"
                onClick={() => deleteUser(user.id)}>-</button>
            </div>
          )
        })}
      </ul>
    </div>
  )
}
