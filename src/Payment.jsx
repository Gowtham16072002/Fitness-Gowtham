import React, { useState } from 'react'
import './Styles/Payment.css'

function Payment() {

    const [method, setMethod] = useState("card");
    const [cardNumber, setCardNumber] = useState("");
    const [cvv, setCvv] = useState("");
    const [upi, setUpi] = useState("");
    const [error, setError] = useState("");
    const [expiry, setExpiry] = useState("");


    // card number formatting

    const handleCardNumber = (e) => {
        let value = e.target.value.replace(/\D/g, "");
        value = value.substring(0, 16);
        value = value.replace(/(.{4})/g, "$1 ").trim();
        setCardNumber(value);
    }

    const handleCvv = (e) => {
        let value = e.target.value.replace(/\D/g, "");
        value = value.substring(0, 3);
        setCvv(value);
    }

    const validateUpi = (upiId) => {
        const upiRegex = /^[a-zA-Z0-9.\-_]{2,}@[a-zA-Z]{2,}$/;
        return upiRegex.test(upiId);
    };

    const validateExpiry = (date) => {
        if (!/^\d{2}\/\d{2}$/.test(date)) return false;

        const [month, year] = date.split("/").map(Number);

        if (month < 1 || month > 12) return false;

        const currentDate = new Date();
        const currentYear = currentDate.getFullYear() % 100; // last 2 digits
        const currentMonth = currentDate.getMonth() + 1;

        if (year < currentYear) return false;
        if (year === currentYear && month < currentMonth) return false;

        return true;
    };

    const handleExpiry = (e) => {
        let value = e.target.value.replace(/\D/g, ""); // remove non-numbers

        if (value.length >= 3) {
            value = value.substring(0, 4);
            value = value.replace(/(\d{2})(\d{1,2})/, "$1/$2");
        }

        setExpiry(value);
    };

    const handleConfirm = () => {
        setError("");
        if (method == "card") {
            if (cardNumber.length !== 19) {
                setError("Invalid card number");
                return;
            }
            if (!validateExpiry(expiry)) {
                setError("Card is expired or invalid expiry date");
                return;
            }
            if (cvv.length !== 3) {
                setError("CVV must be 3 digits");
                return;
            }
        }
        if (method == "upi") {
            if (!validateUpi(upi)) {
                setError("Invalid UPI ID");
                return;
            }
        }
        // if (!validateExpiry(expiry)) {
        //     setError("Card is expired or invalid expiry date");
        //     return;
        // }
        alert("Payment Successful");
    }

    return (
        <div className='payment-container'>
            <h2>Payment</h2>



            {/* Payment method selection */}

            <div className='payment-methods'>

                {/* <div className={'method ${method === "card" ? "active" : ""}'}
              onClick={()=>setMethod("card")}>
                  Card
              </div> */}

                {/* <div className="method"
              onClick={()=>setMethod("card")}>
                  Card
              </div> */}

                {/* <div className={'method ${method === "upi" ? "active" : ""}'}
               onClick={()=>setMethod("upi")}>
                  Upi
              </div> */}

                {/* <div className="method"
               onClick={()=>setMethod("upi")}>
                  Upi
              </div> */}
            </div>

            {/* Card Details */}

            {method == "card" && (
                <div className='form'>

                    <h5>Payment method : Card</h5>

                    <label>Card holder name</label>
                    <input 
                        type="text"
                        placeholder='eg. Enter your name' />

                    <label>Card number</label>
                    <input 
                        type="text"
                        value={cardNumber}
                        onChange={handleCardNumber}
                        placeholder='XXXX XXXX XXXX XXXX' />

                    <div className='row'>
                        <div>
                            {/* <label>Exp date</label>
                    <input type="text" placeholder='eg. 10/10' /> */}
                            <label>Expiry Date</label>
                            <input
                                type="text"
                                value={expiry}
                                onChange={handleExpiry}
                                placeholder="MM/YY"
                            />
                        </div>

                        <div>
                            <label>CVV</label>
                            <input 
                                type="text"
                                value={cvv}
                                onChange={handleCvv}
                                placeholder='eg. 123' />
                        </div>
                    </div>
                    {error && <p style={{ color: "red" }}>{error}</p>}
                    <div className="change-payment-method">If You try with Upi <span onClick={() => { setMethod("upi") }}>Click here</span></div>

                </div>

            )}
            {/* Upi details */}

            {method == "upi" && (
                <div className='form'>

                    <h5>Payment method : Upi</h5>

                    <label>
                        UPI ID
                    </label>
                    <input 
                        type="text"
                        value={upi}
                        onChange={(e) => setUpi(e.target.value)}
                        placeholder='example@upi' />
                    {error && <p style={{ color: "red" }}>{error}</p>}
                    <div className='change-payment-method'>If you try with card <span onClick={() => { setMethod("card") }}>Click here</span></div>
                </div>
            )}
            <button className='confirm-btn' onClick={handleConfirm}>Confirm Payment</button>


        </div>
    )
}

