import React,{useState} from 'react';
import './App.css';

function App() {
  const [current, setCurrent] = useState("")
  const [list,setList] = useState([])

  const addItem = () => {
    if(!current) return
    let items= [...list,current]
    setList(items)
    setCurrent("")
  }

  return (
    <div className="App">
      <h1 className='title'>To-Do List</h1>
      <div className="input-box">
        <input placeholder='Enter Items Here...' onKeyPress={e => (e.key==="Enter")&&addItem()} value={current} onChange={e => setCurrent(e.target.value)} className='input-field' type="text" name="" id="" />
        <button className='btn' onClick={addItem}>Add</button>
      </div>
      <div className="output-box">
        <ul className="list">
          {
            list.length ? 
            list.map(item => <li>{item}</li> )
            :
            <p className='output-placeholder'> Your List-Items Will Appear Here...</p>      
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
