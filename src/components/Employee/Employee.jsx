const Employee=({name, email, adress, zipCode, phone})=>{
    return (
        <div style={{border:'2px solid black',width: '70vw',marginTop:25,marginRight:40,padding:20,height: '20vh'}}>
            <h1>Name: {name}</h1>
            <div style={{display:'flex', alignItems:'center',justifyContent:'space-between'}}>
                <h2 >Email: {email}</h2>
                <span style={{display:'inline-block'}}>Zip Code: {zipCode}</span>
            </div>
           <div style={{display:'flex', alignItems:'center',justifyContent:'space-between'}}>
               <h3>Adress: {adress}</h3>
               <span>Phone Number: {phone}</span>
           </div>
        </div>
    )
}

export default Employee;
