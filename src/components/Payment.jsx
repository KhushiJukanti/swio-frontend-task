import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Payment() {
    const [username, setUsername] = useState('');
    const [userAmount, setUserAmount] = useState('');
    const [formError, setFormError] = useState({});

    const onUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const onUserAmountChange = (e) => {
        setUserAmount(e.target.value);
    };

    const validateTaskForm = () => {
        let formError = {};
        if (!username) {
            formError.username = 'Please enter your name';
        }
        if (!userAmount) {
            formError.userAmount = 'Please enter your amount';
        }
        return formError;
    };

    const saveTransaction = async (e) => {
        e.preventDefault(); // Prevent form from submitting the traditional way

        const formError = validateTaskForm();
        setFormError(formError);
        if (Object.keys(formError).length === 0) {
            try {
                const response = await fetch('http://localhost:7000/api/payments/submit', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ username, useramount: userAmount }),
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                console.log('Transaction saved:', data);
            } catch (error) {
                console.error('Failed to fetch:', error);
            }
        }
    };

    return (
        <div style={{ minHeight: '100vh', backgroundColor: 'rgba(17, 17, 17, var(--tw-bg-opacity))' }}>
            <div className="container">
                <h4><i style={{ color: '#fff' }}>Enroll Here!</i></h4>
                <div className="card" style={{ width: '30rem', marginLeft: '30%', borderRadius: '20px', marginTop: '5%' }}>
                    <div className="card-body">
                        <form onSubmit={saveTransaction}>
                            <div className="form-group" style={{ padding: '10px' }}>
                                <label>Name:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter your name"
                                    value={username}
                                    onChange={onUsernameChange}
                                />
                                <i style={{ color: 'red' }}>{formError?.username}</i><br />
                            </div>
                            <div className="form-group" style={{ padding: '10px' }}>
                                <label>Amount:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter your amount"
                                    value={userAmount}
                                    onChange={onUserAmountChange}
                                />
                                <i style={{ color: 'red' }}>{formError?.userAmount}</i><br />
                            </div>
                            <button type="submit" className="btn btn-danger" style={{ width: '100px', height: '50px' }}>Submit</button>
                            <Link to="/transactions" className="button" style={{ marginLeft: "10px", borderRadius: "10px", backgroundColor: '#fff', color: '#0f0f0f', textDecoration: 'none' }}>
                                <b>View Transactions</b>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Payment;
