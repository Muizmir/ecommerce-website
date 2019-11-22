import React from 'react';
import SignIn from '../../components/sign-in/sign-in.components'
import SignUp from '../../components/sign-up/sign-up.component'

import './signing.styles.scss'

const Signing = () => (
    <div className='signing'>
        <SignIn />
        <SignUp />
    </div>
)

export default Signing;