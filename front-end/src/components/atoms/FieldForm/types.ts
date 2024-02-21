import { HTMLInputTypeAttribute } from "react"
import { FieldValues, Path, UseFormRegister } from "react-hook-form"

export interface FieldFormPropType<TFormValues extends FieldValues> {
    name: Path<TFormValues>
    label: string
    type?: HTMLInputTypeAttribute
    placeholder: string
    register: UseFormRegister<TFormValues>
    required?: boolean
}