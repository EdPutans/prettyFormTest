import React from 'react';
import PageContainer from './Components/PageContainer/PageContainer';
import Questionaire from './Pages/Questionaire/Questionaire';
// import PreSubmit from './Pages/PreSubmit/PreSubmit';

function App() {
  const [formStage, setFormStage] = React.useState(1);
  const [userData, setUserData] = React.useState({
    name: '',
    email: '',
    sportType: '',
    answer: '',
    acceptedCommunication: false,
  });

  return (
    <PageContainer>
      <Questionaire
        onChange={(field, val) => setUserData({ ...userData, [field]: val })}
        userData={userData}
      />
      {/* <PreSubmit /> */}
    </PageContainer>
  );
}

export default App;
