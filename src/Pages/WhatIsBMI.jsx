import React from 'react';

function WhatIsBMI() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="p-6 md:space-x-10">
        <h1 className="text-3xl leading-10 font-bold">What is the body mass index (BMI)?</h1>
        <p className="text-lg py-1 indent-4">The body mass index (BMI) is a measure that uses your height and weight to work out if your weight is healthy.</p>
        <p className="text-lg py-1 indent-4">The BMI calculation divides an adult's weight in kilograms by their height in metres squared. For example, A BMI of 25 means 25kg/m2.</p>

        <h1 className="text-2xl leading-10 font-bold">BMI ranges</h1>
        <p className="text-lg py-1 indent-4">For most adults, an ideal BMI is in the 18.5 to 24.9 range.</p>
        <p className="text-lg py-1 indent-4">For children and young people aged 2 to 18, the BMI calculation takes into account age and gender as well as height and weight.</p>
        <p className="text-lg py-1 indent-4">If your BMI is:</p>
        <ul className="list-disc py-1 indent-4 px-10">
          <li>below 18.5 - you're in the underweight range</li>
          <li>between 18.5 and 24.9 - you're in the healthy weight range</li>
          <li>between 25 and 29.9 - you're in the overweight range</li>
          <li> between 30 and 39.9 - you're in the obese range</li>
        </ul>
        <p className="text-lg py-1 indent-4">If you want to calculate your BMI, try our healthy weight calculator. *** </p>

        <h1 className="text-2xl leading-10 font-bold">Accuracy of BMI</h1>
        <p className="text-lg py-1 indent-4"> BMI takes into account natural variations in body shape, giving a healthy weight range for a particular height.</p>
        <p className="text-lg py-1 indent-4">As well as measuring your BMI, healthcare professionals may take other factors into account when assessing if you're a healthy weight.</p>
        <p className="text-lg py-1 indent-4">
          Muscle is much denser than fat, so very muscular people, such as heavyweight boxers, weight trainers and athletes, may be a healthy weight even though their BMI is classed as obese.
        </p>
        <p className="text-lg py-1 indent-4">
          Your ethnic group can also affect your risk of some health conditions. For example, adults of South Asian origin may have a higher risk of some health problems, such as diabetes, with a BMI
          of 23, which is usually considered healthy.
        </p>
        <p className="text-lg py-1 indent-4">You should not use BMI as a measure if you're pregnant. Get advice from your midwife or GP if you're concerned about your weight.</p>
      </div>
    </div>
  );
}

export default WhatIsBMI;
