import { useState, useRef } from "react";
import List from '../List';

export default function UncontrolledForm() {
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

  const [users, setUsers] = useState(newUsers)
  const nameInputRef = useRef()
  const ageInputRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    const ageInserted = ageInputRef.current.value
    const nameInserted = nameInputRef.current.value
    setUsers([...users, { id: users.slice(-1)[0].id + 1, name: nameInserted, age: ageInserted }])
    nameInputRef.current.value = ''
    ageInputRef.current.value = ''
  }

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id))
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <h4 className="form-title">Uncontrolled form</h4>
        <div class="form-floating">
          <input ref={nameInputRef} type="text" class="form-control name" placeholder="Your friend's name" />
          <label for="floatingInput">Name</label>
        </div>
        <div class="form-floating">
          <input ref={ageInputRef} type="text" class="form-control age" placeholder="age" />
          <label for="floatingInput">Age</label>
        </div>
        <button class="w-100 btn btn-lg btn-primary mt-4" type="submit">Add</button>
      </form>
      <List users={users} updateList={deleteUser} />
    </>
  )
}
