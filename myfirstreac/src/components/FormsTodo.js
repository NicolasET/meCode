import React, { useState } from 'react';
//import PropTypes from 'prop-types';

const FormsTodo = ({ handleAddItem }) => {
    const [descripcion, setDescripcion] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        handleAddItem({
            done: false,
            id: (+new Date()).toString(),
            descripcion
        });

        setDescripcion("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="todo-list">
                <div className="file-input">
                    <input type="text" className="text" value={descripcion} onChange={e => setDescripcion(e.target.value)} />
                    <button className="button pink" disabled={descripcion ? "" : "disabled"}>Agregar</button>
                </div>
            </div>
        </form>
    );
};

//FormsTodo.propTypes = {
//    handleAddItem: PropTypes.element.isRequired
//  };

export default FormsTodo;
