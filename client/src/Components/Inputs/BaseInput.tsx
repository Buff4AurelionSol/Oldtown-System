interface PropsInput {
  label: string,
  type: string
}

export function BaseInput({ label, type }: PropsInput) {
  return (
    <label>
      {label}
      <input type={type} />
    </label>
  )
}