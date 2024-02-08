import testResult from './task-2-test.js';

const getUsersWithFriend = (users, friendName) =>
  users.filter(({ friends }) => friends.includes(friendName));

testResult(getUsersWithFriend);
