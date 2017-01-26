class TodoList extends React.Component {
  constructor() {
    super()

    this.state = {
      tasks : [{
        done : false,
        description : 'Test'
      }]
    }
  }

  handleClick(taskDescription) {
    const task = this.state.tasks.find(item => item.description === taskDescription)

    if (task === undefined) return;

    task.done = !task.done;

    const newState = {
      tasks : this.state.tasks.map(item => {
        if (item.description === task.description) {
          return task;
        }
        return item;
      })
    }

    this.setState(newState)
  }

  render() {
    return (
      <div className="wrapper">
        <ul className="task-list">
          {
            this.state.tasks.map(function (task) {
              return <li key={task.description}
                className={'task-list__task' + (task.done ? ' task-list__task--done' : '')}
                onClick={this.handleClick.bind(this, task.description)}>
                {task.description}
                </li>
            }, this)
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
