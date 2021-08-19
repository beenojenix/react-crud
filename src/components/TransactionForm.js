import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';

const TransactionForm = (props) => {


        const initialFieldValues = {
            title: '',
            content: ''
        }

        var [values, setValues] = useState(initialFieldValues)


        const handleInputChange = e => {
            var { name, value } = e.target

            setValues({
                ...values,
               [ name ] : value
            })
        }

        const handleFormSubmit = e => {
            e.preventDefault();
            props.addOrEdit(values)
        }

        return (
            <form autoComplete="off" onSubmit={handleFormSubmit}>
                <div className="form-group input-group mb-3">
                    <input className="form-control" placeholder="Title" name="title" value={values.title} onChange={handleInputChange} />
                </div>
                <div className="form-group input-group mb-3">
                    <input className="form-control" placeholder="Content" name="content" value={values.content} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                    <input type="submit" value="save" className="btn btn-primary btn-block" />
                </div>
            </form>
        )
    }


export default  TransactionForm;