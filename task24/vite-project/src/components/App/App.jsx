import { useState } from 'react'

import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import './App.css'




const initialContacts = 
[
  { id: 1, name: 'Іван Петренко', phone: '+380501234567' },
  { id: 2, name: 'Марія Сидоренко', phone: '+380677654321' },
  { id: 3, name: 'Петро Іваненко', phone: '+380931122334' }
  ]


function App() {
  const [contacts, setContacts] = useState(initialContacts);
  
  const [filter, setFilter] = useState('');
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
    
  };
const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  return (
    <div>
      <h1>Мої контакти</h1>
      <SearchBox value={filter} onChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} />
   </div>
  )
}

export default App
