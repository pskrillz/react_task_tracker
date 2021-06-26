import Button from "./Button"



const Header = ({onAdd}) => {

    // const onClick = () => {
    //     console.log("parent btn click")
    // }




    return (
        <header className="header">
        <h1>Task Tracker</h1>
       <Button color="blue" text="Add"
       onClick={onAdd}></Button>


       </header>
    )
}



export default Header
