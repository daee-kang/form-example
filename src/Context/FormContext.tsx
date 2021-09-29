/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { createContext, ReactNode, useState } from 'react'

export interface FormContextInterface {
    currentForm: 1 | 2 | 3
    setCurrentForm: React.Dispatch<React.SetStateAction<1 | 2 | 3>>
    getNextForm: () => void
    getNumOfSymptoms: () => number
    getSymptoms: () => string[]
    fever: boolean
    cough: boolean
    shortnessOfBreath: boolean
    headache: boolean
    lossOfSenses: boolean
    soreThroat: boolean
    aches: boolean
    setFever: React.Dispatch<React.SetStateAction<boolean>>
    setCough: React.Dispatch<React.SetStateAction<boolean>>
    setShortnessOfBreath: React.Dispatch<React.SetStateAction<boolean>>
    setHeadache: React.Dispatch<React.SetStateAction<boolean>>
    setLossOfSenses: React.Dispatch<React.SetStateAction<boolean>>
    setSoreThroat: React.Dispatch<React.SetStateAction<boolean>>
    setAches: React.Dispatch<React.SetStateAction<boolean>>
    country: string | null
    setCountry: React.Dispatch<React.SetStateAction<string | null>>
}

export const FormContext = createContext<Partial<FormContextInterface>>({})

export const FormProvider = ({ children }: { children: ReactNode }) => {
    const [currentForm, setCurrentForm] = useState<1 | 2 | 3>(1)
    const [fever, setFever] = useState(false)
    const [cough, setCough] = useState(false)
    const [shortnessOfBreath, setShortnessOfBreath] = useState(false)
    const [headache, setHeadache] = useState(false)
    const [lossOfSenses, setLossOfSenses] = useState(false)
    const [soreThroat, setSoreThroat] = useState(false)
    const [aches, setAches] = useState(false)
    const [country, setCountry] = useState<string | null>(null)

    const getNumOfSymptoms = (): number => {
        let num = 0
        if (fever) num += 1
        if (cough) num += 1
        if (shortnessOfBreath) num += 1
        if (headache) num += 1
        if (lossOfSenses) num += 1
        if (soreThroat) num += 1
        if (aches) num += 1

        return num
    }

    const getSymptoms = (): string[] => {
        const symptoms: string[] = []
        if (fever) symptoms.push('Fever')
        if (cough) symptoms.push('Cough')
        if (shortnessOfBreath) symptoms.push('Shortness of Breath')
        if (headache) symptoms.push('Headache')
        if (lossOfSenses) symptoms.push('Loss of Senses')
        if (soreThroat) symptoms.push('Sore Throat')
        if (aches) symptoms.push('Muscle or Body aches')

        return symptoms
    }

    const getNextForm = () => {
        if (currentForm === 1) {
            if (getNumOfSymptoms() >= 3) {
                setCurrentForm(2)
                return
            }
        }
        setCurrentForm(3)
    }

    return (
        <FormContext.Provider
            value={{
                currentForm,
                setCurrentForm,
                getNextForm,
                getNumOfSymptoms,
                getSymptoms,
                //
                fever,
                cough,
                shortnessOfBreath,
                headache,
                lossOfSenses,
                soreThroat,
                aches,
                //
                setFever,
                setCough,
                setShortnessOfBreath,
                setHeadache,
                setLossOfSenses,
                setSoreThroat,
                setAches,
                //
                country,
                setCountry,
            }}
        >
            {children}
        </FormContext.Provider>
    )
}
