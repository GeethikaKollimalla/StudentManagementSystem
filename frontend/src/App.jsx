import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import "./App.css";

function App() {

const [isLoggedIn, setIsLoggedIn] = useState(false);

if(!isLoggedIn){
return (
<Login
onLogin={() => setIsLoggedIn(true)}
/>
);
}

return <Dashboard />;
}

export default App;