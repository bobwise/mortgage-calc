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
import numeral from 'numeral';

function App() {

  const [estPayment, setEstPayment] = useState(0);
  const [homePrice, setHomePrice] = useState('350,000.00');
  const [downPayment, setDownPayment] = useState('70,000.00');
  const [insurance, setInsurance] = useState('89.00');
  const [tax, setTax] = useState('499.00');
  const [hoaFees, setHoaFees] = useState('0.00');

  useEffect(() => {
    calculateMonthlyPayment();
  });

  const formatAndUpdateCurrency = (value, setter) => {
    value = numeral(value).format('0,0.00');
    setter(value);
  }

  const calculateMonthlyPayment = () => {
    // D = (((1 + r)^n) - 1) / (r * (1 + r)^n)

    const homePrice_unformatted = numeral(homePrice).value();
    const downPayment_unformatted = numeral(downPayment).value();
    const insurance_unformatted = numeral(insurance).value();
    const tax_unformatted = numeral(tax).value();
    const hoaFees_unformatted = numeral(hoaFees).value();

    const principal = homePrice_unformatted - downPayment_unformatted;
    const monthlyRate = .0314 / 12;
    const numPayments = 360;

    const D = (Math.pow((1 + monthlyRate), numPayments) - 1) / (monthlyRate * Math.pow((1 + monthlyRate), numPayments))

    const PandI = principal / D;

    const estimatedPayment = PandI + insurance_unformatted + tax_unformatted + hoaFees_unformatted;

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

        {/* <SprkText additionalClasses="sprk-b-TypeBodyTwo sprk-u-mvl">
          Enter some info and get some numbers.
        </SprkText> */}

        <SprkTextInput
          label="Home Price"
          textIcon
          value={homePrice}
          onChange={(event) => { setHomePrice(event.target.value) }}
          onBlur={(event) => { formatAndUpdateCurrency(event.target.value, setHomePrice) }}
        />
        <SprkTextInput
          label="Down Payment"
          textIcon
          value={downPayment}
          onChange={(event) => { setDownPayment(event.target.value) }}
          onBlur={(event) => { formatAndUpdateCurrency(event.target.value, setDownPayment) }}
          valid={numeral(downPayment).value() <= numeral(homePrice).value()}
          errorMessage="Down payment must be less than the purchase price."
        />
        <SprkTextInput
          label="Homeowner's Insurance"
          helperText="This amount is determined by your insurance provider."
          textIcon
          value={insurance}
          onChange={(event) => { setInsurance(event.target.value) }}
          onBlur={(event) => { formatAndUpdateCurrency(event.target.value, setInsurance) }}
        />
        <SprkTextInput
          label="Property Tax"
          helperText="This amount is determined by the local government."
          textIcon
          value={tax}
          onChange={(event) => { setTax(event.target.value) }}
          onBlur={(event) => { formatAndUpdateCurrency(event.target.value, setTax) }}
        />
        <SprkTextInput
          label="Homeowner's Association Fees"
          helperText='Often called "HOA Fees". This amount is determined by the community that includes your home.'
          textIcon
          value={hoaFees}
          onChange={(event) => { setHoaFees(event.target.value) }}
          onBlur={(event) => { formatAndUpdateCurrency(event.target.value, setHoaFees) }}
        />

        <SprkHeading
          element="h2"
          additionalClasses="sprk-b-TypeDisplayFive"
        >
          Estimated Monthly Payment: {numeral(estPayment).format('$0,0.00')}
        </SprkHeading>
      </SprkCenteredColumn>
    </main>
  );
}

export default App;
