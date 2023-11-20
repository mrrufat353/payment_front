import React, { useState } from 'react';

// Functional component representing the AddBank form
export function AddBank() {
    // State variables for card details
    const [cardNumber, setCardNumber] = useState('');
    const [cardHolder, setCardHolder] = useState('');
    const [cardExpiration, setCardExpiration] = useState({ month: '', year: '' });
    const [ccv, setCcv] = useState('');

    // Event handler for card number input changes
    const handleCardNumberChange = (e, index) => {
        const value = e.target.value;

        // Move focus to the next input when four digits are entered
        if (value.length > 3 && index < 3) {
            document.getElementById(`card-number-${index + 1}`).focus();
        }

        // Update the card number state
        const updatedCardNumber = [...cardNumber];
        updatedCardNumber[index] = value;
        setCardNumber(updatedCardNumber.join(' '));
    };

    // Event handler for card holder input changes
    const handleCardHolderChange = (e) => {
        setCardHolder(e.target.value);
    };

    // Event handler for card expiration input changes
    const handleCardExpirationChange = (e) => {
        const { id, value } = e.target;
        setCardExpiration((prev) => ({ ...prev, [id]: value }));
    };

    // Event handler for CCV input changes
    const handleCcvChange = (e) => {
        setCcv(e.target.value);
    };

    return (
        <div className="checkout">
            {/* ... other code ... */}
            {/* Card details form */}
            <form className="form" autoComplete="off" noValidate>
                <fieldset>
                    <label htmlFor="card-number">Card Number</label>
                    {/* Input fields for card number */}
                    {[0, 1, 2, 3].map((index) => (
                        <input
                            key={index}
                            type="number"
                            id={`card-number-${index}`}
                            className="input-cart-number"
                            maxLength="4"
                            onChange={(e) => handleCardNumberChange(e, index)}
                        />
                    ))}
                </fieldset>
                <fieldset>
                    <label htmlFor="card-holder">Card holder</label>
                    {/* Input field for card holder */}
                    <input
                        type="text"
                        id="card-holder"
                        onChange={handleCardHolderChange}
                    />
                </fieldset>
                <fieldset className="fieldset-expiration">
                    <label htmlFor="card-expiration-month">Expiration date</label>
                    {/* Select fields for card expiration month and year */}
                    <div className="select">
                        <select
                            id="card-expiration-month"
                            onChange={handleCardExpirationChange}
                        >
                            {/* ... options ... */}
                        </select>
                    </div>
                    <div className="select">
                        <select
                            id="card-expiration-year"
                            onChange={handleCardExpirationChange}
                        >
                            {/* ... options ... */}
                        </select>
                    </div>
                </fieldset>
                <fieldset className="fieldset-ccv">
                    <label htmlFor="card-ccv">CCV</label>
                    {/* Input field for CCV */}
                    <input
                        type="text"
                        id="card-ccv"
                        maxLength="3"
                        onFocus={() => document.querySelector('.credit-card-box').classList.add('hover')}
                        onBlur={() => document.querySelector('.credit-card-box').classList.remove('hover')}
                        onChange={handleCcvChange}
                    />
                </fieldset>
                {/* Submit button */}
                <button className="btn">
                    <i className="fa fa-lock"></i> submit
                </button>
            </form>
        </div>
    );
}
