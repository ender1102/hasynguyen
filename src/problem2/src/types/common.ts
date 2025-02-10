export interface NotificationProps {
	msg: string
	type: string
	time: number
}

export interface CurrencyProps {
    currency: string
    price: number
    date: string
}

export interface PayloadProps {
    fromCurrency: string
    toCurrency: string
    amount: number
}