export default Payment

// import React, { useState } from "react";
// import "./Payment.css";

// function Payment() {
//   const [method, setMethod] = useState("card");
//   const [cardNumber, setCardNumber] = useState("");
//   const [cvv, setCvv] = useState("");
//   const [upi, setUpi] = useState("");
//   const [error, setError] = useState("");

//   // 🔹 Card Number Formatting
//   const handleCardNumber = (e) => {
//     let value = e.target.value.replace(/\D/g, ""); // remove non-numbers
//     value = value.substring(0, 16); // max 16 digits
//     value = value.replace(/(.{4})/g, "$1 ").trim(); // add space every 4 digits
//     setCardNumber(value);
//   };

//   // 🔹 CVV Validation (3 digits only)
//   const handleCvv = (e) => {
//     let value = e.target.value.replace(/\D/g, "");
//     value = value.substring(0, 3);
//     setCvv(value);
//   };

//   // 🔹 UPI Validation
//   const validateUpi = (upiId) => {
//     const upiRegex = /^[a-zA-Z0-9.\-_]{2,}@[a-zA-Z]{2,}$/;
//     return upiRegex.test(upiId);
//   };

//   // 🔹 Confirm Button
//   const handleConfirm = () => {
//     setError("");

//     if (method === "card") {
//       if (cardNumber.length !== 19) {
//         setError("Invalid card number");
//         return;
//       }
//       if (cvv.length !== 3) {
//         setError("CVV must be 3 digits");
//         return;
//       }
//     }

//     if (method === "upi") {
//       if (!validateUpi(upi)) {
//         setError("Invalid UPI ID");
//         return;
//       }
//     }

//     alert("Payment Successful ✅");
//   };

//   return (
//     <div className="payment-container">
//       <h2>Payment</h2>

//       {/* Payment Method Selection */}
//       <div className="payment-methods">
//         <div
//           className={`method ${method === "card" ? "active" : ""}`}
//           onClick={() => setMethod("card")}
//         >
//           💳 Card
//         </div>

//         <div
//           className={`method ${method === "upi" ? "active" : ""}`}
//           onClick={() => setMethod("upi")}
//         >
//           📱 UPI
//         </div>
//       </div>

//       {/* CARD FORM */}
//       {method === "card" && (
//         <div className="form">
//           <label>Card Number</label>
//           <input
//             type="text"
//             value={cardNumber}
//             onChange={handleCardNumber}
//             placeholder="1234 5678 9012 3456"
//           />

//           <div className="row">
//             <div>
//               <label>CVV</label>
//               <input
//                 type="text"
//                 value={cvv}
//                 onChange={handleCvv}
//                 placeholder="123"
//               />
//             </div>
//           </div>
//         </div>
//       )}

//       {/* UPI FORM */}
//       {method === "upi" && (
//         <div className="form">
//           <label>UPI ID</label>
//           <input
//             type="text"
//             value={upi}
//             onChange={(e) => setUpi(e.target.value)}
//             placeholder="example@upi"
//           />
//         </div>
//       )}

//       {error && <p style={{ color: "red" }}>{error}</p>}

//       <button className="confirm-btn" onClick={handleConfirm}>
//         Confirm Payment
//       </button>
//     </div>
//   );
// }

// export default Payment;

