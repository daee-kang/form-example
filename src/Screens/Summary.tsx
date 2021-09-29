import React, { ReactElement, useContext } from 'react'
import { FormContext } from '../Context/FormContext'

export default function Summary(): ReactElement {
    const { getNumOfSymptoms, getSymptoms, country } = useContext(FormContext)

    return (
        <div className="paper">
            <div className="subtitle">Summary:</div>
            {getNumOfSymptoms && getNumOfSymptoms() > 2 ? (
                <div className="text">
                    <div>
                        Based on the amount of symptoms you have (
                        {getNumOfSymptoms()}), you most likely have covid and
                        should stay home.
                    </div>
                    <div style={{ marginTop: 20 }}>
                        Here are the symptoms you selected:
                    </div>
                    <div>
                        {getSymptoms &&
                            getSymptoms().map((symptom) => {
                                return <div>- {symptom}</div>
                            })}
                    </div>
                    {country && (
                        <div style={{ marginTop: 20 }}>
                            Thank you for submitting your information, we have
                            also submitted this information to your countrys
                            database: {country}
                        </div>
                    )}
                </div>
            ) : (
                <div className="text">
                    Good news, you most likely don&apos;t have covid. It looks
                    like you have less than 3 symptoms. Stay safe out there!
                </div>
            )}
        </div>
    )
}
