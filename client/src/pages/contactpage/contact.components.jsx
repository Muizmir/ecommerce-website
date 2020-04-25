import React, {useEffect} from 'react';
import './contact.styles.scss';
import ContactImage from '../../components/contact-image/contact-image.components';
import ContactDescription from '../../components/contact-description.jsx/contact-description.components'

const ContactPage = () => {
    useEffect(() => {
        const script = document.createElement('script');

        script.src = ("https://platform.linkedin.com/badges/js/profile.js");
        script.async = true;

        document.body.appendChild(script);

    }, []);

    return(<div className='contact'>
        <ContactImage />
        <br/>
        <ContactDescription />
    </div>)
}

export default ContactPage;