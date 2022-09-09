import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

export default function Home() {
  return (
    //<h1>hey</h1>
    {element}
    
    
    // const root = ReactDOM.createRoot(document.getElementById('root'));
    //root.render(element);
  )
}
