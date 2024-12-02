import { FormEvent, useEffect, useState } from "react"


const Form = () => {
  const[values, setValues] = useState({
    firstname:"",
    lastname:"",
    email:"",
    password:"",
    confirmpassword:""
  })
  const[formError, setFormError] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)

  const handleValues = (e) =>{

    const {name, value} = e.target
    setValues({...values,[name]:value})
    setFormError({...formError,[name]:''})
  }

  const handleSubmit = (e:FormEvent) =>{
    e.preventDefault()
    setFormError(validate(values))
    setIsSubmit(true)
  }

  const validate = (values) =>{
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const errors = {}
    if(!values.password){
    errors.password = "Password Required"
    }
    if(!values.confirmpassword){
      errors.confirmpassword = "Confirm Password Required"
    }
    if (values.password && values.confirmpassword && values.password !== values.confirmpassword) {
      errors.confirmpassword = "Password Do Not Match"
    }
    if(values.firstname.length < 3){
      errors.firstname = 'First Name Cannot Be Less Than 3 Characters'
    }
    if(values.lastname.length < 3){
      errors.lastname = "Last Name Cannot Be Less Than 3 Characters"
    }
    if (!values.email.match(re)) {
      errors.email = "Email Address is Invalid"
    }
    return errors
  }

  // useEffect(() => {

  //   if(Object.keys(formError).length === 0 && isSubmit){
  //     console.log('form Submitted Succesfully')
  //   }


  // }, [formError])

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="first-name">First Name</label> <br />
      <input type="text" name="firstname" placeholder='First Name' value={values.firstname} onChange={handleValues}/> <br />
      <p>{formError.firstname}</p>
      <br />
      <label htmlFor="last-name">Last name</label> <br />
      <input type="text" name='lastname' placeholder='Last Name' value={values.lastname} onChange={handleValues} /> <br />
      <p>{formError.lastname}</p> <br />
      <label htmlFor="email">Email</label> <br />
      <input type="text" name="email" placeholder='something@abc.gg' value={values.email} onChange={handleValues}/> <br />
      <p>{formError.email}</p> <br />
      <label htmlFor="password">Password</label> <br />
      <input type="password" name="password" placeholder='*****' value={values.password} onChange={handleValues}/> <br />
      <p>{formError.password}</p> <br />
      <label htmlFor="confirm-password">Confirm Password</label> <br />
      <input type="password" name="confirmpassword" placeholder='*****' value={values.confirmpassword} onChange={handleValues}/> <br />
      <p>{formError.confirmpassword}</p> <br />
      <button type="submit">Submit</button> <br />
      {Object.keys(formError).length === 0 && isSubmit ? (<p>Form Submitted Succesfully</p>) : ('')}
    </form>
  )
}

export default Form