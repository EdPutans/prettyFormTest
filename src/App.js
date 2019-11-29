import React from 'react';
import PageContainer from './Components/PageContainer/PageContainer';
import Questionaire from './Pages/Questionaire/Questionaire';
import Summary from './Pages/Summary/Summary';

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
      {formStage === 1 && (
        <Questionaire
          onChange={(field, val) => setUserData({ ...userData, [field]: val })}
          userData={userData}
          onSubmit={() => setFormStage(2)}
        />
      )}
      {formStage === 2 && <Summary userData={userData} />}
    </PageContainer>
  );
}

export default App;
