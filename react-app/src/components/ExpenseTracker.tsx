import React, { FormEvent, useRef, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Dropdown from "./Dropdown";

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Description must be at least 3 characters long." }),
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters long." }),
  amount: z.number({ invalid_type_error: "amount field is required." }).min(18), // Optional field
  category: z.string()
});

type FormData = z.infer<typeof schema>;

const ExpenseTracker = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="container mt-5">
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          description
        </label>
        <input
          {...register("description")} // This is how you can register the input with react-hook-form
          id="description"
          type="text"
          className="form-control"
        />
        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          {...register("amount", { valueAsNumber: true })} // Registering with value as number
          id="amount"
          type="number"
          className="form-control"
        />
        {errors.amount && (
          <p className="text-danger">{errors.amount.message}</p>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <Dropdown items={["First","Second"]} onSelectItem={(e) => {console.log(e)}} />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default ExpenseTracker;
