interface WalletBalance {
    currency: string
    amount: number
    blockchain: string
}

interface FormattedWalletBalance extends WalletBalance {
    formatted: string
}

interface Props extends BoxProps {}

const WalletPage: React.FC<Props> = (props: Props) => {
    const { children, ...rest } = props
    const balances = useWalletBalances()
    const prices = usePrices()

    const getPriority = (blockchain: string): number => {
        switch (blockchain) {
            case 'Osmosis':
                return 100
            case 'Ethereum':
                return 50
            case 'Arbitrum':
                return 30
            case 'Zilliqa':
                return 20
            case 'Neo':
                return 20
            default:
                return -99
        }
    }

    const sortedBalances = useMemo(() => {
        return balances
            .map((balance: WalletBalance) => ({
                ...balance,
                priority: getPriority(balance.blockchain),
            }))
            .filter((balance: WalletBalance & { priority: number }) => balance.priority > -99 && balance.amount > 0)
            .sort((lhs: WalletBalance & { priority: number }, rhs: WalletBalance & { priority: number }) => {
                if (rhs.priority !== lhs.priority) {
                    return rhs.priority - lhs.priority
                }
                return lhs.blockchain.localeCompare(rhs.blockchain)
            })
    }, [balances, prices])

    const rows = sortedBalances.map((balance: WalletBalance, index: number) => {
        const usdValue = prices[balance.currency] * balance.amount
        return (
            <WalletRow
                // className={classes.row}
                key={index}
                amount={balance.amount}
                usdValue={usdValue}
                formattedAmount={balance.amount.toFixed()}
            />
        )
    })

    return <div {...rest}>{rows}</div>
}
