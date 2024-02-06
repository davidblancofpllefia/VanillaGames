export default {
    template: // html
    `

            <div class="container">
                <h1 class="mt-5">Detalle del proyecto</h1>
                <div class="d-flex justify-content-end">
                    <bottom class="btn btn-outline-secondary mt-5">
                        <i class="bi bi-arrow-bar-left" style="font-size: 1em;"></i>
                        Volver</bottom>
                </div>
                
                <div class="row mt-2">
                    <div class="col-12 col-md-4 mb-3">
                        <img src=".images/juego.jpg" alt="" class="img-fluid">
                    </div>
                    <div class="col-12 col-md-8">
                        <p>
                            <p><strong>Nombre: </strong><span id="nombre">TETRIS</span></p>
                            <p><strong>Descripción: </strong><span id="nombre">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam modi dicta iste debitis recusandae perspiciatis quae. Eius impedit saepe autem velit voluptate, odio sequi expedita nisi est molestiae quo quisquam!</span></p>
                            <p><strong>Estado: </strong><span id="nombre">Estado</span></p>
                            <p><strong>Fecha: </strong><span id="nombre">12/12/2023</span></p>
                            <p><strong>Enlace: </strong><span id="nombre">http://www.enlaceapp.com</span></p>
                            <p><strong>Repositorio: </strong><span id="nombre">carrebola.github.com/123456</span></p>
                        </p>
                    </div>
                </div>
                <div
                    class="container fixed-bottom d-flex justify-content-end"
                    style="padding: 0px 0px 100px 0px"
                >
                    <button
                        class="btn btn-success rounded-circle fs-3 shadow"
                        style="width: 50px"
                    >
                        <i class="bi bi-pencil"></i>
                    </button>
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
`
}
