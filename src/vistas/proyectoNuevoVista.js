export default {
    template: // html
    `
            <div class="container">
                <h1 class="mt-5">Nuevo proyecto</h1>
                <div class="d-flex justify-content-end">
                    <bottom class="btn btn-outline-secondary mt-5">
                        <i class="bi bi-arrow-bar-left" style="font-size: 1em"></i>
                        Volver</bottom
                    >
                </div>

                <div class="row mt-2">
                    <div class="col-12 col-md-4 pt-2 mb-3">
                        <img src=".images/juego.jpg" alt="" class="img-fluid" />
                    </div>
                    <div class="col-12 col-md-8">
                        <form action="" class="form">
                            <label class="form-label" for="nombre"><strong>Nombre: </strong></label>
                            <input id="nombre" type="text" value="Nombre Autor" class="form-control" />

                            <label class="form-label mt-2" for="descripcion"
                                ><strong>Descripción: </strong></label
                            >
                            <textarea id="descripcion" class="form-control" rows="4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, sunt? Recusandae labore at voluptatem tempore incidunt distinctio eaque? Est aspernatur laudantium itaque ullam numquam autem dolor quia amet eum consectetur.</textarea>
                            <label class="form-label mt-2" for="estado"><strong>Estado: </strong></label>
                            <select id="estado" class="form-control">
                                <option value="estado">estado</option>
                                <option value="otro estado">otro estado</option>
                            </select>
                            <label class="form-label mt-2" for="fecha"><strong>Fecha: </strong></label>
                            <input id="fecha" type="date" class="form-control" value="12/12/2023"/>
                            <label class="form-label mt-2" for="nombre"><strong>Enlace: </strong></label>
                            <input id="enlace" type="text" class="form-control" value="http://enlace.com" />
                            <label class="form-label mt-2" for="nombre"
                                ><strong>Repositorio: </strong></label
                            >
                            <input id="repositorio" type="text" class="form-control" value="user.github.com/123456" />
                            <input type="submit" class="btn btn-success mt-3" value="Subir proyecto">
                        </form>
                    </div>
                </div>
                
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
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
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