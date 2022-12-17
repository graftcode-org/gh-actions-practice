# Playing ci/cd using github workflow

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Created a run-tests.yml which is executed on each commit pushed.

The job it carries it: 

- listen for each pushed commit
- build use ubuntu-latest as a hosted runner (vm)
- sets up node.js
- installs dependencies
- executes unit tests
- starts and waits for app to start
- finally executes automation tests

If all green tick shows on the commit within the pr
