import './App.css';
import {Student,IStudent} from './student';

function App() {
  const students:IStudent[]=[{name:"Roman", age:1,city:"Winnipeg"},
                {name:"John", age:2, city:"None"},
                {name:"Samantha", age:3}];
  return (
        students.map(student=>(
          <div>
            <Student name={student.name} age={student.age} city={student.city}/>
          </div>
        ))
  )
}

export default App;
