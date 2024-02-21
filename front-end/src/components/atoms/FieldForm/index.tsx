import { FieldFormPropType } from "./types";

const FieldForm = <TFormValues extends Record<string, unknown>>({
    name,
    label,
    type = "text",
    placeholder,
    register,
    required = false
    }: FieldFormPropType<TFormValues>) => {
    return (
        <div className="relative">
            <label htmlFor={name} className="absolute -top-2 left-3 px-2 bg-gray-900 text-white text-xs font-medium tracking-wide uppercase rounded-sm">
                {label}
            </label>
            <input {...register(name, { required })} type={type} id={name} placeholder={placeholder} className="w-full py-3 px-6 bg-gray-900 text-base font-medium outline-none border border-white shadow rounded-md" />
        </div>
    )
}

export default FieldForm;