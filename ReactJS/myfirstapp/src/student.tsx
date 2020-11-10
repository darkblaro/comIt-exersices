import React,{FunctionComponent} from 'react';

export interface IStudent{
    name:string;
    age:number;
    city?:string;
}

export interface StudentProps{
    student:IStudent;
    isTest:boolean;
}

const Student:FunctionComponent<StudentProps>=(props)=>{
return(
    <div>
        <div>Name: {props.name}</div>
        <div>Age: {props.age}</div>
        <div>City: {props.city}</div>
        <div>isTest: {props}</div>
    </div>);
}

Student.defaultProps={
    city:'winnipeg'
}
export default Student