import React from 'react';
import Student,{IStudent} from './student';
import './App.css';


function App():JSX.Element{
  const std:IStudent[]=[{name:"Juliet",age:15,city:"Verona"},
          {name:"Romeo",age:16,city:"Verona"},
          {name:"Tibald",age:16}];

  return <>{
    std.map(std=>
        <Student name={std.name} age={std.age} city={std.city}/>
    )
    }</>
}

export default App;
