export default function Page() {
    return (
      <>
      <h1 className="text-3xl">Final Exam</h1>
      <form>
        <label htmlFor="product">Product Description</label>
        <input type="text" name="product" id="product" className="m-5 text-yellow bg-black-400"/>
        <br />
        <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Save     
        </button>
      </form>
      </>
    );
  }
  