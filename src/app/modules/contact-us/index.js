import React from 'react';

import { sectionTitle } from './constants';
import ContactForm from './contact-form';

const ContactUs = () => (
    <section>
        <h1>{sectionTitle}</h1>
        <ContactForm />
    </section>
);

export default ContactUs;
   