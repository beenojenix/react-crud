import React, { useState, useEffect } from 'react';
import TransactionForm from './TransactionForm'
import 'bootstrap/dist/css/bootstrap.min.css';
import firebaseDb from "../firebase";

const TransactionList = () =>  {

    var [transactObjects, setTransactObjects] = useState(0)

    useEffect(() => {

        firebaseDb.child('TransactionList').on('value', snapshot => {
           if(snapshot.val()!=null) 
           setTransactObjects({
               ...snapshot.val()
           })
        })

    }, [])

    const addOrEdit = obj => {
        firebaseDb.child('TransactionList').push(
            obj,
        err => {
            if(err)
            console.log(err)
        }
        )
    }
 
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-5">
                        <TransactionForm addOrEdit={addOrEdit} />
                    </div>
                    <div className="col-md-7">
                        <table className="table table-bordered table-stripped">
                            <thead className="thead-dark">
                                <tr>
                                    <th>Title</th>
                                    <th>Content</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                    {
                                        Object.keys(transactObjects).map(id=>{
                                            return <tr key={id}>
                                                <td>{transactObjects[id].title}</td>
                                                <td>{transactObjects[id].content}</td>
                                                <td>
                                                    <a className="btn btn-primary">Edit</a> &nbsp; &nbsp;
                                                    <a className="btn btn-danger">Delete</a>
                                                </td>
                                            </tr>
                                        })
                                    }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }


export default TransactionList;
