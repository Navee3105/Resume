import { useState } from "react";
import "./App.css";

import Loginpage from "./components/Loginpage";
import Homepage from "./components/Homepage";


function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [username, setUsername] = useState("");

  return (
    <div>
      {isLogin ? (
        <Homepage username={username} setIsLogin={setIsLogin} />
      ) : (
        <Loginpage setIsLogin={setIsLogin} setUsername={setUsername} />
      )}
    </div>
  );
}

export default App;
