const taskList = [{
  done : false,
  description : 'Task 1'
}, {
  done : true,
  description : 'Task 2'
}, {
  done : false,
  description : 'Task 3'
}];

class Task extends React.Component {
  constructor(initialState) {
    super()

    this.state = initialState;

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      done : !prevState.done,
    }));
  }

  render() {
    return (
      <li
        className={'task-list__task' + (this.state.done ? ' task-list__task--done' : '')}
        onClick={this.handleClick}>
        {this.state.description}
      </li>
    )
  }
}

class TodoList extends React.Component {
  constructor() {
    super()

    this.state = {
      tasks : [],
    };
  }

  componentDidMount() {
    taskList.forEach(task => this.addTask(task))
  }

  addTask(task) {
    this.setState(prevState => ({
      tasks : [...prevState.tasks, task]
    }));
  }

  removeTask(task) {
    this.setState(prevState =>
      prevState.tasks.filter(taskItem => taskItem.description === task.description))
  }

  render() {
    return (
      <div className="wrapper">
        <ul className="task-list">
          {
            this.state.tasks.map(function (task) {
              return (
                <Task key={task.description} description={task.description} done={task.done} />
              )
            }, this)
          }
        </ul>
      </div>
    )
  }
}

class TaskAddButton extends React.Component {
  handleClick() {
    alert('Add task')
  }

  render() {
    return (
      <button
        className="btn btn--success"
        onClick={this.handleClick.bind(this)}>
        +
      </button>
    )
  }
}

function TodoApp() {
  return (
    <div className="main">
      <TaskAddButton />
      <TodoList />
    </div>
  )
}

ReactDOM.render(
  <TodoApp />,
  document.getElementById('mount-point')
);
