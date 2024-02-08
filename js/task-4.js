import testResult from './task-4-test.js';

const getTotalBalanceByGender = (users, gender) =>
  users
    .filter(user => user.gender === gender)
    .reduce((totalBalance, { balance }) => totalBalance + balance, 0);

testResult(getTotalBalanceByGender);
