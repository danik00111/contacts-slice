import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { add, del, set } from './redux/actions'


function App() {

  const contacts = useSelector(state=>state.cont)
  const filter = useSelector(state=>state.fil)
  const dispatch = useDispatch()

  const addcontact =e=> {
    e.preventDefault()
    dispatch(add({
      name: e.target.elements.inputname.value,
      number: e.target.elements.inputnumber.value
    }))
  }

  const delcontact =e=> {
    e.preventDefault()
    dispatch(del(e.target.elements.delID.value))
  }

  const filt =e=> {
    e.preventDefault()
    dispatch(set(e.target.value))
  }


  return (<>
    <form onSubmit={addcontact}>
      <input required type="text" name="inputname" id="input-name" placeholder='Name' />
      <input required type="text" name="inputnumber" id="input-number" placeholder='Number (no letters)' pattern='^[^A-Za-z]*$' />
      <button type='submit'>Add Contact</button>
    </form>
    <form onSubmit={delcontact}>
      <input required name="delID" type="number" id="del-id" placeholder='ID' />
      <button type='submit'>Delete Contact</button>
    </form>
    <input type="text" name="filter" id="filter" placeholder='Filter'
      onInput={filt}/>
    <ul>
      {contacts.filter(x=>x.name.includes(filter)).map((x,i)=>(
        <li key={x.id}>
          <p>
            <span style={{fontSize:'0.5em'}}>#{x.id}</span>
            &nbsp;
            {x.name}:
            &nbsp;
            <code style={{fontStyle:'italic',color:'yellow'}}>{x.number}</code>
          </p>
        </li>
        ))}
    </ul>
  </>)
}

export default App
