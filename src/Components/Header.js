import Button from "./Button"



const Header = ({onAdd, showAdd}) => {

    // const onClick = () => {
    //     console.log("parent btn click")
    // }




    return (
        <header className="header">
        <h1>Task Tracker</h1>
        {/* come here with javascript and make the toggle dynamic styled */}
       <Button color={showAdd ? "purple" : "blue"} text={showAdd ? "Close" : "Add"}
       onClick={onAdd}></Button>


       </header>
    )
}



export default Header
