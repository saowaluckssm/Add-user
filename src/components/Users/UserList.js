import React from 'react';
import Card from "../UI/Card";

import classes from "./UserList.module.css";

const UserList = (props) => {
  console.log(props.users);
  return (
    <Card className={classes.users}>
    <ul>
      {props.users.map(user => (
        <li key={user.id}>
          {user.name} (email: {user.email})
        </li>
      ))}
    </ul>
    </Card>
  );
};

export default UserList;
