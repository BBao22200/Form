import { useState } from "react";
import './index.css'
function App() {
  const initFormValue = {
    name: "",
    email: "",
    phone: "",
    description: ""
  }
  const [formValue, setFormValue] = useState(initFormValue);
  const [formError, setFormError] = useState({});

  const isEmptyValue = (value) => {
    return !value || value.trim().length < 1;
  }
  const validateForm = () => {
    const error = {};
    setFormError(error)
    if (isEmptyValue(formValue.name)) {
      error["name"] = "Name is required"
    }
    if (isEmptyValue(formValue.email)) {
      error["email"] = "Email is required"
    }
    if (isEmptyValue(formValue.phone)) {
      error["phone"] = "Phone number is required"
    }
    if (isEmptyValue(formValue.description)) {
      error["description"] = "Email is required"
    }
    setFormError(error)
    return Object.keys(error).length === 0;
  }
  console.log(formError)

  const handleSubmit = (event) => {
    event.preventDefault()
    if (validateForm()) {
      console.log("form value", formValue)
    } else {
      console.log("form invalid")
    }
    // setFormValue({
    //   ...formValue
    // })
    // console.log(formValue)
  }
  const handleChange = (event) => {
    const { value, name } = event.target
    setFormValue({
      ...formValue, [name]: value
    })
  }
  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form-submit">
        <div className="input-wrapper">
          <label>Name</label>
          <input
            placeholder="Name"
            name="name"
            type="text"
            onChange={handleChange}
            value={formValue.name}
          />
          {formError.name && (
            <div className="error-feedback">{formError.name}</div>
          )}
        </div>
        <div className="input-wrapper">
          <label>Email</label>
          <input
            placeholder="Email"
            name="email"
            type="text"
            value={formValue.email}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            onChange={handleChange}
          />
        </div>
        {formError.name && (
          <div className="error-feedback">{formError.email}</div>
        )}
        <div className="input-wrapper">
          <label>Phone Number</label>
          <input
            type="tel"
            placeholder="123-456-6789"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            value={formValue.phone}
            name="phone"
            onChange={handleChange}
          />
        </div>
        {formError.name && (
          <div className="error-feedback">{formError.phone}</div>
        )}
        <div className="input-wrapper">
          <label>Description</label>
          <textarea
            placeholder="Description"
            rows="4"
            cols="50"
            value={formValue.description}
            name="description"
            onChange={handleChange}
          ></textarea>
        </div>
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
