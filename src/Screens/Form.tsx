import React, { ReactElement } from 'react'
import FormTwo from './FormTwo'
import MainForm from './MainForm'
import Summary from './Summary'

interface Props {
    form: 1 | 2 | 3
}

export default function Form({ form }: Props): ReactElement {
    if (form === 1) return <MainForm />
    if (form === 2) return <FormTwo />
    if (form === 3) return <Summary />

    return <div />
}
