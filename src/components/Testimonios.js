import React, {Fragment} from 'react';
import Imagen from '../img/fam_sonriendo.jpg'
import Imagen2 from '../img/Perrito.jpg'
import Imagen3 from '../img/Familia3.jpg'

const Testimonios = () => {
    return ( 
        <div className="row mt-4">
            <div className="col s12 mt-5">
                <div className="text-center mt-5"><br/><br/>
                    <h3 className="tamaño-subtitulo mt-2">
                        <strong><span className="blue">Contratanos</span> y disfruta más a tu familia y tus seres queridos</strong>
                    </h3>
                </div>
               
            </div>
            
            <div className="col s12">

                <div id="carouselExampleIndicators" className="carousel slide border-radius" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>

                    <div className="carousel-inner mb-4">
                        <div className="carousel-item active">
                            <img src={Imagen} className="d-block w-100 border-radius" alt="..."/>
                        </div>

                        <div className="carousel-item">
                            <img src={Imagen2} className="d-block w-100 border-radius" alt="..."/>
                        </div>

                        <div className="carousel-item">
                            <img src={Imagen3} className="d-block w-100 border-radius" alt="..."/>
                        </div>
                
                    </div>

                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>

                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            

                    
            </div>
        </div>

     );
}
 
export default Testimonios;