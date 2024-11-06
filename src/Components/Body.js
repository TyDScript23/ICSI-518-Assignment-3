import React from "react";
import Card from "./Card";
import { useState, useEffect } from "react";


//represents the body of the webpage, containing the product cards
const Body = () => {
    //state to hold the list of products
    const [productlist, setProductlist] = useState([]);

    //fetch the products from the server and update the state with the fetched data
    useEffect(() => {
        //fetch the products from the server using fetch API
        const fetchProducts = async () => {
            //get request from the server to fetch the products
            const response = await fetch("http://localhost:5000/api/products");
            console.log("Json Response: "+response);
            //convert the response to json format
            const data = await response.json();
            console.log("Json data: "+data);
            //update the state with the fetched data
            setProductlist(data); 
        };

        //call the fetchProducts function when the component mounts
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

//export the Body component for use in other files
export default Body;
