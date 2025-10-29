

import { useState } from 'react'; 

function ContactCard({ contact }) {

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen); 
  };

  return (
    <div>
      <p><b>{contact.name}</b></p>

      
      {isOpen && (
        <p>{contact.phone}</p>
      )}

     
      <button onClick={handleToggle}>
        {isOpen ? 'Сховати' : 'Показати деталі'}
      </button>
    </div>
  );
}

export default ContactCard;