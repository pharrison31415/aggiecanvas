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
            <button 
                onClick={handleLogout} 
                name="logout"
                style={{
                    backgroundColor: "#1E90FF",
                    color: "white",
                    textAlign: "center",
                    borderRadius: "50%"
                }}    
            >
                Logout
            </button><br />

            <button 
                onClick={handleEdit} 
                name="logout"
                style={{
                    backgroundColor: "#4FFFB0",
                    color: "white",
                    textAlign: "center",
                    borderRadius: "50%"
                }}    
            >
                Logout
            </button>
        </div>
    )
}