export default function Toolbar() {
    return (
        <div>
            <ToolbarButtons />
        </div>
    )
}

function ToolbarButtons() {
    const handleLogout = () => {
        alert("logout button was clicked");
    };

    const handleEdit = () => {
        alert("edit button was clicked");
    };

    return (
        <div style={{position: "absolute", right: "0%", paddingRight: "50px"}}>
              <button onClick={handleLogout} name="logout">
                <img
                   src={"/images/logoutButton.jpeg"}
                   alt="Logout button"
                   width="25px"
                   height="25px"
                   priority 
                />
            </button><br />

            <button onClick={handleEdit} name="edit">
                <img
                   src={"/images/editButton.jpeg"}
                   alt="Edit button"
                   width="25px"
                   height="25px"
                   priority 
                />
            </button>
        </div>
    )
}