import React, { useState, useEffect } from 'react';
import './App.scss';
import IconSet from './IconSet';
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
  const [homePrice, setHomePrice] = useState(350000);
  const [downPayment, setDownPayment] = useState(70000);
  const [insurance, setInsurance] = useState(89);
  const [tax, setTax] = useState(499);
  const [hoaFees, setHoaFees] = useState(0);

  useEffect(() => {
    calculateMonthlyPayment();
  });

  const calculateMonthlyPayment = () => {
    // D = (((1 + r)^n) - 1) / (r * (1 + r)^n)

    const principal = homePrice - downPayment;
    const monthlyRate = .0314/12;
    const numPayments = 360;

    const D =(Math.pow((1 + monthlyRate), numPayments) - 1) / (monthlyRate * Math.pow((1 + monthlyRate), numPayments))

    const PandI = principal / D;

    const estimatedPayment = PandI + insurance + tax + hoaFees;

    setEstPayment(estimatedPayment.toFixed(2));
  }

  return (
    <main className="App">
    <IconSet></IconSet>
      <SprkCenteredColumn additionalClasses="sprk-u-pal">
        <SprkHeading
          element="h1"
          variant="displayTwo"
          isPageTitle
        >
          Calc Ya' Later!
        </SprkHeading>
        <SprkText additionalClasses="sprk-u-FontStyle--italic sprk-u-mvm">
          An accessible and respectful mortgage calculator
        </SprkText>

        <SprkText additionalClasses="sprk-b-TypeBodyTwo sprk-u-mvl">
          Enter some info and get some numbers.
        </SprkText>

        <SprkTextInput
          label="Home Price"
          name="monetary"
          textIcon
          value={homePrice}
          onChange={(event) => { setHomePrice(event.target.value)}}
        />
        <SprkTextInput
          label="Down Payment"
          textIcon
          name="monetary"
          value={downPayment}
          onChange={(event) => { setDownPayment(event.target.value)}}
          valid={downPayment <= homePrice}
          errorMessage="Down payment must be less than the purchase price."
        />
        <SprkTextInput
          label="Homeowner's Insurance"
          helperText="This amount is determined by your insurance provider."
          textIcon
          name="monetary"
          value={insurance}
          onChange={(event) => { setInsurance(event.target.value)}}
        />
        <SprkTextInput
          label="Property Tax"
          helperText="This amount is determined by the local government."
          textIcon
          name="monetary"
          value={tax}
          onChange={(event) => { setTax(event.target.value)}}
        />
        <SprkTextInput
          label="Homeowner's Association Fees"
          helperText='Often called "HOA Fees". This amount is determined by the community that includes your home.'
          textIcon name="monetary"
          value={hoaFees}
          onChange={(event) => { setHoaFees(event.target.value)}}
        />

        <SprkHeading
          element="h2"
          additionalClasses="sprk-b-TypeDisplayFive"
        >
          Estimated Monthly Payment: {estPayment}
        </SprkHeading>
      </SprkCenteredColumn>
    </main>
  );
}

export default App;
