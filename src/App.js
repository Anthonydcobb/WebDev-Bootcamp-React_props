import React from 'react'
import ReactDOM from 'react-dom'

function Card(props) {
  return (
    <div>
      <h2> {props.name} </h2>
      <img src={props.image} alt="avatar_img" />
      <p>{props.phone}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div className="App">
     <h1>My Contacts</h1>

    <Card
      name="W.E.B. Du Bois"
      image="https://www.naacp.org/wp-content/uploads/2016/04/dubois1.jpg"
      phone="+123 456 789"
      email="problem@color_line.com"
    />
    <Card
      name="John Rawls"
      image="https://vanmierlostichting.d66.nl/content/uploads/sites/296/2014/04/john-rawls.png"
      phone="+314 323 9874"
      email="veil@ignorance.com"
    />
    <Card
      name="Simone de Beauvoir"
      image="https://www.theparisreview.org/il/a4e07993ad/large/simone-de-beauvoir-interview.png"
      phone="+222 222 2222"
      email="becomes@women.com"
    />
      
  
   
  </div>,
  document.getElementById('root')
);
