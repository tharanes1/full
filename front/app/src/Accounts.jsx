import React, { useEffect, useState } from 'react'

    function Accounts() {
        const [products,setProducts]=useState([]);
        const [inputTxt,setInputTxt]=useState("");
        useEffect   (()=>{
            fetch("http://localhost:8080/products")
            .then((data)=>data.json())
            .then((data)=>setProducts(data))
            .catch((err)=>console.log(err.message));
        },[]);
        function handleDelete(id){
            fetch(`http://localhost:8080/product/${id}`,{method:"DELETE"})
            .then((data)=>{
            if(data.ok){
                const delProducts=products.filter((product)=>product.id!=id);
                setProducts(delProducts);
            }
            else{
                console.error("something went wrong");
            }
        })
        .catch((err)=>{console.log(err.message)});
        }
        function handleAdd(){
            if(!inputTxt.trim()){
                alert("enter a value");
                return;
            }
            const newProduct={
                name:inputTxt
            };
            fetch("http://localhost:8080/add",{
                method:'POST',
                headers: {
        'Content-Type': 'application/json'},
                body:JSON.stringify(newProduct)
            }).then((data)=>{
                if(data.ok){ return data.json();}
                else{
                    throw new Error("failed");
                }
            })
            .then((data)=>{
                setProducts((prev)=>[...prev,data]);
                setInputTxt("");
            })
            .catch((err)=>{console.log(err.message)});
        }

    return (
        <div className='ned'>
            <div className='jon'>
            <table>
                <thead>
                    <tr>
                        <th>accounts</th>
                        <th><input type='type' id='txtbox' value={inputTxt} onChange={(e)=>{setInputTxt(e.target.value)}}/></th>
                        <th><button className='btn btn-success' onClick={handleAdd}>add</button></th>
                    </tr>
                </thead>
                <tbody>
                        {products.map((product,index)=>{
                            return (
                            <tr id='index'>
                                <td>{product.name}</td>
                                <td><button className='btn btn-danger btn-sm' onClick={()=>handleDelete(product.id)}>delete</button></td>
                            </tr>
                            );
                        })}
                </tbody>
            </table>
            </div>
        </div>
    )
    }

    export default Accounts