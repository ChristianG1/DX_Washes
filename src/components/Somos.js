import React, {Fragment} from 'react';
import Imagen from '../img/limpieza2.jpg'

const Somos = () => {
    return ( 
        <Fragment>
            <div className="row mt-4">
                <div className="col sm-12">
                    <h2 className="tamaño-titulo"><strong>"Somos los más<br />chidos"</strong></h2>
                    <p className="tamaño-texto">
                        <span className="blue">Somos una empresa totalmente mexicana</span><br/>
                        Estamos preocupados por todas las familias de los mexicanos y de las mexicanas, 
                        así que queremos que tu casa rechine de limpia para exterminar todo tipo de virus.
                        <ul>
                            <li>Hecho con amor de México.</li>
                            <li>Trabajamos mediante los protocolos de la OMS</li>
                            <li>Todos nuestros servicios cuentan con aseguramiento.</li>
                        </ul>
                    </p>

                </div>

                <div className="col sm-12">
                   <img src={Imagen} className="img-thumbnail border-radius img-fluid hvr-grow" />
                </div>
            </div>
        </Fragment>
        
     );
}
 
export default Somos;