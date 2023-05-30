const RegistroPage = () => {
return `
<section class="login">
    <div class="form-container mt-5">
        <form action="" class=" form">

            <div class="container">
                <label for="nombre" class="label">Nombres:</label>
                <input type="text" name="" id="nombre" class="input input-nombre" required>

                <label for="nombre" class="label">Apellidos:</label>
                <input type="text" name="" id="apellido" class="input" required>

                <label for="tipocc" class="rolr">
                    <select id="tipocc" name="tipocc" style="cursor: pointer;" required>
                        <option value="0">Tipo de documento</option>
                        <option value="cc">Cedula de ciudadanía</option>
                        <option value="ti">Tarjeta de identidad</option>
                        <option value="ps">Pasaporte</option>
                        <option value="ppt">PPT</option>
                        <option value="ce">Cedula de extrangería</option>
                    </select>
                </label><br>

                <label for="numeroDocumento" class="label">Numero de documento:</label>
                <input type="number" name="" placeholder="1055******" id="mumeroDni" class="input input-nombre"
                    required>
                <br>
                <label for="correo" class="label">Correo:</label>
                <input type="email" name="" id="correoFesc" placeholder="correo@fesc.edu.co" class="input" required>

                <label for="programa" class="inputr2">
                    <select id="programa" name="programa" style="cursor: pointer;" required>
                        <option value="0">Seleciona tu carrera</option>
                        <option value="af">Admon Financiera</option>
                        <option value="gle">Gestion Logistica Empresarial</option>
                        <option value="ath">Admon Turistica y Hotelera</option>
                        <option value="ani">Admon Negocios Internacionales</option>
                        <option value="is">Ingeniria en Software</option>
                        <option value="dm">Diseño de Modas</option>
                        <option value="dg">Diseño Grafico</option>
                    </select>
                </label><br
                <label for="docente" class="inputr2">
                    <select id="docente" name="docente" style="cursor: pointer;" required>
                        <option value="0">Seleciona el docente</option>
                        <option value="rn">Rodolfo Niño</option>
                        <option value="mf">Michel Franco</option>
                        <option value="edd">Elder Dayan Diaz</option>
                        <option value="dd">Diomedes Diaz</option>
                        <option value="ñf">Ñengo Flow</option>
                    </select>
                </label><br>
                <label for="nombreEmpresa" class="labelr">Nombre de la empresa:</label>
                <input type="text" name="" id="nombreEmpresa" class="inputr" required>

                <label for="direccionEmpresa" class="labelr">Direccion de la empresa:</label>
                <input type="text" name="" id="direccionEmpresa" class="inputr" required>

                <label for="contactoJefe" class="labelr">Contacto jefe inmediato:</label>
                <input type="number" name="" id="contactoEmpresa" class="inputr" required>

                <input type="submit" value="Registrar" class="mt-2 primary-btn btn-login">
            </div>
        </form>
    </div>
</section>
`
}
export {RegistroPage};