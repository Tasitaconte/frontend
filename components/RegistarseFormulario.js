const RegistrarseFormulario = async () => {
return`
<div class="modal fade " id="registerModal" tabindex="-1" aria-labelledby="registerModalLabel" aria-hidden="true">
    <div class=" modal-dialog modal-sm modal-dialog-centered">
        <div class=" shadow modal-content  rounded-0">
            <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal"
                    aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form id="loginForm" class="">
                    <div class="form-floating mb-4">
                        <input type="nombre" id="nombre" class="rounded-0 form-control" placeholder="Email" required />
                        <label class="form-label" for="email">Nombre</label>
                    </div>

                    <div class="form-floating mb-4">
                        <input type="email" id="email" class="rounded-0 form-control" placeholder="Email" required />
                        <label class="form-label" for="email">Email address</label>
                    </div>

                    <div class="form-floating mb-4">
                        <input type="password" id="password" class="rounded-0 form-control" placeholder="Password"
                            required />
                        <label class="form-label" for="password">Password</label>
                    </div>

                    <div class="form-floating mb-4">
                        <input type="password" id="password" class="rounded-0 form-control" placeholder="Password"
                            required />
                        <label class="form-label" for="password">Repetir Contraseña</label>
                    </div>

                    <button type="button"
                        class="position-relative bottom-0 start-50 translate-middle-x rounded-0 btn btn-primary btn-block ">Iniciar
                        Sesión</button>
                </form>
            </div>
        </div>
    </div>
</div>`
};

export { RegistrarseFormulario };