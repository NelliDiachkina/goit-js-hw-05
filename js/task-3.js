import { usersData, testResult } from './task-3-test.js';

const sortByDescendingFriendCount = users =>
  users.toSorted((a, b) => b.friends.length - a.friends.length);

testResult(usersData, sortByDescendingFriendCount);
