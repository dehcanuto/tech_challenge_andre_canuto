export interface CreditResultPropType {
    aproved: boolean  
    score: number
    entry_percent: number
    entry_value: number
    financing_value: number
    installments_time: number
    installments_value: number
}

export interface ApiCreditResultPropType {
    data: CreditResultPropType
    status: number
    statusText: string
}