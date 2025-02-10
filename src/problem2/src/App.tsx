import React, { useEffect, useRef, useState } from 'react'
import { Avatar, Box, Button, Container, InputAdornment, MenuItem, TextField, Typography } from '@mui/material'
import { Loading } from './components/common'
import toast from 'react-hot-toast'
import { CurrencyProps, PayloadProps } from './types'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const validationSchema = yup.object({
    fromCurrency: yup.string().required('Please select a currency'),
    toCurrency: yup.string().required('Please select a currency'),
    amount: yup.number().required('Amount is required').positive('Amount must be greater than 0')
})

const App: React.FC = () => {
    const timeOutRef = useRef<NodeJS.Timeout>()
    const [data, setData] = useState<CurrencyProps[]>()
    const [result, setResult] = useState<number>()
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://interview.switcheo.com/prices.json')
                const data = await response.json()

                const latestPrices: { [key: string]: CurrencyProps } = {}
                data.forEach((item: CurrencyProps) => {
                    latestPrices[item.currency] = item
                })

                setData(Object.values(latestPrices))
            } catch (error) {
                console.error('Error fetching data:', error)
                toast.error('Error fetching data!', {
                    id: 'error-fetch',
                    style: {
                        padding: '16px',
                        color: '#FFFAEE',
                        backgroundColor: '#222222'
                    },
                    iconTheme: {
                        primary: '#f03529',
                        secondary: '#FFFAEE'
                    }
                })
            }
        }

        fetchData()

        return () => {
            if (timeOutRef.current) clearTimeout(timeOutRef.current)
        }
    }, [])

    const convertCurrency = (from: string, to: string, amount: number = 1) => {
        if (!data) return 0

        const fromPrice = data.find((item: CurrencyProps) => item.currency === from)?.price
        const toPrice = data.find((item: CurrencyProps) => item.currency === to)?.price

        if (fromPrice && toPrice) {
            return (amount * fromPrice) / toPrice
        }
        return 0
    }

    const { control, handleSubmit, formState: { errors }, watch } = useForm({
        resolver: yupResolver(validationSchema),
        defaultValues: {
            fromCurrency: '',
            toCurrency: '',
            amount: 1
        }
    })

    const fromCurrency = watch('fromCurrency')
    const toCurrency = watch('toCurrency')

    const onSubmit = (payload: PayloadProps) => {
        if (timeOutRef.current) clearTimeout(timeOutRef.current)
        setLoading(true)
        timeOutRef.current = setTimeout(() => {
            const convertedAmount = convertCurrency(payload.fromCurrency, payload.toCurrency, payload.amount)
            setResult(convertedAmount)
            setLoading(false)
            toast.success('Successfully!', {
                id: 'success',
                style: {
                    padding: '16px',
                    color: '#FFFAEE',
                    backgroundColor: '#222222'
                },
                iconTheme: {
                    primary: '#60CD18',
                    secondary: '#FFFAEE'
                }
            })
        }, 200)
    }

    return (
        <div className='app-wrapper'>
            <Container maxWidth='sm'>
                <Typography variant='h2' align='center'>
                    Swap Currency
                </Typography>
                {!data ? (
                    <Box mt={5}><Loading /></Box>
                ) : (
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Typography variant='body1' align='center' sx={{ marginBottom: '1rem' }}>
                            {fromCurrency && toCurrency
                                ? `${fromCurrency}/${toCurrency}: 1 ${fromCurrency} = ${convertCurrency(
                                        fromCurrency,
                                        toCurrency
                                  )} ${toCurrency}`
                                : 'Swap and Convert'}
                        </Typography>
                        <Box my={4} display='flex' justifyContent='center' alignItems='center' flexDirection='column'>
                            <Controller
                                name="fromCurrency"
                                control={control}
                                render={({ field }) => (
                                    <TextField
                                        select
                                        label='From'
                                        {...field}
                                        error={!!errors.fromCurrency}
                                        helperText={errors.fromCurrency ? errors.fromCurrency.message : ' '}
                                        sx={{ width: '250px', marginBottom: '0.5rem' }}
                                        InputProps={{
                                            startAdornment: field.value && (
                                                <InputAdornment position='start'>
                                                    <Avatar
                                                        src={`https://raw.githubusercontent.com/Switcheo/token-icons/main/tokens/${field.value}.svg`}
                                                        alt={field.value}
                                                    />
                                                </InputAdornment>
                                            )
                                        }}
                                    >
                                        {data.map((item: CurrencyProps) => (
                                            <MenuItem key={item.currency} value={item.currency}>
                                                {item.currency}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                )}
                            />
                            <Controller
                                name="toCurrency"
                                control={control}
                                render={({ field }) => (
                                    <TextField
                                        select
                                        label='To'
                                        {...field}
                                        error={!!errors.toCurrency}
                                        helperText={errors.toCurrency ? errors.toCurrency.message : ' '}
                                        sx={{ width: '250px', marginBottom: '0.5rem' }}
                                        InputProps={{
                                            startAdornment: field.value && (
                                                <InputAdornment position='start'>
                                                    <Avatar
                                                        src={`https://raw.githubusercontent.com/Switcheo/token-icons/main/tokens/${field.value}.svg`}
                                                        alt={field.value}
                                                    />
                                                </InputAdornment>
                                            )
                                        }}
                                    >
                                        {data.map((item: CurrencyProps) => (
                                            <MenuItem key={item.currency} value={item.currency}>
                                                {item.currency}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                )}
                            />
                            <Controller
                                name="amount"
                                control={control}
                                render={({ field }) => (
                                    <TextField
                                        label='Amount'
                                        type='number'
                                        {...field}
                                        error={!!errors.amount}
                                        helperText={errors.amount ? errors.amount.message : ' '}
                                        sx={{ width: '250px', marginBottom: '0.5rem' }}
                                    />
                                )}
                            />
                            <Box my={2}>
                                {loading ? (
                                    <Loading />
                                ) : (
                                    <Button
                                        variant='contained'
                                        color='primary'
                                        type='submit'
                                        disabled={loading}
                                    >
                                        Convert
                                    </Button>
                                )}
                            </Box>

                            {!loading && result && (
                                <Typography variant='h5' align='center' style={{ marginTop: '1rem' }}>
                                    Result: {result} {toCurrency}
                                </Typography>
                            )}
                        </Box>
                    </form>
                )}
            </Container>
        </div>
    )
}

export default App