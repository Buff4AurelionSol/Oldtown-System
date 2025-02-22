import "./styles-base-inputs.css"

interface PropsInput {
  label: string,
  type: string,
  name: string
}

export function BaseInput({ label, type, name }: PropsInput) {
  return (
    <label className="label-base">
      {label}
      <input type={type} className="input-base" name={name} />
    </label>
  )
}