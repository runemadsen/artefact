# Artefact

This is Artefact!

## Setting up a development environment

First make sure that you have postgres.app installed and running on your machine.

Then, run the following command in the terminal:
`createdb artefact`

Then, install the dependencies:
`npm install`

Then, migrate the database:
`npm run migrate`

Then, start the app:
`npm start`


## fetchData

This is the way a component can get initial data working both on server / client.

```js
class Question extends Component {
  static fetchData({ store, params, history }) {
    let { id } = params
    return store.dispatch(loadQuestionDetail({ id, history }))
  }
  componentDidMount() {
    let { id } = this.props.params
    this.props.loadQuestionDetail({ id, history: browserHistory })
  }
  render() {
    let { question } = this.props
    return (
      <div>
        <Helmet
          title={'Question ' + this.props.params.id}
        />
        <h2>{ question.get('content') }</h2>
        <h3> User: {question.getIn(['user', 'name'])} </h3>
      </div>
    )
  }
}
```
