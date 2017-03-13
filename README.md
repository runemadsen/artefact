# Artefact

This is Artefact!

From [this repo](https://github.com/mz026/universal-redux-template)

- Install dependencies:
`$ npm install`

- Host dev environment and start to build something changing the world!
`$ npm start`

- To run the test with Mocha, Enzyme, Sinon and Chai:
`$ npm test`

- To generate a container/component/action and its tests:
`$ ./bin/generate <type> <path>`

eg: `$ ./bin/generate component myNamespace/MyComponent`


## Deployment:

To deploy this app to production environment:

- Prepare a server with NodeJS environment

- Use whatever tool to upload this app to server. ([Capistrano](http://capistranorb.com/) is a good choice.)

- Run `$ NODE_ENV=production npm install` on server
  - After the installation above, `postinstall` script will run automatically, building front-end related assets and rev-ed server code under `dist/` folder.

- Kick off the server with:

` NODE_ENV=production NODE_PATH=./dist/server-build node dist/server-build/server`

### Deploy to Heroku

To deploy this app to heroku,

- Set up heroku git remote url
- Set `API_BASE_URL` to heroku config var. (without trailing slash)

Here's a [sample](https://redux-template-test.herokuapp.com/) deployed to heroku: https://redux-template-test.herokuapp.com/
For this case, the `API_BASE_URL` mention above would be `https://redux-template-test.herokuapp.com`
