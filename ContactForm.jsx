import React, { useState } from "react";
import "./ContactForm.css";

function ContactForm() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [contacts, setContacts] = useState([]);
  const [editing, setEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    if (editing) {
      const updatedContacts = [...contacts];
      updatedContacts[editingIndex] = { name, surname, phone, email };
      setContacts(updatedContacts);
      setEditing(false);
      setEditingIndex(null);
    } else {
      const newContact = { name, surname, phone, email };

      setContacts([...contacts, newContact]);
    }

    setName("");
    setSurname("");
    setPhone("");
    setEmail("");
  }

  function handleEdit(index) {
    const contact = contacts[index];
    setName(contact.name);
    setSurname(contact.surname);
    setPhone(contact.phone);
    setEmail(contact.email);
    setEditing(true);
    setEditingIndex(index);
  }

  function handleDelete(index) {
    const updatedContacts = [...contacts];
    updatedContacts.splice(index, 1);
    setContacts(updatedContacts);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Имя:</p>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>

        <label>
          <p> Фамилия:</p>

          <input
            type="text"
            value={surname}
            onChange={(event) => setSurname(event.target.value)}
          />
        </label>

        <label>
          <p>Номер телефона:</p>

          <input
            type="text"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
        </label>

        <label>
          <p> Адрес электронной почты:</p>

          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>

        <button type="submit">{editing ? "Обновить" : "Добавить"}</button>
      </form>

      <div className="container">
        {contacts.map((contact, index) => (
          <div
            className="card"
            key={index}
            style={{
              border: "1px solid gray",
              padding: "10px",
              marginBottom: "10px",
            }}
          >
            <h6>
              <h5>Name:</h5> {contact.name}
            </h6>
            <h6>
              <h5>Surname:</h5> {contact.surname}
            </h6>

            <h6>
              <h5>Phone:</h5> {contact.phone}
            </h6>
            <h6>
              <h5>Email:</h5> {contact.email}
            </h6>
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContactForm;
