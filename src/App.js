import { useState } from 'react';
import styled from 'styled-components';
import {useGetWorkersQuery, useAddWorkerMutation, useDeleteWorkerMutation} from './Redux/api/apiWorkers'

const Wrapper = styled.div`
margin: 20px  auto;
padding: 10px;
width:600px;

`;
const ListItem = styled.li`
display:flex; 
justify-content:space-between;
 padding:10px;
 margin: 10px 0 0 0;
border:1px solid; 
`;

function App() {
  const [limit, setLimit] = useState('')

  const { data = [], isLoading } = useGetWorkersQuery(limit)
  const [deleteWorker] = useDeleteWorkerMutation();

  const selectHandler = (e) =>{
    setLimit(e.target.value)
  }
  if (isLoading) { return <h3>...Loading</h3> }
  return (
    <Wrapper>
      <div style={{display:'flex', justifyContent:'center'}}>
      <select onChange={(e)=>selectHandler(e)}>
      <option value="">All</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
        <AddForm></AddForm>
      </div>
  
      <h3>Workers List</h3>
      <ul>
        {data.map(worker => {
          return <ListItem key={worker.id} >{worker.name} <button style={{ color: 'red' }} onClick={() => deleteWorker(worker.id)}>
            &times;</button></ListItem>
        })}
      </ul>
    </Wrapper>
  );
}

const AddForm = () =>{
  const [name, setName] = useState('');
  const [addWorker, {isLoading}] = useAddWorkerMutation();
  const formHandler = () =>{
    addWorker({name}).unwrap()
    setName('')
  }

  return (
    <>
   
    <input type='text'  value={name} onChange={(event)=>setName(event.target.value)}/>
    <button type='submit' onClick={formHandler}> submit</button>
    </>
  );
  
}

export default App;
