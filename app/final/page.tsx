export default function Page() {
    return (
      <>
      <h1 className="text-3xl ml-5">Final Exam</h1>
      <form>
        <label htmlFor="product" className="ml-5">Team Name</label>
        <input type="text" name="product" id="product" className="m-5 text-black bg-yellow-400"/>
        <br />
        <label htmlFor="players" className="mx-5">Choose a Player: </label>
      <select name="players" id="players">
      <option value="LeBron James">LeBron James</option>
      <option value="Chris Paul">Chris Paul</option>
      <option value="Stephen Curry">Stephen Curry</option>
      <option value="Shaquille ONeal">Shaquille ONeal</option>
      <option value="Kevin Durant">Kevin Durant</option>
        </select>

        <br />

        <div className="ml-5 mt-5">
        <input type="radio" id="ppg" name="fav_language" value="PPG" />
        <label htmlFor="PPG">PPG</label><br />
        <input type="radio" id="apg" name="fav_language" value="APG" />
        <label htmlFor="APG">APG</label><br />
        <input type="radio" id="rpg" name="fav_language" value="RPG" />
        <label htmlFor="RPG">RPG</label>
        </div>

        <div className="ml-5 mt-5">
        <input type="checkbox" id="player1" name="player1" value="Assist" />
        <label htmlFor="player1"> Assist Per Game</label><br />
        <input type="checkbox" id="player2" name="player2" value="Points" />
        <label htmlFor="player2"> Points Per Game</label><br />
        <input type="checkbox" id="player3" name="player3" value="Rebounds" />
        <label htmlFor="player3"> Rebounds Per Game</label><br />
        </div>

        <br />

        <button className="ml-10 focus:outline-none text-black bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" type="submit">Save</button>
      </form>
      </>
    );
  }

