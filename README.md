# graphql-study

Study [this article](https://dev.to/rxassim/setup-postgresql-with-typeorm-in-graphql-tutorial-1cn8)

- graphql-yoga
- typeorm
- mysql

## Installation

```sh
$ npm install --no-save
$ npm start
```

Go to http://localhost:4000 .

## graphql

Add new user.
```js
mutation {
  addUser(name: "test", email: "test@examle.com") {
    id, name, email
  }
}
```

Select a user.
```js
query {
  user(id: 1) {
    id, name, email
  }
}
```

## typeorm migration

Migration run.
```sh
$ npm run typeorm migration:run
```

Migration revert.
```sh
$ npm run typeorm migration:revert
```
