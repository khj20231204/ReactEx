import ProviderMaker from "./ProviderMaker";
import AA from "./AA";
import BB from "./BB";

const App = () => {
  return (
    <div style={{margin:10,padding:10}}>
    <ProviderMaker>
      <AA></AA>
      <BB></BB>
    </ProviderMaker>
    </div>
  );
};

export default App;