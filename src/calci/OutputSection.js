import React, { useState } from 'react'
import "./OutputSection.css"
function OutputSection(props) {

const [show,setShow] = useState(false)

function totalTipCustomer(){

    setShow(true)
}

    return (

        <div>
           
            <div className=" myOutput">

                <h2 className="h2">LIST OF CUSTOMERS</h2>

              
                <div >

                    <table className="tt ">
                        
                         <tbody>
                            {
                                
                                props.data.map((element, index) => (
                                    <tr>
                                        <th scope="row">{index+1}.</th>
                                                    <td>{element.name}</td>                                       
                                                    <td> Paid Tip {element.totalBill.toFixed(2)} $.</td>                                    
                                    </tr>
                                ))
                            }



                        </tbody> 

                    </table>
                </div>
                 <h4>Total Tip</h4>                
                <div >
                    Total Customer :   
                        {
                        show ? props.data.length : ''
                        }
                            
                        
                        &nbsp; Total Tip:
                        ${
                        show ? props.data.reduce((acc,element)=> {acc += element.totalBill; acc.toFixed(); return acc },0).toFixed(2) : ''
                        } 
                         .                                               
                </div>
                <button onClick={totalTipCustomer}>CALCULATE TIP</button>
            </div>
        </div>
    )
}

export default OutputSection