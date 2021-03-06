# Core Data Structures

Tests and implementations for common data structures.

* Stack
* Set
* Queue
* Priority Queue
* Linked List
* Doubly Linked List


## Installation, Setup and Testing

To get started, after cloning down the project unto your machine, you'll need to install all the dependencies by running the following command.

```
$ npm install
```

You may also need to run the babel compiler.

```
$ npm run build
```

To play with data structures in terminal do the following (linked list used as example).

```
$ node lib/linked_list.js
$ node
> const LL = require("./lib/linked_list").default
> const myLL = new LL()
> myLL.insert('yo')
> myLL.insert('er')
> myLL.showAll()
```

To run all unit test cases at once navigate to your main project directory and run the following.

```
$ npm test
```




## Context

If you spend most of your time programming in high-level languages, you may not realize how often you use data structures or how they are built. Sometimes it's useful to peek under the hood and see how the engine works.

The nice thing is, most data structures are **actually quite simple** when you get down to it. They have straight-forward, relatively small interfaces.

In a larger sense, being more familiar with data structures is helpful for you ability to think about data more abstractly, and to design better software.

## Specifications

- [X] Artifact produced is a fork of the [core-data-structures][core-data-structures] repo.
- [X] Can run all tests with `npm test`.
- [X] All tests are passing.
- [X] For each data structure identified above, there exists:
  - [X] a test file with unit tests for each method and property.
  - [X] an implementation file with a correct implementation of the data structure.

### Required

- [X] The artifact produced is properly licensed, preferably with the [MIT license][mit-license].

## Quality Rubric

**Well formatted code**
- Code uses a linter, which can be invoked with a command (e.g. `npm run lint`). [50 points]
- Running the linter on all source code files generates no linting errors. [50 points]

**Clear and useful README**
- Repository includes a README file with installation and setup instructions. [25 points]
- Repository includes a README file with usage instructions and at least one example use case. [25 points]

**Proper dependency management**
- There is a command to install dependencies (e.g. `npm install`) and it is specified in the installation and setup instructions of the README. [50 points]

**Good project management**
- Commit messages are concise and descriptive. [25 points]
- All features are added via pull requests. [25 points]
- Every pull request has a description summarizing the changes made. [25 points]
- Every pull request has been reviewed by at least one other person. [25 points]
