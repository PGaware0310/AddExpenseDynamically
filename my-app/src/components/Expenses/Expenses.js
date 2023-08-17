import React from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
// import ExpenseDetails from "./ExpenseDetails";
import './Expenses.css';


  const Expenses=(props)=>{
   
    return (
    <Card className="expenses">
      {
        props.items.map((ele,i)=>{
      return (
        <ul key={i}>
      <ExpenseItem title={ele.title}
       amount={ele.amount}  
       location={ele.location}
       date={ele.date}></ExpenseItem>   
       
       </ul>
       );
        })
        }
        </Card>
        );       
       }
       export default Expenses;