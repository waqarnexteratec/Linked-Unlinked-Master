// find all the users that have not been linked
const { allUsers, linked } = require("./users");

const getUsersThatAreNotLinked = () => {
  //filtering through all the users
  return allUsers.filter((user) => {
    // finding in the linked users with id,
    const link = linked.find((l) => {
      return l.id === user.id;
    });

    //return false if users is available in linedk array else return false
    return !link;
  });
};

const unlinkedUser = getUsersThatAreNotLinked();

console.log("users that have not been linked", unlinkedUser);
