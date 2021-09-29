import { Button, MenuItem, Select } from '@material-ui/core'
import React, { ReactElement, useContext, useEffect, useState } from 'react'
import { FormContext } from '../Context/FormContext'

type StatsType = {
    active: number
    confirmed: number
    deaths: number
}

export default function FormTwo(): ReactElement {
    const { getNextForm, country, setCountry } = useContext(FormContext)

    const [countries, setCountries] = useState<
        { country: string; slug: string }[] | null
    >(null)
    const [stats, setStats] = useState<StatsType | null>(null)

    useEffect(() => {
        if (country === null) return
        fetch(`https://api.covid19api.com/total/country/${country}`)
            .then((response) => response.json())
            .then((data) => {
                if (data.length !== 0) {
                    const point = data[data.length - 1]
                    setStats({
                        active: point.Active,
                        confirmed: point.Confirmed,
                        deaths: point.Deaths,
                    })
                }
            })
    }, [country])

    useEffect(() => {
        fetch('https://api.covid19api.com/countries')
            .then((response) => response.json())
            .then((data) => {
                const cs = []
                for (let i = 0; i < data.length; i += 1) {
                    cs.push({
                        country: data[i].Country as string,
                        slug: data[i].Slug as string,
                    })
                }
                cs.sort((a, b) => {
                    if (a.country < b.country) {
                        return -1
                    }
                    return 1
                })
                setCountries(cs)
                setCountry!('united-states')
            })
    }, [])

    const countrySet = (
        event: React.ChangeEvent<{
            name?: string | undefined
            value: unknown
        }>
    ): void => {
        setCountry!(event.target.value as string)
    }

    return (
        <div className="paper">
            <div className="subtitle">Uh oh! You most likely have Covid</div>
            <div className="text">
                You have more than 2 symptoms, it is likely that you have
                COVID-19. There are efforts around the world to track
                information about this virus. Please select your state so that
                we may further track this data in your state. Selecting your
                state will also display the current statistics about your state.
            </div>
            <div>
                <Select
                    variant="outlined"
                    required
                    onChange={countrySet}
                    value={country}
                >
                    {countries?.map((c) => {
                        return <MenuItem value={c.slug}>{c.country}</MenuItem>
                    })}
                </Select>
            </div>
            <div style={{ marginTop: 20 }}>
                <div>Confirmed: {stats?.confirmed}</div>
                <div>Active: {stats?.active}</div>
                <div>Deaths: {stats?.deaths}</div>
            </div>

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
