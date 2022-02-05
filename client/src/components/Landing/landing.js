import React  from 'react';
import {Link} from 'react-router-dom';

function landing(){
  return (
  <div>
      <h1>Welcome to Country's App</h1>
      <Link to='/home'>
      <button>Start</button>
      </Link>  
  </div>
  )}

export default landing;
