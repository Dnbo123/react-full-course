import React, {useState} from 'react'

function MyComponent() {
   const [name, setName] = useState();
   const [value, setValue] = useState();
   const [area, setArea] = useState();
   const [comment, setComment] = useState();
   const [payment, setPayment] = useState();
   const [shipping, setShipping] = useState();


   function handleNameChange(event){
    setName(event.target.value);
   }

   function handleValueChange(event){
    setValue(event.target.value);
   }
   function handleAreaChange(event){
    setArea(event.target.value);
   }
   function handleCommentChange(event){
    setComment(event.target.value);
   }
   function handlePaymentChange(event){
    setPayment(event.target.value);
   }
   function handleShippingChange(event){
    setShipping(event.target.value);
   }
    
    return(
   <div>
    <input type="text" placeholder="Name" value={name} onChange={handleNameChange} />
    <p>name: {name}</p>

    <input type="number" placeholder="  Age" value={value} onChange={handleValueChange} />
    <p>Age: {value}</p>

    <input type="alphanumeric" placeholder="Area" value={area} onChange={handleAreaChange} />
    <p>Area: {area}</p>

    <textarea placeholder="Delivery instructions" value={comment} onChange={handleCommentChange}/>
    <p>Delivery instructions: {comment}</p>

    <select value={payment} onChange={handlePaymentChange}>
         <option value="">Select Option</option>
         <option value="Cash">Cash</option>
         <option value="Mpesa">Mpesa</option>
         <option value="Stripe">Stripe</option>
         <option value="MasterCard">Master Card</option>
    </select>
    <p>Payment: {payment}</p>

    <label>
        <input type="radio" value="Pick up"
        checked={shipping === "Pick up"}
         onChange={handleShippingChange} />
         Pick up
    </label>
<br/>
    <label>
        <input type="radio" value="Delivery"
        checked={shipping === "Delivery"}
         onChange={handleShippingChange} />
         delivery
    </label>
    <p>Shipping: {shipping}</p>
   </div>
    );
}

export default MyComponent;