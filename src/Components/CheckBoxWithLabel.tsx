import { Checkbox } from '@material-ui/core'
import React, { ReactElement } from 'react'

interface Props {
    label: string
    checked: boolean
    updateChecked: React.Dispatch<React.SetStateAction<boolean>>
}

export default function CheckBoxWithLabel({
    label,
    checked,
    updateChecked,
}: Props): ReactElement {
    const onChange = (): void => {
        updateChecked(!checked)
    }

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ flex: 1, textAlign: 'left' }}>{label}</span>
            <Checkbox checked={checked} onChange={onChange} color="primary" />
        </div>
    )
}
