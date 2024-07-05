import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const TodoSchema = Yup.object().shape({
  task: Yup.string()
    .min(5, 'Task must be at least 5 characters')
    .required('Required'),
});

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (values, { resetForm }) => {
    setTasks([...tasks, values.task]);
    resetForm();
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <h1>TODO List</h1>
      <Formik
        initialValues={{ task: '' }}
        validationSchema={TodoSchema}
        onSubmit={addTask}
      >
        {() => (
          <Form>
            <Field name="task" type="text" placeholder="Enter your task" />
            <ErrorMessage name="task" component="div" />
            <button type="submit">Add Task</button>
          </Form>
        )}
      </Formik>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task} <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
