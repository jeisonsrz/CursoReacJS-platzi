//const element= document.createElement('h1');
//element.innerText= 'Hello,Platzi Eureka!';
//const container = document.getElementById('app');
//container.appendChild(element)
/*const element = React.createElement(
    'a',
    {href: 'http://platzi.com'},
'Platzi') */

/*
const name='Eurekitaa! :D'
const jsx= <div>
    <h1>Hola soy Jeison</h1>
    <p> Soy Eurekita! Technology</p>
</div> */

import React from 'react';
import ReactDOM from 'react-dom';
import BadgeNew from './pages/BadgeNew';
import Navbar from './component/Navbar';
import Badge from './component/Badge';
import 'bootstrap/dist/css/bootstrap.css';
import './global.css';
import Badges from './pages/Badges';

const container = document.getElementById('app');

/*ReactDOM.render(<Badge firstName="aaa" 
lastName="Poncho" 
jobTitle="Frontend Engineer" 
twitter="Arroz con pollo🍚🐔"
avatarUrl="https://www.gravatar.com/avatar?d=identicon"
/>,container); */
ReactDOM.render(<Badges/>,container);