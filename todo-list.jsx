import { Component } from 'react'
import ReactDOM from 'react-dom'

export default class TodoList extends Component {
  constructor() {
    super()

    this.state.tasks = [{
      done : false,
      description : 'Test'
    }]
  }

  render() {
    return (
      <div class="wrapper">
        <ul class="task-list">
          {
            this.state.tasks.map(function (task) {
              return <li class={'task-list__task ' + task.done ? 'task-list__task--done' : ''}>task.description</li>
            })
          }
        </ul>
      </div>
    )
  }
}

ReactDOM.render(
  <TodoList />,
  document.getElementById('mount-point')
);
