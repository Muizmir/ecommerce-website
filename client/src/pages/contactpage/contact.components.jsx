import React from 'react';
import './contact.styles.scss';
import ContactImage from '../../components/contact-image/contact-image.components';
import ContactDescription from '../../components/contact-description.jsx/contact-description.components'

const ContactPage = () => (
    <div className='contact'>
        <ContactImage />
        <br/>
        <ContactDescription />
    </div>
)

export default ContactPage;