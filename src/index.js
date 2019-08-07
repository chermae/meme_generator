import React from 'react';
import ReactDOM from 'react-dom';


import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();



/*
const TodoItem = (props) => <li onClick={props.onClick}>{props.item.text}</li>

class TodoList extends React.Component {
  render() {
    const { items, onClick } = this.props;
    return (<ul onClick={onClick}>
      {items.map((item, index) => 
                 <TodoItem item={item} key={index} onClick={this.handleItemClick.bind(this, item)}/>)}
    </ul>);
  }
  
  handleItemClick(item, event) {
    // Write your code here
    !item.done ? this.props.onItemClick(item, event) : event.stopPropagation()
  }
}


const items = [ { text: 'Buy grocery', done: true },
  { text: 'Play guitar', done: false },
  { text: 'Romantic dinner', done: false }
];

const App = (props) => <TodoList
  items={props.items}
  onItemClick={(item, event) => { console.log(item, event) }}
/>;

document.body.innerHTML = "<div id='root'></div>";
const rootElement = document.getElementById("root");
ReactDOM.render(<App items={items}/>, rootElement);

*/