import React from 'react';
import ContactsCard from './ContactCard'


function Contacts() {
    return (
        <div className="contacts">
      <ContactsCard contact={{name: "Mr. Whiskerson", 
      imgUrl: "http://placekitten.com/300/200", 
      phone: "(212) 555-1234",
      alt: "Cat-Image", 
      email: "mr.whiskaz@catnap.meow"}} 
      /> 
      
      <ContactsCard contact={{name: "Mr. Whiskerson", 
      imgUrl: "http://placekitten.com/400/200", 
      phone: "(212) 555-2345", 
      alt: "Cat-Image",
      email: "fluff@me.com"}} 
      />
      
      <ContactsCard contact={{name: "Mr. Whiskerson", 
      imgUrl: "http://placekitten.com/400/300", 
      phone: "(212) 555-3456", 
      alt: "Cat-Image",
      email:"ofworld@yahoo.com"}} 
      />
      
      <ContactsCard contact={{name: "Mr. Whiskerson", 
      imgUrl: "http://placekitten.com/200/100", 
      phone: "(212) 555-4567", 
      alt: "Cat-Image",
      email: "thecat@hotmail.com"}} 
      /> 
      
      
    </div>    
    )
}

export default Contacts