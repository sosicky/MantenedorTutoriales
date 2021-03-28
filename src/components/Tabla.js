import React, { Component } from 'react';

const Tabla = (props) => {
    const {nombre,profesor,fecha} = props.resgistro

    return (
        <tr>
            <td>{nombre}</td>
            <td>{profesor}</td>
            <td>{fecha} </td>
        </tr>
    )   
}

export default Tabla;