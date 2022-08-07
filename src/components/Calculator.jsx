import styled from 'styled-components';

function Calculator() {
  const Button = styled.button`
    color: palevioletred;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    align-self: flex-end;
    &:hover {
      background-color: palevioletred;
      color: white;
    }
  `;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="p-6 flex flex-col md:space-x-10 sm:flex-row">
        <div className="w-full p-10">
          <img src="https://medicinehospital.com.tr/endex/BMI.png" alt="bmi" />
        </div>
        <div className="w-full p-10 flex flex-col items-center justify-center">
          <input
            type="number"
            name="height"
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="Enter your height, ex: 160cm"
          />
          <input
            type="number"
            name="weight"
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="Enter your weight, ex: 60kg"
          />
          <Button id="button">Calculate</Button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
