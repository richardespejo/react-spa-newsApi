import React from 'react';
import styles from './formularios.module.css';
import useSelect from '../hooks/useSelect.js';

const Formulario = ({guardarCategoria}) => {

    const OPCIONES = [
        { value: 'general' , label : 'General'},
        { value: 'business' , label : 'Business'},
        { value: 'entertainment' , label : 'Entertainment'},
        { value: 'health' , label : 'Health'},
        { value: 'science' , label : 'Science'},
        { value: 'sport' , label : 'Sport'},
        { value: 'technology' , label : 'Tech'},

    ]

    const [ categoria , SelectNoticias ] = useSelect('general' , OPCIONES);

    //hacer submit al form y enviar a app.js
    const buscarNoticias = e => {
        e.preventDefault();
        guardarCategoria(categoria);

    }
    return ( 
        <div className={`${styles.buscador} row`}>
            <div className="col s12 m12">
                <form
                onSubmit={buscarNoticias}
                >
                    <h2 className={styles.heading}>Encuentra Noticias por Categoria</h2>
                    <SelectNoticias></SelectNoticias>

                    <div className="input-field col s12">
                        <input
                            type="submit"
                            className={`${styles.btn_block} btn-large amber darken-2`}
                            value="Buscar"
                        /> 
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default Formulario;