import React, {Fragment} from 'react';
import Trapeador from '../img/Trapeador-Good.png'
import Tarjeta from '../img/Tarjeta.png';
import Cama from '../img/Cama.png'

const Funciona = () => {
    return ( 
        <Fragment>
            <div className="row mt-4">
                <div className="col s-12">
                    <h3 className="tamaño-subtitulo text-center"><strong>¿Cómo funciona?</strong></h3>
                </div>
            </div>

            <div className="row mt-3">
                
                
                <div className="col s-12">
                    
                    
                    <div className="text-center">
                        <img src={Trapeador} className="img-fluid" width="220" height="220"></img>
                    </div>


                    <div className="text-center mt-3">
                        <h4 className="tamaño-funciona"><strong>1. Solicita</strong></h4> 
                        <p className="tamaño-texto-funcionamiento">Selecciona el dia y hora de tu servicio</p>
                    </div>
                    

                </div>

                <div className="col s-12">
                    <div className="text-center">
                        <img src={Tarjeta} className="img-fluid" width="220" height="220"></img>
                    </div>
                    <div className="text-center mt-3">
                        <h4 className="tamaño-funciona"><strong>2. Paga</strong></h4> 
                        <p className="tamaño-texto-funcionamiento">Con tarjeta, paypal, oxxo</p>
                    </div>
                </div>

                <div className="col s-12">
                    <div className="text-center">
                        <img src={Cama} className="img-fluid" width="220" height="220"></img>
                    </div>
                    <div className="text-center mt-3">
                        <h4 className="tamaño-funciona"><strong>3. Disfruta</strong></h4> 
                        <p className="tamaño-texto-funcionamiento">Tu casa estara totalmente limpia.</p>
                    </div>
                </div>
            </div>

        </Fragment>
        

     );
}
 
export default Funciona;