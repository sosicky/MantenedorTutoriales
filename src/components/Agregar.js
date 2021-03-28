import React, { Component } from 'react';
import {Modal,ModalBody,ModalFooter,ModalHeader} from "reactstrap"

class Agregar extends Component {

    modalAgregar=() =>{
        this.setState({modalAgregar: !this.state.modalAgregar})
      }
    render() {
        return (
            <form onClick={this.obtenerTutoriales}>
                
                <div className="row">
                    <div className="form-group col-md-8">
                        <input type="submit" onClick={()=>this.modal.modalAgregar()}  className="btn btn-lg btn-success float-right" value="Agregar"/>
                    </div>

                    <Modal isOpen={this.state.mod}>
                        <ModalHeader>

                        </ModalHeader>
                        <ModalBody>
                            <div className="form-group">
                            <label htmlFor="nombre">Nombre</label>
                            <input className="form-control" type="text" id="name" />
                            <br/>
                            <label htmlFor="profesor">Profesor</label>
                            <input className="form-control" type="text" id="profesor" />
                            <br/>
                            <label htmlFor="materia">Materia</label>
                            <input className="form-control" type="text" id="materia" />
                            <br/>
                            <label htmlFor="fecha">Fecha</label>
                            <input className="form-control" type="text" id="fecha" />
                            <br/>
                            </div>
                        </ModalBody>
                        <ModalFooter>

                        </ModalFooter>
                    </Modal>
                </div>
            </form>
            
        );
    }
}

export default Agregar;