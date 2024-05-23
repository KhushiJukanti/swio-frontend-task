import React, { useState, useEffect } from 'react';
// Add CSS for styling

function Transactions() {
    const [transactions, setTransactions] = useState([]);

    const getAllTransactions = () => {
        fetch("https://swio-backend-pu9q.onrender.com/api/payments/view")
            .then((res) => res.json())
            .then((result) => {
                setTransactions(result);
            })
            .catch((error) => {
                console.error('Error fetching transactions:', error);
            });
    };

    useEffect(() => {
        getAllTransactions();
    }, []);

    return (
        <div >
            <div className="transaction-container">
                {transactions.length === 0 && <h4 className='mt-4' >Currently No transactions Available</h4>}
                <div className='row'>


                    {transactions.map((item) => (
                        <div className='col-md-3 mt-5' key={item.transactionId}>
                            <div className="card task-card" type="button" style={{ boxShadow: 'rgba(0, 0, 0, 0.12) 0px 4px 16px', marginLeft: '50px' }}>
                                <img style={{ minHeight: '50px', width: '60%', borderRadius: '10px', marginLeft: '60px' }} src='https://www.ihna.edu.au/blog/wp-content/uploads/2022/10/user-dummy-800x789.png' className="card-img-top" alt="logo" />
                                <div className="card-body">
                                    <h5 className="card-title">Name: {item.username}</h5>
                                    <h5 className="card-title">Amount: {item.useramount}</h5>

                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <h6 className='card-text'>Transaction ID: {item.transactionId}</h6>



                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Transactions;
