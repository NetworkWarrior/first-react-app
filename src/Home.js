const Home = () => {
    const handleClick = (e) => {
        console.log("hello, sup my niggas", e);
    }
    const handleClickAgain = (name, e) => {
        console.log("sup " + name, e.target);
    }
    return ( 
        <div className="home">
            <h2>HomePage</h2>
            <button onClick={handleClick}>hello</button>
            <button onClick={(e) => handleClickAgain("mariooooooooooo", e)}>Click me again</button>
        </div>
    );
}
    
export default Home;
