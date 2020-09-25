const navbar = () => {
  $('#nav').html(
    `<nav class="navbar fixed-top navbar-light" style="background-color: #8499B1;">
        <span class="navbar-brand mb-0 h1" style="color: #DBCFB0;">Welcome to Pinterest</span>
        <button class="navbar-toggler" type="button" data-toggle="collapse"
        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <button class="nav-link btn btn-outline-danger" id="navbar-logout-button">Logout</button>
            </li>
          </ul>
        </div>
      </nav>`
  );
};

export default { navbar };
