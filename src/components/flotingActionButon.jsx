

export default  function FloatingActionButon (){
   return(
    // <div className="position-sticky">
    <div className="dropup position-sticky bottom-0 end-0 rounded-circle ">
  <button
    type="button"
    className="btn btn-success btn-lg dropdown-toggle hide-toggle"
    data-bs-toggle="dropdown"
    aria-expanded="false"
    aria-haspopup="true"
  >
    <i className="fa-solid fa-plus" />
    <span className="visually">Add Category</span>
  </button>
  <ul className="dropdown-menu">
    <li>
      <a className="dropdown-item" href="#">
        One
      </a>
      <a className="dropdown-item" href="#">
        Two
      </a>
      <a className="dropdown-item" href="#">
        Three
      </a>
    </li>
  </ul>
</div>
// </div>
   )
}