type Props = {
  isChecked: boolean
  onChange: () => void
  label: string
}

export default function Checkbox({ isChecked, onChange, label }: Props) {
  return (
    <label htmlFor="switch">
      <input
        type="checkbox"
        name="switch"
        role="switch"
        checked={isChecked}
        onChange={onChange}
      />
      {label}
    </label>
  )
}
