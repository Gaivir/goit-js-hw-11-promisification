
const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];

const toggleUserState = (allUsers, userName) => {

    return new Promise ((resolve) => {
      const stateUsers = allUsers.map(user =>
   user.name === userName ?  {...user, active: !user.active } : user);
        resolve(stateUsers);
    })

    

};

const logger = stateUsers => console.table(stateUsers);


toggleUserState(users, 'Mango').then(logger);
toggleUserState(users, 'Lux').then(logger);
