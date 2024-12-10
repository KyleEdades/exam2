export default function Home() {
  return (
    <>
    Date: 12/9/2024
      <p className="text-black">
        Basketball is one of the most popular sports in the world. It was invented by Dr. James Naismith in 1891. The game has evolved over time and is now played by millions around the globe, including myself. It is one of my hobbies growing up.
      </p>
      <h1 className="m-4 text-red-400 text-center">List of my favorite NBA Players</h1>
      <h2 className="m-4 text-red-400">Basketball Player Statistics</h2>
      <table style={{ border: '1px solid black', width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th className="text-black">Player</th>
            <th className="text-black">Team</th>
            <th className="text-black">Points Per Game</th>
            <th className="text-black">Assists Per Game</th>
            <th className="text-black">Rebounds Per Game</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-black">LeBron James</td>
            <td className="text-black">Lakers</td>
            <td className="text-black">27.1</td>
            <td className="text-black">7.4</td>
            <td className="text-black">7.5</td>
          </tr>
          <tr>
            <td className="text-black">Chris Paul</td>
            <td className="text-black">Spurs</td>
            <td className="text-black">17.5</td>
            <td className="text-black">9.4</td>
            <td className="text-black">4.5</td>
          </tr>
          <tr>
            <td className="text-black">Stephen Curry</td>
            <td className="text-black">Warriors</td>
            <td className="text-black">24.8</td>
            <td className="text-black">6.4</td>
            <td className="text-black">4.7</td>
          </tr>
          <tr>
            <td className="text-black">Shaquille ONeal *</td>
            <td className="text-black">Boston</td>
            <td className="text-black">23.7</td>
            <td className="text-black">2.5</td>
            <td className="text-black">10.9</td>
          </tr>
          <tr>
            <td className="text-black">Kevin Durant</td>
            <td className="text-black">Suns</td>
            <td className="text-black">27.3</td>
            <td className="text-black">4.4</td>
            <td className="text-black">7.0</td>
          </tr>
        </tbody>
      </table>
      <p className="text-red-400">* Retired NBA Player</p>
    </>
  );
}
