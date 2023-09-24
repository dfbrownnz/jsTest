import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TasksApp() {
  const [posts, setPosts] = useState([]);

  //http://127.0.0.1:8080/datetime?get_task_id=1//
  // 'https://jsonplaceholder.typicode.com/posts'
  // https://builtin.com/software-engineering-perspectives/react-api
  // https://nextjs.org/docs/pages/api-reference/functions/use-router
  //https://react.dev/blog/2023/03/16/introducing-react-dev
  // https://retool.com/blog/hooks-and-state-102-the-dependency-array-in-useeffect/
  //https://www.geeksforgeeks.org/how-to-parse-json-data-into-react-table-component/?ref=ml_lbp
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <ul className="list-group">
      {posts.map(post => (
        <li className="list-group-item" key={post.id}>{post.id}. {post.title}</li>
        //<li className="list-group-item" key={post.task_id}>{post.task_id}. {post.description}</li>
      ))}
    </ul>
  );
}

export default TasksApp;
