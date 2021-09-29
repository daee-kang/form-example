import React, { ReactElement, useContext } from 'react'
import './App.css'
import { Paper } from '@material-ui/core'
import { FormContext } from './Context/FormContext'
import Form from './Screens/Form'

const App: React.FC = (): ReactElement => {
    const { currentForm } = useContext(FormContext)

    return (
        <div className="App">
            <div className="form">
                <div className="title">Do you have covid?</div>
                <Paper elevation={5}>
                    <Form form={currentForm!} />
                </Paper>
            </div>
        </div>
    )
}

export default App
