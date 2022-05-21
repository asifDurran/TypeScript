import React from 'react'
import { UserConext } from '../App';

const User = () => {
  const {state, dispatch} = React.useContext(UserConext);
  return (
    <div>
        <h1>Name: - {state.name}</h1>
        <h1>Age: - {state.age}</h1>

        <button onClick={
            ()=>{
                dispatch({
                    type:"SET_AGE",
                    payload:state.age+1
                })
            }
        }>Update Age</button>
        <button onClick={
            ()=>{
                dispatch({
                    type:"SET_NAME",
                    payload:"Iva"
                })
            }
        }>
        Update Name</button>
    </div>
  )
}

export default User