const Home = () => {
    const handleClick = () => {
        console.log("Hello, world")
    }
    const handleClickAgain = (name, e) => {
        console.log("Hello, world" + name, e.target)
    }
    return (
        <div className="home">
            <h2>Homepage</h2>
            <button onClick = { handleClick }>Click Me</button>
            <button onClick = { (e) => {handleClickAgain('mario', e)}}>Click Me again</button> 
        </div>
      );
} 
 
export default Home;
