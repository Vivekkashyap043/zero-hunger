import { useForm } from "react-hook-form";
import {useState} from 'react'

function DonarRegister() {
    let [users,setUsers]=useState([])


    let { register, handleSubmit, formState: { errors }} = useForm();
  
    function handleFormSubmit(userObj) {
      setUsers([...users,userObj])
    }

  return (
      <div >
          <form>

          </form>
      </div>
 )
  }
    
export default DonarRegister;
