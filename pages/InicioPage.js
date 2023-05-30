import { IniciarSesionForm } from "../components/IniciarSesionFormulario.js";
import { RegistrarseFormulario } from "../components/RegistarseFormulario.js";

const inicioPage = async () => {
const index = `
<div class="container">
    <h2 class="text-center">BIENVENIDO</h2>
    <div class="p-5 m-2 " style="text-align: justify;">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus veniam placeat nemo laudantium, esse
            voluptatum facere! Tempora necessitatibus aspernatur dicta impedit eum, delectus cum explicabo repellat.
            Quibusdam corrupti nam cupiditate?
            Esse natus, possimus debitis tempora veniam ipsa corrupti quidem quis inventore accusantium impedit tempore
            pariatur reiciendis, velit, dicta laborum sunt perferendis culpa. Possimus praesentium beatae, minus
            voluptatum illo nobis vitae.
            Et a corporis sed iure, consequatur magnam. Vero quis quasi libero sint nihil perferendis ipsa! Doloribus,
            quas vel. At cupiditate error voluptatum quis reprehenderit repudiandae itaque. Non doloribus corporis
            aliquam!
            Distinctio ipsa, nam consequatur dolor aut assumenda quis dolorum, error magnam quae perferendis harum
            doloribus ab. Blanditiis, dolorum nihil incidunt perferendis, adipisci illo quaerat nulla officia, neque
            laudantium ullam velit?
            Fugit libero doloremque hic nisi delectus iusto temporibus a ipsum sed. Est vero voluptate aliquid soluta
            vitae autem optio esse mollitia harum fuga dolore, molestias, maxime voluptatum. Maiores, sequi eius.
            Beatae explicabo minima, ullam quidem corrupti quam atque rerum perspiciatis quas vel, aut non aliquam id,
            impedit similique qui cum eum recusandae optio! Omnis repellat ea ab. Est, veniam dicta!
            Sunt eaque autem blanditiis sequi repellat velit fugit, non dolorum quaerat similique rem harum enim? Velit
            atque consequatur esse inventore dolorum autem quae sequi aut officiis, quos fuga vel exercitationem!
            Dolor porro, aperiam sapiente odio esse molestias in magnam explicabo tenetur ratione ut fuga maxime
            voluptas itaque dolore beatae fugiat id aliquam eveniet! Quia hic, nostrum voluptate doloremque odit est.
            A natus nihil odio facere corporis corrupti sint, adipisci eum rem alias dolores quidem odit autem quod, nam
            quo? Neque necessitatibus, tempore molestiae animi nam illum labore veritatis cum nihil.
            Quas nostrum dolores laborum facilis excepturi aspernatur optio autem, suscipit sequi, voluptates quasi
            mollitia nihil doloremque eligendi? Tempora omnis perspiciatis assumenda nostrum, animi amet maxime
            excepturi, in culpa voluptate atque.</p>
    </div>
</div>
`
const login = await IniciarSesionForm()
const register = await RegistrarseFormulario()
return index + login + register;
}

export { inicioPage };