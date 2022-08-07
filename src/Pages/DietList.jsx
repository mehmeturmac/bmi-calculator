import React from 'react';

function DietList() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="p-6 md:space-x-10">
        <h1 className="text-3xl leading-10 font-bold">Weight Loss Diet Plan Chart</h1>
        <ul className="list-disc py-1 indent-4 px-10 mt-3">
          <li>After starting your day with cucumber water, have oats porridge and mixed nuts for breakfast.</li>
          <li>Next, have a roti with dal and gajar matar sabzi for lunch.</li>
          <li>Follow that up with dal and lauki sabzi along with a roti for dinner.</li>
        </ul>
        <div className="overflow-x-auto relative mt-3">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-800 uppercase bg-[palevioletred]/60 border border-[palevioletred]/60">
              <tr>
                <th scope="col" className="py-1 px-6"></th>
                <th scope="col" className="py-1 px-6">
                  Diet Chart
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border border-[palevioletred]/60">
                <th scope="row" className="py-2 px-6">
                  6:30 AM
                </th>
                <td className="py-2 px-6">Cucumber Detox Water (1 glass)</td>
              </tr>
              <tr className="bg-white border border-[palevioletred]/60">
                <th scope="row" className="py-2 px-6">
                  8:00 AM
                </th>
                <td className="py-2 px-6">Oats Porridge in Skimmed Milk (1 bowl) + Mixed Nuts (25 grams)</td>
              </tr>
              <tr className="bg-white border border-[palevioletred]/60">
                <th scope="row" className="py-2 px-6">
                  12:00 PM
                </th>
                <td className="py-2 px-6">Skimmed Milk Paneer (100 grams)</td>
              </tr>
              <tr className="bg-white border border-[palevioletred]/60">
                <th scope="row" className="py-2 px-6">
                  2:00 PM
                </th>
                <td className="py-2 px-6">Mixed Vegetable Salad (1 katori)</td>
              </tr>
              <tr className="bg-white border border-[palevioletred]/60">
                <th scope="row" className="py-2 px-6">
                  2:10 PM
                </th>
                <td className="py-2 px-6">Dal(1 katori) + Gajar Matar Sabzi (1 katori) + Roti (1 roti/chapati)</td>
              </tr>
              <tr className="bg-white border border-[palevioletred]/60">
                <th scope="row" className="py-2 px-6">
                  4:00 PM
                </th>
                <td className="py-2 px-6">Cut Fruits (1 cup) + Buttermilk (1 glass)</td>
              </tr>
              <tr className="bg-white border border-[palevioletred]/60">
                <th scope="row" className="py-2 px-6">
                  5:30 PM
                </th>
                <td className="py-2 px-6">Tea with Less Sugar and Milk (1 teacup)</td>
              </tr>
              <tr className="bg-white border border-[palevioletred]/60">
                <th scope="row" className="py-2 px-6">
                  8:50 PM
                </th>
                <td className="py-2 px-6">Mixed Vegetable Salad (1 katori)</td>
              </tr>
              <tr className="bg-white border border-[palevioletred]/60">
                <th scope="row" className="py-2 px-6">
                  9:00 PM
                </th>
                <td className="py-2 px-6">Dal (1 katori) + Lauki Sabzi (1 katori) + Roti (1 roti/chapati)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="p-6 md:space-x-10">
        <h1 className="text-3xl leading-10 font-bold">Weight Gain Diet Plan Chart</h1>
        <div className="overflow-x-auto relative mt-3">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-800 uppercase bg-[palevioletred]/60 border border-[palevioletred]/60">
              <tr>
                <th scope="col" className="py-1 px-6"></th>
                <th scope="col" className="py-1 px-6">
                  Diet Chart
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border border-[palevioletred]/60">
                <th scope="row" className="py-2 px-6">
                  8:00 AM
                </th>
                <td className="py-2 px-6">2 egg brown bread sandwich + green chutney + 1 cup milk + 3 cashews + 4 almonds + 2 walnuts</td>
              </tr>
              <tr className="bg-white border border-[palevioletred]/60">
                <th scope="row" className="py-2 px-6">
                  11:00 AM
                </th>
                <td className="py-2 px-6">1 cup banana shake</td>
              </tr>
              <tr className="bg-white border border-[palevioletred]/60">
                <th scope="row" className="py-2 px-6">
                  2:00 PM
                </th>
                <td className="py-2 px-6">1 cup arhar dal + 1 cup potato curry + 3 chapatti + 1/2 cup rice + 1/2 cup low fat curd + salad</td>
              </tr>
              <tr className="bg-white border border-[palevioletred]/60">
                <th scope="row" className="py-2 px-6">
                  4:00 PM
                </th>
                <td className="py-2 px-6">1 cup strawberry smoothie + 1 cup vegetable poha</td>
              </tr>
              <tr className="bg-white border border-[palevioletred]/60">
                <th scope="row" className="py-2 px-6">
                  8:00 PM
                </th>
                <td className="py-2 px-6">1.5 cup chicken curry + 3 chapatti + salad</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DietList;
