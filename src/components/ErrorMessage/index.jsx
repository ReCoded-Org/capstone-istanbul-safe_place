import React from 'react'
import './index.scss';
import PatchExclamationFll from '../../images/Patch-exclamation-fll.svg'

export default function ErrorMessage({ message = 'Invalid input value' }) {
    return (
        <div className="errorMessage" role="alert">
            <img src={PatchExclamationFll} alt="" width="32" height="32" title="Bootstrap" />
            <p>
                {message}
            </p>
        </div>
    )
}
