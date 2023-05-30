const extencionPage = () =>{
return `
<div class="container">
    <div class="dropdown">
        <div id="myDropdown" class="dropdown-content">
            <button type="submit" href="#"><span class="icon">&#128682;</span>Cerrar sesión</button>
        </div>
    </div>
    <section class="derecha">
        <h4>Seguimiento Al Estudiante</h4>
        <label for="">Buscar Por Numero de Documento</label><br>
        <input type="number" id="buscar"><br><br>
        <button type="submit" value="Buscar" class="">Buscar</button><br><br>
        <button type="submit" value="Ver Lista Completa" class="botonListaEst">Ver Lista De Estudiantes</button>
    </section>
    <section class="izquierda">
        <h4>Seguimiento Al Docente</h4>
        <label for="">Buscar Por Numero de Documento</label><br>
        <input type="number" id="buscar" required><br><br>
        <button type="submit" value="Buscar" class="">Buscar</button><br><br>
        <button type="submit" value="Ver Lista Completa" class="botonListaDoc">Ver Lista De Docentes</button>
    </section>
    <section class="modal4">
        <div class="modal4__container">
            <h1 class="titulo__modal4">Lista de Estudiantes</h1><br>
            <section>
                <div class="container">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Dni</th>
                                <th>Apellidos</th>
                                <th>Nombre</th>
                                <th>Correo</th>
                                <th>Programa</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1093792</td>
                                <td>Thomas</td>
                                <td>Rodriguez</td>
                                <td>johndoe@example.com</td>
                                <td>Software</td>
                                <td>
                                    <button id="ver" class="btn btn-success"><i class="fas fa-eye"></i></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
            <button type="submit" class="modal4__close" href="#">Cerrar Ventana</button>
        </div>
    </section>
    <section class="modal5">
        <div class="modal5__container">
            <h1 class="titulo__modal5">Lista de Docentes</h1><br>
            <section>
                <div class="container">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Dni</th>
                                <th>Apellidos</th>
                                <th>Nombre</th>
                                <th>Correo</th>
                                <th>Estudiantes</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>12345678</td>
                                <td>Doe</td>
                                <td>John</td>
                                <td>johndoe@example.com</td>
                                <td>5</td>
                                <td>
                                    <button id="ver" class="btn btn-success1"><i class="fas fa-eye"></i></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
            <button type="submit" class="modal5__close" href="#">Cerrar Ventana</button>
        </div>
    </section>
    <section class="modal3">
        <div class="modal3__container">
            <h1 class="titulo__modal3">Perfil Del Estudiante</h1>

            <label for="nombre" class="labelm3">Nombres:</label>
            <label for="nombre" class="labelm3">Apellidos:</label>
            <label for="nombre" class="labelm3">Numero de cedula:</label>
            <label for="nombre" class="labelm3">Programa:</label>
            <label for="nombre" class="labelm3">Avance:</label>
            <div class="progress">
                <div class="progress-bar" id="myProgressBar"></div>
            </div>
            <button type="submit" class="modal3__close" href="#">Cerrar Ventana</button>
        </div>
    </section>
    <section class="modal6">
        <div class="modal6__container">
            <h1 class="titulo__modal6">Perfil Del Docente</h1>

            <label for="nombre" class="labelm3">Nombres:</label>
            <label for="nombre" class="labelm3">Apellidos:</label>
            <label for="nombre" class="labelm3">Numero de cedula:</label>

            <button type="submit" class="modal6__close" href="#">Cerrar Ventana</button>
        </div>
    </section>
</div>


`
}
export {extencionPage};