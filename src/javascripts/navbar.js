const navbar = () => {
  $('#nav').html(
    `<nav class="navbar fixed-top navbar-light" style="background-color: #8499B1;">
        <span class="navbar-brand mb-0 h1" style="color: #DBCFB0;">Welcome to Pinterest</span>
        <button type="button" class="nav-link btn btn-link" id="nav-logout-btn">Logout</button>
      </nav>`
  );
};

export default { navbar };
