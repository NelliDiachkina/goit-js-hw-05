import { data, testResult } from './task-1-test.js';

const getUserNames = users => users.map(user => user.name);

testResult(data, getUserNames);
