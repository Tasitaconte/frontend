const IniciarSesionForm = async () => {
return `
<div class="modal fade " id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-sm modal-dialog-centered">
        <div class="modal-content rounded-0">
            <div class="modal-header border-0">
                <h1 class="modal-title fs-5">BIENVENIDO</h1>
                <button type="button" class="btn-close " data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form id="loginForm" class="">
                    <div class="form-floating mb-4">
                        <input type="email" id="form2Example1" class="  rounded-0 form-control" placeholder="Email"
                            required />
                        <label class="form-label" for="form2Example1">Correo Electronico</label>
                    </div>

                    <div class="form-floating mb-4">
                        <input type="password" id="form2Example2" class="rounded-0 form-control" placeholder="Password"
                            required />
                        <label class="form-label" for="form2Example2">Password</label>
                    </div>

                    <button type="button"
                        class="position-relative bottom-0 start-50 translate-middle-x rounded-0 btn btn-primary btn-block ">Iniciar
                        Sesión</button>
                </form>
            </div>
        </div>
    </div>
</div>
`
}

export {IniciarSesionForm};