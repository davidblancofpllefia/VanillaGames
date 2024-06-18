export default {
    template: // html
    `


            <!-- VEntana edición perfil -->

            <!-- Modal -->
            <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
            <!-- Formulario de edición de perfil -->
                <form action="">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">
                                    Edición de perfil
                                </h1>
                                <button
                                    type="button"
                                    class="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div class="modal-body">
                                <div class="form border shadow-sm p-3">
                                    <div class="m-1" style="max-width: 400px">
                                        <div class="imgPerfil border shadow-sm p-3 mb-3">
                                            <div
                                                class="imagen mx-auto mb-1 rounded-circle"
                                                style="
                                                    background-image: url(.images/avatar.svg);
                                                    width: 200px;
                                                    height: 200px;
                                                    background-size: cover;
                                                    background-position: center;
                                                "
                                            ></div>
                                            
                                            <!-- Imagen de perfil -->
                                            <label for="imagen" class="form-label mt-3">URL imagen:</label>
                                            <input
                                                id="imagen"
                                                type="url"
                                                class="form-control"
                                                value="http://imagenavatar.png"
                                            />
                                        </div>

                                        <div class="">
                                            
                                            <!-- Nombre -->
                                            <label for="nombre" class="form-label">Nombre:</label>
                                            <input required id="nombre" type="text" class="form-control" />
                                            
                                            <!-- Apellidos -->
                                            <label for="apellidos" class="form-label">Apellidos:</label>
                                            <input id="apellidos" type="text" class="form-control" />
                                            
                                            <!-- Email -->
                                            <label for="email" class="form-label">Email:</label>
                                            <input required id="email" type="email" class="form-control" />
                                            
                                            <!-- Contraseña -->
                                            <label for="pass" class="form-label mt-3">Contraseña:</label>
                                            <input required id="pass" type="password" class="form-control" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                                    Cancelar
                                </button>
                                <button type="button" class="btn btn-primary">Guardar cambios</button>
                            </div>
                        </div>
                    </div>
                </form>

            </div>
        </header>
        <main>
            <div class="container">
                <h1 class="mt-5">Modal para editar perfil en header</h1>
                <!-- Button trigger modal -->
                <button
                    type="button"
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                >
                    Launch demo modal
                </button>
            </div>
        </main>
        <footer class="">
            <nav class="navbar bg-secondary fixed-bottom small">
                <div class="container">
                    <a class="navbar-brand" href="http://www.fpllefia.com">
                        <img
                            src=".images/logo.svg"
                            alt="fpllefia"
                            width="30"
                            height="24"
                            class="d-inline-block align-text-top"
                        />
                        FPLlefià
                    </a>
                    <span class="navbar-text">@Texto de header</span>
                    <a href="#" class="nav-link">Vínculo header</a>
                </div>
            </nav>
        </footer>

        <!-- Option 1: Bootstrap Bundle with Popper -->

        <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
            crossorigin="anonymous"
        ></script>
    </body>
</html>


    `,
    script: () => {
        console.log('vista registro cargada')
        // Validación bootstrap
    
        // Capturamos el formulario en una variable
        const formulario = document.querySelector('#formRegistro')
        // Detectamos su evento submit (enviar)
        formulario.addEventListener('submit', (event) => {
          // Detenemos el evento enviar (submit)
            event.preventDefault()
            event.stopPropagation()
        // Comprobamos si el formulario no valida
          if (!formulario.checkValidity()) {
            // Y añadimos la clase 'was-validate' para que se muestren los mensajes
            formulario.classList.add('was-validated')
          }
        })
      }
    }