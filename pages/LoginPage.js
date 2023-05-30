const loginPage = () => {
return `
<section class="login">
    <div class="form-container">
        <img class="logo" src="/assets/images/logoSipra.png" alt="Logo">
        <form action="" class="form">
            <label for="email" class="label">Correo:</label>
            <input type="email" id="email" placeholder="email@fesc.edu.co" class="input input-email" required>

            <label for="email" class="label">Contraseña:</label>
            <input type="password" id="password" class="input input-password" required>

            <a href="#" style="cursor:pointer;">¿Olvidaste tu contraseña?</a><br>
            <label for="rol" class="rol">
                <select id="rol" name="rol" style="cursor: pointer;">
                    <option value="0">Seleccione un rol</option>
                    <option value="extension">Extensión</option>
                    <option value="docente">Docente</option>
                    <option value="estudiante">Estudiante</option>
                </select>
            </label><br>
            <input type="submit" value="Ingresar" class="primary-btn btn-login" required>
        </form>
        <button class="secondary-btn signup-btn">Registrarse</button>
    </div>
</section>
<div class="modal-container">
    <div class="modal modal-close">
        <p class="close">X</p>
        <img src="./assets/images/logoSipra.png" alt="">
        <div class="modal-textos">
            <h2>get premium</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aliquam voluptatem in, corporis eveniet qui
                aspernatur dolores quo architecto, esse, ex fugiat nostrum vitae nihil. Earum sequi rem ratione dolorum.
            </p>
        </div>
    </div>
</div>
`
}
export { loginPage };