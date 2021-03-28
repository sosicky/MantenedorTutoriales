import React, { Component } from 'react';
import Tabla from './Tabla'

class Resultado extends Component {
    mostrarRegistros = () =>{
        const registros = this.props.registros
        
        if (registros.lenght === 0) return null;

        return(
            <React.Fragment>
                <div className="col-12">
                    {registros.map(registro =>(
                        <Tabla
                            key={registro.id}
                            resgistro={registro}
                        />
                    ))}
                </div>
            </React.Fragment>
        )
    }

    render() {
        return (
            <React.Fragment>
                {this.mostrarRegistros()}
            </React.Fragment>
        );
    }
}

export default Resultado;