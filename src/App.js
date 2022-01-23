import "./App.css";
import Profile from "./component/profile/Profile";

function App() {
  const alerthandleName = (fullName) => alert(fullName);

  return (
    <div className="App">
      <Profile
        fullName="Rahma"
        alerthandleName={alerthandleName}
        bio=" a web developper"
        profession="developper"
      >
        <img src="/logo192.png" alt="logo" />
      </Profile>
    </div>
  );
}

Profile.defaultProps = {
  fullName: "rahma",
};

export default App;
