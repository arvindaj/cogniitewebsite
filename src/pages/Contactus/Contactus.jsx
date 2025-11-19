import React from "react";
import ContactForm from "../../components/contact_form/contact_us";
import ContactInfo from "../../components/contact_form/ContactInfo";
import NewsletterSection from "../../components/contact_form/NewsletterSection";

const Contactus = () => {
  return (
    <>
      <div className="mt-10">
        <ContactForm />
        <ContactInfo/>
        <NewsletterSection/>
        
      </div>
    </>
  );
};

export default Contactus;