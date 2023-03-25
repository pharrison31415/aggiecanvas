export default function Toolbar() {
  const handleLogout = () => {
    alert("logout button was clicked");
  };

  const handleEdit = () => {
    alert("edit button was clicked");
  };

  return (
    <div style={{ position: "fixed", right: "0", top: "0" }}>
      <button onClick={handleLogout} name="logout">
        <img
          src={"/images/logoutButton.jpeg"}
          alt="Logout button"
          width="35px"
          height="35px"
        />
      </button>
      <br />
      <button onClick={handleEdit} name="edit">
        <img
          src={"/images/editButton.jpeg"}
          alt="Edit button"
          width="35px"
          height="35px"
        />
      </button>
    </div>
  );
}
