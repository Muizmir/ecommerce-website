import React from 'react';
import './contact-description.styles.scss';


const ContactDescription = () => (

    <div
        className='contact-description'
    >
    <p>
            This is a e-commerce website built by me using React. I have used libraries like react-redux, react-router, react-redux-sagas etc. In addition, I have used Firebase to setup user authentication and store the details of items. I have used SCSS to style the components. To manage the payments, I have used StripeJS  and used Express server to forward the payment from the website to Stripe API. This website is also a Progressive Web App, and can be added as an app on phone.
            <br/> <br />
            Please feel free to work around the website and your comments and feedback are welcomed. My LinkedIn profile is displayed below.

    </p>

    <br/>
        <div class = 'linkedin'>
        <div class="LI-profile-badge" data-version="v1" data-size="medium" data-locale="en_US" data-type="horizontal" data-theme="light" data-vanity="mirmuizqaisar"><a class="LI-simple-link" href='https://au.linkedin.com/in/mirmuizqaisar?trk=profile-badge'>Muiz Qaisar Mir</a></div>
        </div>
    </div>
);

export default ContactDescription;
