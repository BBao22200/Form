import { useState } from "react";

function App() {
  const initFormValue = {
    name: "",
    email: "",
    phone: "",
    description: ""
  }
  const [formValue, setFormValue] = useState(initFormValue);
  // const [listFormValue, setlistFormValue] = useState([{}]);
  const handleSubmit = (event) => {
    event.preventDefault()
    setFormValue({
      ...formValue
    })
    console.log(formValue)
  }
  const handleChange = (event) => {
    const {value, name} = event.target
    setFormValue({
      ...formValue, [name]: value
    })
  }
  const validateForm = (formValue) => {
    if (formValue.name=="") {
      alert("Name must be filled out");
    }
    return
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input
          name="name"
          type="text"
          onChange={handleChange}
          value={formValue.name}
        /></div>
      <div>
        <label>Email</label>
        <input
          name="email"
          type="text"
          value={formValue.email}
          onChange={handleChange}
        /></div>
      <div>
        <label>Phone Number</label>
        <input
          type="tel"
          placeholder="123-456-6789"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          value={formValue.phone}
          name="phone"
          onChange={handleChange}
        /></div>
      <div>
        <label>Description</label>
        <textarea
          rows="4"
          cols="50"
          value={formValue.description}
          name="description"
          onChange={handleChange}
        ></textarea>
      </div>
      <input type="submit" />
    </form>
  );
}

export default App;
