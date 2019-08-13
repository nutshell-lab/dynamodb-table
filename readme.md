# dynamodb-table
[![Build Status](https://travis-ci.org/nutshell-lab/dynamodb-table.svg?branch=master)](https://travis-ci.org/nutshell-lab/dynamodb-table) ![npm bundle size](https://img.shields.io/bundlephobia/min/@nutshelllab/dynamodb-table.svg) [![Maintainability](https://api.codeclimate.com/v1/badges/10d58a30e59d0062f915/maintainability)](https://codeclimate.com/github/nutshell-lab/dynamodb-table/maintainability)

> Just sugar syntax over AWS DynamoDB

:warning: Work in progress, not published yet.


## Install

```
yarn add @nutshelllab/dynamodb-table
```


## Usage

### Single primary key

```js
import Table from '@nutshelllab/dynamodb-table'

const usersStore = new Table('users')

(async ({ id, ...data }) => {
  const users = await usersStore.put({
    key: { id },
    data
  })
})
```

### Combined primary key

```js
import Table from '@nutshelllab/dynamodb-table'

const postsStore = new Table('users_posts')

(async ({ userId, id, ...data }) => {
  const users = await usersStore.put({
    key: { userId, id },
    data
  })
})
```


## API

### method(arg1, arg2)

#### arg1

Type: `string`

Arg1 description

##### arg2

Type: `Object`

Arg2 description


## License

MIT © [Nutshell](https://nutshell-lab.com)
