<html>
<head>
  <title>Users</title>
</head>
<body>
  <h1>All Users</h1>
  <ul>
    <% users.forEach(user => { %>
      <li>
        <%= user.name %> (<%= user.email %>) - <%= user.age %>
        <form action="/users/delete/<%= user._id %>" method="POST">
          <button type="submit">Delete</button>
        </form>
      </li>
    <% }) %>
  </ul>

  <h2>Add User</h2>
  <form action="/users" method="POST">
    <input type="text" name="name" placeholder="Name" required />
    <input type="email" name="email" placeholder="Email" required />
    <input type="number" name="age" placeholder="Age" required />
    <button type="submit">Add User</button>
  </form>
</body>
</html>
