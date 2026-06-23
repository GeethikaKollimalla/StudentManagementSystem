function Navbar({ setPage }) {

  return (

    <div className="navbar">

      <div className="navbar-title">
        Student Management System
      </div>

      <div className="navbar-links">

        <button
          onClick={() => setPage("home")}
        >
          Dashboard
        </button>

        <button
          onClick={() => setPage("register")}
        >
          Register Student
        </button>

        <button
          onClick={() => setPage("view")}
        >
          View Students
        </button>

      </div>

    </div>

  );
}

export default Navbar;