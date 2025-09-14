import axios, {CanceledError} from "axios";
import { useEffect, useState } from "react";

export default axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export { CanceledError };