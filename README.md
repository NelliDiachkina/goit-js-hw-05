# goit-js-hw-05

## Задача 1. Імена користувачів `task-1.js`

🟨 Напиши стрілочну функцію **`getUserNames(users)`**, яка прийматиме один параметр `users` — масив
об'єктів користувачів. Функція має повертати масив імен усіх користувачів (властивість `name`) із
масиву `users`.

Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У
консоль будуть виведені результати її викликів.

```javascript
console.log(
  getUserNames([
    {
      name: 'Moore Hensley',
      email: 'moorehensley@indexia.com',
      balance: 2811,
    },
    {
      name: 'Sharlene Bush',
      email: 'sharlenebush@tubesys.com',
      balance: 3821,
    },
    {
      name: 'Ross Vazquez',
      email: 'rossvazquez@xinware.com',
      balance: 3793,
    },
    {
      name: 'Elma Head',
      email: 'elmahead@omatom.com',
      balance: 2278,
    },
    {
      name: 'Carey Barr',
      email: 'careybarr@nurali.com',
      balance: 3951,
    },
    {
      name: 'Blackburn Dotson',
      email: 'blackburndotson@furnigeer.com',
      balance: 1498,
    },
    {
      name: 'Sheree Anthony',
      email: 'shereeanthony@kog.com',
      balance: 2764,
    },
  ])
); // ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]
```

## Задача 2. Користувачі з другом `task-2.js`

🟨 Напиши стрілочну функцію **`getUsersWithFriend(users, friendName)`** , яка прийматиме два
параметра:

- перший параметр `users` — масив об'єктів користувачів
- другий параметр `friendName` — ім'я друга для пошуку.

Функція має повертати масив усіх користувачів із масиву `users`, у яких є друг з іменем
`friendName`. Друзі кожного користувача зберігаються у властивості `friends`. Якщо користувачів, у
яких є такий друг немає, то функція має повернути порожній масив. Поради:

- Метод `filter()` можна використовувати для створення нового масиву з елементами, які задовольняють
  певну умову.
- Використовуй метод `includes()` для перевірки, чи масив `friends` містить `friendName`.

```javascript
const allUsers = [
  {
    name: 'Moore Hensley',
    friends: ['Sharron Pace'],
  },
  {
    name: 'Sharlene Bush',
    friends: ['Briana Decker', 'Sharron Pace'],
  },
  {
    name: 'Ross Vazquez',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
  },
  {
    name: 'Elma Head',
    friends: ['Goldie Gentry', 'Aisha Tran'],
  },
  {
    name: 'Carey Barr',
    friends: ['Jordan Sampson', 'Eddie Strong'],
  },
  {
    name: 'Blackburn Dotson',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
  },
  {
    name: 'Sheree Anthony',
    friends: ['Goldie Gentry', 'Briana Decker'],
  },
];

console.log(getUsersWithFriend(allUsers, 'Briana Decker'));
// [
//   {
//     name: "Sharlene Bush",
//     friends: ["Briana Decker", "Sharron Pace"]
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"]
//   }
// ]

console.log(getUsersWithFriend(allUsers, 'Goldie Gentry'));
// [
//   {
//     name: "Elma Head",
//     friends: ["Goldie Gentry", "Aisha Tran"]
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"]
//   }
// ]

console.log(getUsersWithFriend(allUsers, 'Adrian Cross')); // []
```

## Задача 3. Сортування за кількістю друзів `task-3.js`

🟨 Напиши стрілочну функцію **`sortByDescendingFriendCount(users)`**, яка прийматиме один параметр
`users` — масив об'єктів користувачів.

Функція має повертати масив усіх користувачів, відсортованих за спаданням кількостій їх друзів
(властивість `friends`).

```javascript
console.log(
  sortByDescendingFriendCount([
    {
      name: 'Moore Hensley',
      friends: ['Sharron Pace'],
      gender: 'male',
    },
    {
      name: 'Sharlene Bush',
      friends: ['Briana Decker', 'Sharron Pace'],
      gender: 'female',
    },
    {
      name: 'Ross Vazquez',
      friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
      gender: 'male',
    },
    {
      name: 'Elma Head',
      friends: ['Goldie Gentry', 'Aisha Tran'],
      gender: 'female',
    },
    {
      name: 'Carey Barr',
      friends: ['Jordan Sampson', 'Eddie Strong'],
      gender: 'male',
    },
    {
      name: 'Blackburn Dotson',
      friends: ['Jacklyn Lucas', 'Linda Chapman'],
      gender: 'male',
    },
    {
      name: 'Sheree Anthony',
      friends: ['Goldie Gentry', 'Briana Decker'],
      gender: 'female',
    },
  ])
);
// [
//   {
//     name: "Ross Vazquez",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     friends: ["Briana Decker", "Sharron Pace"],
//     gender: "female"
//   },
//   {
//     name: "Elma Head",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     gender: "female"
//   },
//   {
//     name: "Moore Hensley",
//     friends: ["Sharron Pace"],
//     gender: "male"
//   }
// ]
```

## Задача 4. Загальний баланс `task-4.js`

🟨 Напиши стрілочну функцію **`getTotalBalanceByGender(users, gender)`**, яка прийматиме два
параметра:

- перший параметр `users` — масив об'єктів користувачів,
- другий параметр `gender` — рядок, що зберігає стать.

Функція має використовувати ланцюжок виклику методів та повертати загальний баланс користувачів
(властивість `balance`), стать яких (властивість `gender`) збігається зі значенням параметра
`gender`.

```javascript
const clients = [
  {
    name: 'Moore Hensley',
    gender: 'male',
    balance: 2811,
  },
  {
    name: 'Sharlene Bush',
    gender: 'female',
    balance: 3821,
  },
  {
    name: 'Ross Vazquez',
    gender: 'male',
    balance: 3793,
  },
  {
    name: 'Elma Head',
    gender: 'female',
    balance: 2278,
  },
  {
    name: 'Carey Barr',
    gender: 'male',
    balance: 3951,
  },
  {
    name: 'Blackburn Dotson',
    gender: 'male',
    balance: 1498,
  },
  {
    name: 'Sheree Anthony',
    gender: 'female',
    balance: 2764,
  },
];

console.log(getTotalBalanceByGender(clients, 'male')); // 12053

console.log(getTotalBalanceByGender(clients, 'female')); // 8863
```
