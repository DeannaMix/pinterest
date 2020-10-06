const navbar = () => {
  $('#nav').html(
    `<nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light" style="background-color: #8499B1;">
    <a class="navbar-brand" href="#">Barky Pinterest</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
    aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
    <li class="nav-item mx-3"  id="users-link">
      <a class="nav-link" href="#"><i class="fas fa-dog"></i> Users</a>
    </li>
    <li class="nav-item mx-3" id="boards-link">
      <a class="nav-link" href="#"><i class="far fa-"></i><i class="fas fa-bone"></i> Boards</a>
    </li>
    <li class="nav-item mx-3" id="add-board-link">
      <a class="nav-link" href="#"><i class="fas fa-plus-circle"></i> Add A Board</a>
    </li>
  </ul>
      <ul class="navbar-nav ml-auto">
        <li class="user-info-nav">
          Welcome,!
        </li>
        <li class="nav-item">
          <button class="nav-link btn btn-link p-2" id="nav-logout-btn">Logout</button>
        </li>
      </ul>
    </div>
  </nav>`
  );
};

export default { navbar };
