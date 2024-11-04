import React from "react";
import Card from "./Card";
import { useState, useEffect } from "react";

const Body = () => {
    const [productlist, setProductlist] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch("http://localhost:5000/api/products");
            console.log("Json Response: "+response);
            const data = await response.json();
            console.log("Json data: "+data);
            setProductlist(data); 
        };
        fetchProducts();
    }, []);

    return (
        <div className="body">
            <div className="container">
                {productlist.map((product) => (
                    <Card key={product.id} data={product} />
                ))}
            </div>
        </div>
    );
};

export default Body;
