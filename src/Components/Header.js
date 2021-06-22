import Button from "./Button"



const Header = () => {
    const onClick = () => {
        console.log("parent btn click")
    }

    const onClicker = () =>
{

}


    return (
        <header className="header">
        <h1>Task Tracker</h1>
       <Button color="blue" text="click"
       onClick={onClick}></Button>


       </header>
    )
}



export default Header
