import AppWindowWrapper from '../utility/AppWindowWrapper';

const CaloriesApp = () => {
  const handleSubmit = () => {
    console.log('submited');
  };
  return (
    <AppWindowWrapper>
      <form className="m-4 pt-4 text-center" onSubmit={handleSubmit}>
        <div>
          <label>Gender: </label>
          <input type="radio" name="gender" id="male" value="Male" />
          <label htmlFor="male"> male </label>
          <input type="radio" name="gender" id="female" value="Female" />
          <label htmlFor="female"> female</label>
        </div>
        <div>
          <label>Age: </label>
          <input type="text" className="calories-input" />
        </div>
        <div>
          <label>Height: </label>
          <input type="text" className="calories-input" placeholder="in cm" />
        </div>
        <div>
          <label>Weight: </label>
          <input type="text" className="calories-input" placeholder="in kg" />
        </div>
        <div>
          <label htmlFor="activities">Activity: </label>

          <select name="pets" id="activities">
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
        <div>
          <button className="bg-orange-600 hover:bg-orange-500 text-white text-md px-3  py-2 my-2 rounded transition duration-200  ">
            Calculate
          </button>
        </div>
        <div className="flex justify-between">
          <p>Loss Weight</p>
          <p>Maintain Weight</p>
          <p>Gain Weight</p>
        </div>
      </form>
    </AppWindowWrapper>
  );
};

export default CaloriesApp;
