import React, { useState } from 'react'
import "./InputSection.css"
function InputSection(props) {

const [details, setDeatails] = useState({
    name:"",
    amount:0,
    tipPercent:0,
    totalBill:0,
})
function handleChange(event){
setDeatails({
...details, [event.target.name]:event.target.value 
})
} 
function calculateBill(){
 details.totalBill =  ((details.amount / 100) * details.tipPercent)  
props.AddDetails(details)
}
    return (
        <div className="container">

            <div className="myInput">

                <div class="mb-2 col-md-6 ">
                    <label for="exampleInputName" class="form-label">Enter Your Name : </label>
                    <input name="name" onChange={handleChange} placeholder="Enter Name"  id="billAmount" type="text" class="form-control" required />
                    <span id="span-id"> </span>
                </div>
                <div class="mb-2 col-md-6 ">
                    <label for="exampleInputName" class="form-label">Enter Your Bill Amount : </label>
                    <input onChange={handleChange} name="amount"  min="0" oninput="validity.valid||(value='');" placeholder="Bill Amount"  id="billAmount" type="number" class="form-control" required />
                    <span id="span-id"> </span>
                </div>
                
                <div class="mb-2 col-md-6 ">
                    <label for="exampleInputName" class="form-label">How's The Service ? : </label>
                    <select onChange={handleChange} name="tipPercent" id="tipPercent" class="form-select" aria-label="Default select example">
                        <option selected disabled>Tip Menu</option>
                        <option value="20">Excellent-20%</option>
                        <option value="10">Medium-10%</option>
                        <option value="5">Not good-5%</option>
                    </select>                    
                </div>
                <button onClick={calculateBill}>Add Customer's Name</button>
            </div>
        </div>
    )
}

export default InputSection