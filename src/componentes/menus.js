
// Gestión del localstorage
export const ls = {
  // Captuar datos de localStorage
  getUsuario: () => {
    // Definimos usuario anónimo por si no hay datos en localstorage
    let usuario = {
      email: "anónimo",
      rol: "registrado",
      avatar: "",
    };
    // Capturamos datos de localstorage
    const usuarioJSON = localStorage.getItem("usuarioVanilla");
    // Si hay un usuario logueado actualizamos usuario, sino devolvemos usuario anónimo
    if (usuarioJSON) {
      // Parseamos datos de localstorage
      usuario = JSON.parse(usuarioJSON);
    }
    return usuario;
  },
  setUsuario: (usuario) => {
    // Convertir el objeto a una cadena JSON
    const usuarioJSON = JSON.stringify(usuario);
    // Guardar en localStorage
    localStorage.setItem("usuarioVanilla", usuarioJSON);
  },
};

const menuRol = {
  // html
  templateAnonimo: //html 
  `
    <ul class="navbar-nav ms-auto me-2 mb-2 mb-lg-0">
      <li class="nav-item">
        <a class="ms-2 btn btn-success router-link" href="#/login" >
          Iniciar sesión
          <i class="bi bi-box-arrow-in-right"></i>
        </a>
      </li>
      <li class="nav-item">
        <a class="ms-2 btn btn-outline-light router-link" href="#/registro">
          Regístrate
          <i class="bi bi-box-arrow-in-right"></i>
        </a>
      </li>
    </ul>
    `,
  // html
  templateRegistrado: //html
  `
    <ul class="navbar-nav ms-auto me-2 mb-2 mb-lg-0">
      <li class="nav-item">
        <a class="nav-link active router-link" aria-current="page" href="#/proyectos">PROYECTOS</a>
      </li>
      
    </ul>
    `,
  // html
  templateDesarrollador: ``,
  // html
  templateAdmin: ``,
};

const menuUsuario = {
  // html
  templateRegistrado: //html
  `
    <ul class="navbar-nav ms-auto me-2 mb-2 mb-lg-0">
      <li class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img src="images/avatar.svg" alt="" width="25" />
        </a>
        <ul class="dropdown-menu me-0" style="left: -100px; width: 100px">
          <li class="text-light text-end p-2 small">
            ${ls.getUsuario().email}
          </li>
          <li class="text-light text-end pe-2 small fst-italic">
            ${ls.getUsuario().rol}
          </li>
          <li><hr class="dropdown-divider" /></li>
          <li>
      <a 
        class="dropdown-item" 
        href="#"
        data-bs-toggle="modal"
        data-bs-target="#modalEditarPerfil"
        >
        Mi perfil
      </a>
    </li>
          <li><hr class="dropdown-divider" /></li>
          <<li><a class="dropdown-item cerrarSesion" href="#">Cerrar sesión</a></li>
        </ul>
      </li>
    </ul>
    `,
  // html
  templateDesarrollador: ``,
  // html
  templateAdmin: ``,
};

export { menuRol, menuUsuario };
