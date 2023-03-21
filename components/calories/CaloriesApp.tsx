import { useState } from 'react';
import AppWindowWrapper from '../utility/AppWindowWrapper';

const CaloriesApp = () => {
  const [calories, setCalories] = useState('');
  const [gender, setGender] = useState('');
  const [activity, setActivity] = useState('sedentary_active');
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const age = (
      e.currentTarget.childNodes[1].childNodes[1] as HTMLInputElement
    ).value;
    const height = (
      e.currentTarget.childNodes[2].childNodes[1] as HTMLInputElement
    ).value;
    const weight = (
      e.currentTarget.childNodes[3].childNodes[1] as HTMLInputElement
    ).value;
    if (age === '' || height === '' || weight === '') return;
    // Male
    if (gender === 'male') {
      const calculateCal =
        5 + 10 * Number(weight) + 6.25 * Number(height) - 5 * Number(age);
      if (activity === 'sedentary_active')
        setCalories(String(Math.round(calculateCal * 1.2)));
      if (activity === 'light_active')
        setCalories(String(Math.round(calculateCal * 1.375)));
      if (activity === 'moderate_active')
        setCalories(String(Math.round(calculateCal * 1.55)));
      if (activity === 'active_active')
        setCalories(String(Math.round(calculateCal * 1.725)));
      if (activity === 'very_active')
        setCalories(String(Math.round(calculateCal * 1.9)));
    }
    if (gender === 'female') {
      const calculateCal =
        10 * Number(weight) + 6.25 * Number(height) - 5 * Number(age) - 161;
      if (activity === 'sedentary_active')
        setCalories(String(Math.round(calculateCal * 1.2)));
      if (activity === 'light_active')
        setCalories(String(Math.round(calculateCal * 1.375)));
      if (activity === 'moderate_active')
        setCalories(String(Math.round(calculateCal * 1.55)));
      if (activity === 'active_active')
        setCalories(String(Math.round(calculateCal * 1.725)));
      if (activity === 'very_active')
        setCalories(String(Math.round(calculateCal * 1.9)));
    }
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGender(e.target.value);
  };
  const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setActivity(e.target.value);
  };
  return (
    <AppWindowWrapper>
      <form className="p-4 text-sm" onSubmit={handleSubmit}>
        <div>
          <label>Gender: </label>
          <input
            type="radio"
            name="gender"
            id="male"
            value="male"
            onChange={onChange}
          />
          <label htmlFor="male"> male </label>
          <input
            type="radio"
            name="gender"
            id="female"
            value="female"
            onChange={onChange}
          />
          <label htmlFor="female"> female</label>
        </div>
        <div>
          <label>Age: </label>
          <input type="number" className="calories-input" />
        </div>
        <div>
          <label>Height: </label>
          <input type="number" className="calories-input" placeholder="in cm" />
        </div>
        <div>
          <label>Weight: </label>
          <input type="number" className="calories-input" placeholder="in kg" />
        </div>
        <div>
          <label htmlFor="activities">Activity: </label>

          <select
            name="pets"
            id="activities"
            onChange={onSelectChange}
            className="calories-input"
          >
            <option value="sedentary_active">
              Sedentary (little or no exercise)
            </option>
            <option value="light_active">
              Lightly active (exercise 1-3 days/week)
            </option>
            <option value="moderate_active">
              Moderately active (exercise 3-5 days/week)
            </option>
            <option value="active_active">
              Active (exercise 6-7 days/week)
            </option>
            <option value="very_active">
              Very active (hard exercise 6-7 days/week)
            </option>
          </select>
        </div>
        <div className="text-center pb-2">
          <button className="bg-orange-600 hover:bg-orange-500 text-white text-md px-3  py-2 my-3 rounded transition duration-200  ">
            Calculate
          </button>
        </div>
        {calories && (
          <div className="flex justify-between">
            <div>
              <p>Loss Weight</p>
              <br />
              <div className="text-center">
                <p>{Number(calories) - 250} kcal</p>
                <p>{Number(calories) - 500} kcal</p>
                <p>{Number(calories) - 1000} kcal</p>
              </div>
            </div>
            <div className="text-center">
              <p>{calories} kcal</p>
              <br />
              <div className="text-center">
                <p>- 250g +</p>
                <p>- 500g +</p>
                <p>- 1000g +</p>
              </div>
            </div>
            <div>
              <p>Gain Weight</p>
              <br />
              <div className="text-center">
                <p>{Number(calories) + 250} kcal</p>
                <p>{Number(calories) + 500} kcal</p>
                <p>{Number(calories) + 1000} kcal</p>
              </div>
            </div>
          </div>
        )}
      </form>
    </AppWindowWrapper>
  );
};

export default CaloriesApp;
