

import ContactCard from "../ContactCard/ContactCard";


function ContactList({ contacts }) {
  return (
    <div>
    
      {contacts.length === 0 ? (
        <p>Контактів не знайдено.</p>
      ) : (
        <ul>
          {contacts.map(contact => (
            <li key={contact.id}>
              <ContactCard contact={contact} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ContactList;