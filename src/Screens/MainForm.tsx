/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { ReactElement, useContext } from 'react'
import { Button } from '@material-ui/core'
import { FormContext } from '../Context/FormContext'
import '../App.css'
import CheckBoxWithLabel from '../Components/CheckBoxWithLabel'

interface ISymptom {
    label: string
    checked: boolean
    setChecked: React.Dispatch<React.SetStateAction<boolean>>
}

export default function MainForm(): ReactElement {
    const {
        fever,
        setFever,
        cough,
        setCough,
        shortnessOfBreath,
        setShortnessOfBreath,
        headache,
        setHeadache,
        lossOfSenses,
        setLossOfSenses,
        soreThroat,
        setSoreThroat,
        aches,
        setAches,
        getNextForm,
    } = useContext(FormContext)

    const symptoms: ISymptom[] = [
        { label: 'Fever', checked: fever!, setChecked: setFever! },
        { label: 'Cough', checked: cough!, setChecked: setCough! },
        {
            label: 'Shortness of Breath',
            checked: shortnessOfBreath!,
            setChecked: setShortnessOfBreath!,
        },
        { label: 'Headache', checked: headache!, setChecked: setHeadache! },
        {
            label: 'Loss of Senses (smell and/or taste)',
            checked: lossOfSenses!,
            setChecked: setLossOfSenses!,
        },
        {
            label: 'Sore Throat',
            checked: soreThroat!,
            setChecked: setSoreThroat!,
        },
        {
            label: 'Body or Muscle aches',
            checked: aches!,
            setChecked: setAches!,
        },
    ]

    return (
        <div className="paper">
            <div className="subtitle">symptoms:</div>
            {symptoms.map((symptom) => {
                return (
                    <CheckBoxWithLabel
                        label={symptom.label}
                        checked={symptom.checked}
                        updateChecked={symptom.setChecked}
                        key={`${symptom.label}-check`}
                    />
                )
            })}

            <div style={{ marginTop: 40 }}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                        if (getNextForm !== undefined) {
                            getNextForm()
                        }
                    }}
                >
                    Submit
                </Button>
            </div>
        </div>
    )
}
