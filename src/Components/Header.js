import Button from "./Button"



const Header = () => {
    const onClick = () => {
        console.log("parent btn click")
    }

    const onClicker = () =>
{

}


    return (
        <header class="header">
        <h1>Task Tracker</h1>
       <Button color="blue" text="Click"
       onClick={onClick}></Button>


       </header>
    )
}



export default Header
