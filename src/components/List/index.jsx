import './list.css'

export default function List({users, updateList}) {

  const deleteUser = (id) => {
    updateList(id)
  }

  return(
    <div className="form m-auto">
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
