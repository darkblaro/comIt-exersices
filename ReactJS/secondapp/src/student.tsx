import React,{FunctionComponent} from 'react';

export interface IStudent{
    name:string;
    age:number;
    city?:string;
}

let Student:FunctionComponent<IStudent>=(props)=>{
    return(
        <>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>City: {props.city}</p>
        </>);
}

Student.defaultProps={
    city:"Winnipeg"
}

export default Student;