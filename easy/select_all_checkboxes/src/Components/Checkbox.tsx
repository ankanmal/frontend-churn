
const Checkbox = (
  {checked, onChange, label}:{checked?: boolean;onChange?: Function; label?:string; }
) => {
  const handleChange = (element: any) =>{
    onChange && onChange(element.target.checked)
  }
  return (
    <div>
      <input type="checkbox"  checked={checked} onChange={(e)=>handleChange(e)} />
      <label htmlFor={label}>
         {label}
      </label>
    </div>
  )
}

export default Checkbox