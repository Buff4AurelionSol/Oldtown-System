import "./styles-base-inputs.css"

interface PropsInput {
  label: string,
  type: string,
  name: string,
  value?: string,
  onChange?: React.ChangeEventHandler<HTMLInputElement>
}

export function BaseInput({ label, type, name, value, onChange }: PropsInput) {
  return (
    <div className="input-box">
      <label className="label-base">
        {label}
        <input type={type} className="input-base" name={name} value={value} onChange={onChange} />
      </label>
    </div>
  )
}