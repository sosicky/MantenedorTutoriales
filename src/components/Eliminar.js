import React, { Component } from 'react';

class Eliminar extends Component {
    
    eliminarTutoriales = (e) => {
        e.preventDefault();
        const urlEliminar = `https://rayentutorialtestapp.azurewebsites.net/deletetutorials`
    }

    render() {
        return (
            <form onSubmit={this.eliminarTutoriales}>
                <div className="row text-center">
                    <div className="form-group col-md-8">
                        <input type="submit"  className="btn btn-lg btn-primary float-center" value="Eliminar Todo"/>
                    </div>
                </div>
            </form>
        );
    }
}

export default Eliminar;