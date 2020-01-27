import React, {useState} from 'react';

const App = {
  width:800,
  margin: 100
}

const table = {
  "width": "80%",
  "textAlign": "left"

}
const input = {
  padding: 5,
  margin: 5

}
const button = {
  "cursor": "pointer" ,
  "padding": "5px 10px"
}
const td = {
    "padding": "5px 0px"

}
const tr = {
  margin: 5

}

function PhoneBookForm(props) 
{ 
  const [address, setAddress] = useState({fname:'', lname:'',phone:''}) 
  var [items, setItems] = useState([]) 

 
 const submitHandler = e => {
    e.preventDefault()   
    setItems([...items,{
      id: items.length,
      value: address
    }],[items])   
  }
 
  
 return ( 
 <div style={App}> 
  <h1>Phone Book</h1>
   <form onSubmit={submitHandler}> 
    <input 
        style={input}
        type="text" 
        name="fname" 
        value={address.fname} 
        onChange={e => setAddress({...address, fname:e.target.value})}
        required />
    <input 
        style={input}
        type="text" 
        name="lname" 
        value={address.lname} 
        onChange={e => setAddress({...address, lname:e.target.value})} 
        required />
    <input 
        style={input}
        type="text" 
        name="phone" 
        value={address.phone} 
        onChange={e => setAddress({...address, phone:e.target.value})}
        required /> 
    <button 
        style={button}
        type="submit">Add Phone Book</button> 
    </form>  
   <InformationTable items={items} /> 
 </div>
 );
}

function InformationTable(props) { 
  //console.log(props.items)
  var heading = null;
  if(props.items.length > 0){
    heading = <thead>
        <tr>
          <th>First name</th>
          <th>Last Name</th>
          <th>Phone</th>
        </tr>
    </thead>
  }
  

  props.items.sort(function(a, b) {
    var textA = a.value.lname.toUpperCase();
    var textB = b.value.lname.toUpperCase();
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
  });

  return (
  <div>
    
    <table style={table}>
    
     {  heading }
   

      <tbody>        
          {           
            props.items.map(item => (
              <tr key={item.id} style={tr}><td style={td}>{item.value.fname}</td><td>{item.value.lname}</td><td>{item.value.phone}</td></tr>
          ))
          }
      </tbody>
    </table>
  </div>
  );
}
function Application(props) { 
  return ( 
    <section> 
      <PhoneBookForm /> 
      
    </section> 
  );
}

export default Application;