import { useState } from 'react';
const Home = () => {
    const[name, changeName]=useState("mario");
    const[age, changeAge]=useState(25);
    const handleClick = () =>{
        changeName("luigiiii");
        changeAge(30);
    }
    return (
        <div className="home">
            <h2>Homepage</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}
 
export default Home;