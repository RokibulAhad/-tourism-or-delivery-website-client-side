import React from 'react';
import './AddServices.css';
import { useForm } from "react-hook-form";

const AddServices = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
      console.log(JSON.stringify(data))
      fetch("https://gruesome-labyrinth-21556.herokuapp.com/services", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
      })
      .then()
  };
    return (
        <div>
            <div className="container">
                <h2 className="my-5">Add A Service</h2>
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6 addservice shadow-lg py-4 mt-4">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        
                        <input  {...register("name")} placeholder="Name" />                        
                        
                        <textarea {...register("description", { required: true })} placeholder="Description" />

                        <input  {...register("img")} placeholder="image" /> 
                        <input  {...register("price")} placeholder="Price" /> 
                        
                        {errors.exampleRequired && <span>This field is required</span>}
                        
                        <input type="submit" />
                        </form>
                    </div>
                    <div className="col-md-3"></div>
                </div>

            </div>
            
        </div>
    );
};

export default AddServices;