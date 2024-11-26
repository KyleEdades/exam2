export default function Page() {
  return (
    <div className="mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h2>

      <div className="bg-white p-6 rounded-lg mb-4">
        <h3 className="text-xl font-semibold text-blue-600">Q: Who is the greatest NBA player of all time?</h3>
        <p className=" text-gray-700">
          The greatest NBA player of all time is <strong>LeBron James</strong>, thanks to his longevity, versatility, and all-around game.
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg mb-4">
        <h3 className="text-xl font-semibold text-blue-600">Q: What is the NBA draft and how does it work?</h3>
        <p className=" text-gray-700">
          The <strong>NBA Draft</strong> is an annual event where NBA teams select eligible players to join the league. Players are typically selected from college basketball or international leagues. Teams select players in reverse order of their regular-season standings, with the worst-performing teams getting the first picks. There are two rounds in the draft, and each team has one pick per round (with potential trades affecting picks).
        </p>
      </div>
    </div>
  );
}