import './App.css';
import Header from './my component/Header';
import { Footer } from './my component/Footer';
import { Todos } from './my component/Todos';
import React, { useEffect, useState } from 'react';
import { AddTodo } from './my component/AddTodo';
import { About } from './my component/About';
import {
  BrowserRouter as Router,
  // Switch,
  Route,
} from "react-router-dom";
import { Switch } from 'react-router';

function App() {
  let initTodo;
  if (localStorage.getItem('todos') === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem('todos'));
  }

  const onDelete = (todo) => {
    // console.log('I am on delete of todo', todo);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  const addTodo = (title, dis) => {
    // console.log('i am adding this todo', title, dis)
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      dis: dis
    }

    setTodos([...todos, myTodo]);
    // console.log(myTodo);
  }
  // const [todos, setTodos] = useState([
  // {
  //   sno : 1,
  //   title : 'Wake-up at 5 AM',
  //   dis : 'The 5 AM club' 
  // },
  // {
  //   sno : 2,
  //   title : 'Read books',
  //   dis : 'start with why!' 
  // },
  // {
  //   sno : 3,
  //   title : 'TedX',
  //   dis : 'Attend a ted talk.' 
  // }
  // ]);

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])


  return (
    <>
      <Router>
        <Header title="Todo List" searchBar={false} />
        <Switch>
          <Route exact path="/" render={() => {
            return(
            <>
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
            </>)
          }}>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>


        <Footer />
      </Router>
    </>
  );
}

export default App;