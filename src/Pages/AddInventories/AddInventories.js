import React from "react";
import { useForm } from "react-hook-form";
import './AddInventories.css'

const AddInventories = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const url = 'http://localhost:5000/inventory';
        fetch(url, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log('Success:', result);
            })
        console.log(data)
    }
    return (

        <div className='w-4/6 mx-auto addInventory-container'>
            <h2>Please add a service</h2>
            <div className="w-4/6 mx-auto">
                <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                    <input className='mb-2' placeholder='email' type="email" {...register("email")} />
                    <input className='mb-2' placeholder='name' type="text" {...register("name")} />
                    <textarea className='mb-2' placeholder='Description' {...register("description")} />
                    <input className='mb-2' placeholder='price' type="number" {...register("price")} />
                    <input className='mb-2' placeholder='quantity' type="number" {...register("quantity")} />
                    <input className='mb-2' placeholder='Photo url' type="text" {...register("img")} />
                    <input className='mb-2' placeholder='supplierName' type="text" {...register("supplierName")} />

                    <button class="btn btn-wide">Add Inventory</button>
                </form>
            </div>
        </div>

    );
};

export default AddInventories;