import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { calculate, clearHistory } from '../redux/calculateSlice';

const MyButton = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 0.25em 0;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  align-self: flex-end;
  &:hover {
    background-color: palevioletred;
    color: white;
  }
`;

function Calculator() {
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();

  const bmi = useSelector((state) => state.calculator.bmi);
  const history = useSelector((state) => state.calculator.history);

  const dispatch = useDispatch();

  useEffect(() => {
    if (height && weight) dispatch(calculate({ height: height, weight: weight }));
  }, [height, weight, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setHeight(e.target.height.value / 100);
    setWeight(e.target.weight.value);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-20">
      <div className="p-6 flex flex-col md:space-x-10 sm:flex-row">
        <div className="w-full p-10 flex justify-center">
          <img src="https://medicinehospital.com.tr/endex/BMI.png" alt="bmi" />
        </div>
        <form onSubmit={handleSubmit} className="w-full p-10 flex flex-col items-center justify-center">
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
          <MyButton id="button">Calculate</MyButton>
        </form>
      </div>

      <div className="flex flex-col-reverse md:space-x-10 mb-10 sm:flex-row">
        {history.length > 0 && (
          <div className={`${bmi > 0 ? 'flex flex-col w-full' : 'flex flex-col md:w-1/2 w-full'}`}>
            <MyButton onClick={() => dispatch(clearHistory())}>Clear</MyButton>
            <div className="overflow-x-auto relative">
              <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-800 uppercase bg-[palevioletred]/60 border border-[palevioletred]/60">
                  <tr>
                    <th scope="col" className="py-1 px-6">
                      History
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {history.map((item, i) => (
                    <tr key={i} className="bg-white border border-[palevioletred]/60">
                      <th scope="row" className="py-1 px-6 font-medium">
                        {item}
                      </th>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {bmi > 0 && (
          <div className="w-full p-10 flex flex-col items-center">
            <div className="w-1/2 p-5 border-2 border-gray-100 border-[palevioletred]/60">
              <p className="font-bold">BMI: {bmi}</p>
              {bmi <= 18.4 && <p className="text-yellow-500 font-bold">Status: Underweight</p>}
              {bmi > 18.5 && bmi < 24.9 && <p className="text-green-500 font-bold">Status: Normal</p>}
              {bmi > 25 && bmi < 39.9 && <p className="text-orange-500 font-bold">Status: Overweight</p>}
              {bmi >= 40 && <p className="text-red-500 font-bold">Status: Obese</p>}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Calculator;
