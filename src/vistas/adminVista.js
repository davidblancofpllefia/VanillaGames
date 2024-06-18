export default {
    template: // html
    `
<div class="container-fluid">
<h1 class="mt-5">Panel de administración</h1>
<!-- tabs -->
<div class="row mt-5">
    <div class="col-12">
        <ul class="nav nav-tabs">
            <li class="nav-item w-50">
                <a class="nav-link" aria-current="page" href="#">Usuarios</a>
            </li>
            <li class="nav-item w-50">
                <a class="nav-link active" href="#">Proyectos</a>
            </li>
        </ul>
    </div>
</div>

<!-- tabla proyectos -->
<div class="border border-top-0 p-3">
    <!-- buscador -->
    <div class="row">
        <div class="d-flex col-12 col-md-6 mb-3">
            <div class="input-group flex-nowrap">
                <span class="input-group-text" id="addon-wrapping"
                    ><i class="bi bi-search"></i
                ></span>
                <input
                    type="text"
                    class="form-control"
                    placeholder="Buscador"
                    aria-label="Username"
                    aria-describedby="addon-wrapping"
                />
                <span class="input-group-text" id="addon-wrapping"
                    ><i class="bi bi-x"></i
                ></span>
            </div>
        </div>
    </div>

    <!-- tabla proyectos -->
    <div class="col-12" style="overflow-x: auto">
        <table
            class="table table-hover align-middle mt-3"
            style="min-width: 1000px"
        >
            <thead>
                <tr>
                    <th></th>
                    <th>
                        Nombre <span><i class="bi bi-caret-down"></i></span>
                    </th>
                    <th>
                        Descripción <span><i class="bi bi-caret-up"></i></span>
                    </th>
                    <th>
                        Enlace <span><i class="bi bi-caret-up"></i></span>
                    </th>
                    <th>Repositorio</th>
                    <th>
                        Autor <span><i class="bi bi-caret-up"></i></span>
                    </th>
                    <th>
                        Fecha <span><i class="bi bi-caret-up"></i></span>
                    </th>
                    <th>
                        Estado <span><i class="bi bi-caret-up"></i></span>
                    </th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>

            <tr>
                <td>
                    <div class="containerImagen">
                        <img width="200px" src="./images/juego.jpg" alt="" />
                    </div>
                </td>
                <td>Proyecto ejemplo 1</td>
                <td>Ejemplo de web para centro fp</td>
                <td><a href="http://www.fpllefia.con">http://www.fpllefia.con</a></td>
                <td><a href="#">carrebola.github.com/juego1</a></td>
                <td>carlos</td>
                <td>13/12/2021</td>
                <td>?</td>
                <td><i class="btn btn-outline-primary bi bi-pencil"></i></td>
                <td><i class="btn btn-outline-danger bi bi-trash3"></i></td>
            </tr>
            <tr>
                <td>
                    <div class="containerImagen">
                        <img width="200px" src="./images/juego.jpg" alt="" />
                    </div>
                </td>
                <td>Proyecto ejemplo 1</td>
                <td>Ejemplo de web para centro fp</td>
                <td><a href="http://www.fpllefia.con">http://www.fpllefia.con</a></td>
                <td><a href="#">carrebola.github.com/juego1</a></td>
                <td>carlos</td>
                <td>13/12/2021</td>
                <td>?</td>
                <td><i class="btn btn-outline-primary bi bi-pencil"></i></td>
                <td><i class="btn btn-outline-danger bi bi-trash3"></i></td>
            </tr>
            <tr>
                <td>
                    <div class="containerImagen">
                        <img width="200px" src="./images/juego.jpg" alt="" />
                    </div>
                </td>
                <td>Proyecto ejemplo 1</td>
                <td>Ejemplo de web para centro fp</td>
                <td><a href="http://www.fpllefia.con">http://www.fpllefia.con</a></td>
                <td><a href="#">carrebola.github.com/juego1</a></td>
                <td>carlos</td>
                <td>13/12/2021</td>
                <td>?</td>
                <td><i class="btn btn-outline-primary bi bi-pencil"></i></td>
                <td><i class="btn btn-outline-danger bi bi-trash3"></i></td>
            </tr>
        </table>
    </div>
</div>
</div>
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