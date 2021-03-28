import React, { Component } from 'react';
import Agregar from './components/Agregar';
import Eliminar from './components/Eliminar';
import Buscador from './components/Buscador'
import Resultado from './components/Resultado';
import {Modal,ModalBody,ModalFooter,ModalHeader} from "reactstrap"


class App extends Component {
  state = {
    termino : '',
    registros : [],
    modalAgregar : false,
    form:{
      nombre:'',
      profesor:'',
      materia:'',
      fecha: ''
    }
  }

  cargarTutoriales = () =>{
    const url = `https://rayentutorialtestapp.azurewebsites.net/tutorial` 
    fetch(url)
      .then(respuesta => respuesta.json())
      .then(resultado => this.setState({ registros : resultado}))    
  }

  consultarApi = () =>{
    const termino = this.state.termino;
    const urlBuscar = `https://rayentutorialtestapp.azurewebsites.net/tutorial?description=${termino}`     
    
    fetch(urlBuscar)
      .then(respuesta => respuesta.json())
      .then(resultado => this.setState({ registros : resultado}))
  }
  
  datosBuscador = (termino) =>{
    this.setState({
      termino
    },() =>{
      this.consultarApi()
    })
  }

  modalAgregar=() =>{
    this.setState({modalAgregar: !this.state.modalAgregar})
  }
 
  componentDidMount(){
    this.cargarTutoriales()
  }
  render() {


    return (
      <div>
        <div className="navbar navbar-expand-lg navbar-dark bg-primary col-md-12">
          <a class="navbar-brand" href="#">Tutoriales</a>
        </div>
        <div className="col-md-8">
          <Buscador 
            datosBuscador={this.datosBuscador}/>
        </div>
        <div className="col-md-8">
        <table class="table table-hover">
          
          <Resultado 
          registros = {this.state.registros}/>
          
        </table>
        </div >
        
        <div className="col-md-8">
          <Eliminar /> 
        </div>
        <div className="col-md-8">
          <div className="form-group col-md-8">
              <input type="submit" onClick={()=>this.modalAgregar()}  className="btn btn-lg btn-success float-right" value="Agregar"/>
          </div> 
        </div>
        
       
        <Modal isOpen={this.state.modalAgregar}>
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
                          <button className = "btn btn-success">Agregar</button>
                          <button onClick={()=>this.modalAgregar()} className = "btn btn-danger">Cancelar</button>
                        </ModalFooter>
                    </Modal>
      </div>
    );
  }
}

export default App;