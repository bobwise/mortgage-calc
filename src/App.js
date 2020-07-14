import React, { useState, useEffect } from 'react';
import './App.scss';
import {
  SprkHeading,
  SprkText,
  SprkTextInput,
  SprkCenteredColumn,
  SprkStack,
  SprkStackItem,
} from '@sparkdesignsystem/spark-react';

function App() {

  const [estPayment, setEstPayment] = useState(0);
  const [homePrice, setHomePrice] = useState(300000);
  const [downPayment, setDownPayment] = useState(60000);

  const handleHomePriceChange = event => {
    setHomePrice(event.target.value);
  }

  const handleDownPaymentChange = event => {
    setDownPayment(event.target.value);
  }

  useEffect(() => {
    calculateMonthlyPayment();
  });

  const calculateMonthlyPayment = () => {
    setEstPayment(eval(homePrice) + eval(downPayment));
  }

  return (
    <div className="App">
      <SprkCenteredColumn additionalClasses="sprk-u-pal">
        <SprkHeading
          element="h1"
          variant="displayTwo"
          isPageTitle
        >
          Calc Ya' Later!
        </SprkHeading>
        <SprkHeading
          element="h2"
          variant="displayFive"
          additionalClasses="sprk-u-FontStyle--italic sprk-u-mvm"
        >
          An accessible and respectful mortgage calculator
        </SprkHeading>

        <SprkText additionalClasses="sprk-b-TypeBodyTwo sprk-u-mvl">
          Enter some info and get some numbers.
        </SprkText>

        <SprkTextInput label="Home Price" textIcon name="monetary" value={homePrice} onChange={handleHomePriceChange} />
        <SprkTextInput label="Down Payment" textIcon name="monetary" value={downPayment} onChange={handleDownPaymentChange} />

        <SprkHeading
          element="h3"
          additionalClasses="sprk-b-TypeDisplayFive"
        >
          Estimated Monthly Payment: {estPayment}
        </SprkHeading>
      </SprkCenteredColumn>
    </div>
  );
}

export default App;
