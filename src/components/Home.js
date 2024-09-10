
function Home(){
  return (
      <>
      <div className="container mt-5">
      <h2 className="text-center">TODO-LIST</h2>
      <form>
      <div className="mb-3">
        <label htmlFor="todoname" className="form-label">
          Todo Name
        </label>
        <input className="form-control" id="todoname" />
        <div id="todo" className="form-text">
          Fill todo name.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="todoname" className="form-label">
          Todo Description
        </label>
        <input className="form-control" id="tododescription" />
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label" htmlFor="priority">
          Priority Status
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Send
      </button>
    </form>      
    </div>  
    </>
  );
}

export default Home;

