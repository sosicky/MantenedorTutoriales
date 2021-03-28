import React, { Component } from 'react';

class Buscador extends Component {

    busquedaRef = React.createRef()

    obtenerTutoriales = (e) => {
        e.preventDefault();
        const termino = this.busquedaRef.current.value
        this.props.datosBuscador(termino);
    }

    render() {
        return (
            <form onSubmit={this.obtenerTutoriales}>
                <div className="row">
                    <div className="form-group col-md-6">
                        <input ref={this.busquedaRef} type="text" className="form-control form-control-lg" 
                        placeholder="Buscar por título" />
                    </div>
                    <div className="form-group col-md-2">
                        <input type="submit" className="btn btn-lg btn-primary" value="Buscar"/>
                    </div>
                </div>
            </form>
        );
    }
}

export default Buscador;