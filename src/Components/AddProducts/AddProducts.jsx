import React, { useState } from 'react';
import "./addproducts.css"
import Swal from 'sweetalert2';
// import { Rating } from '@smastrom/react-rating'
// import '@smastrom/react-rating/style.css'
import Rating from '@mui/material/Rating';

const AddProducts = () => {
    let [brand, setBrand] = useState("bmw");
    const [rating, setRating] = useState(0);


    let handleAdd = (e) => {
        e.preventDefault();
        let productName = e.target.productname.value;
        let imgUrl = e.target.imgurl.value;
        let productPrice = e.target.price.value
        let productType = e.target.type.value;
        let productDescription = e.target.description.value;
        let product = { productName, brand, imgUrl, productPrice, productType, productDescription, rating };
        console.log(product);

        fetch("http://localhost:5000/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(product),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire(
                        'Good job!',
                        'Product Added Successfully!',
                        'success'
                    )
                    e.target.productname.value = "";
                    e.target.imgurl.value = "";
                    e.target.price.value = "";
                    e.target.type.value = "";
                    e.target.description.value = "";
                }
            });
    };


    let handleBrandChange = (e) => {
        setBrand(e.target.value);
    }

    let handleRatingChange = (e) => {
        setRating(e.target.value);
    }

    return (
        <div className='addBg text-left'>
            <div class="p-8 w-[90%] mx-auto">
                <h1 class="font-medium text-4xl text-center text-[#111230]">Add Your Desired Product</h1>
                <p class="text-[#111230] mt-6 text-center">Please Input details of the product to add it in the product details page</p>

                <form onSubmit={handleAdd}>
                    <div class="mt-8 space-y-6">
                        <div>
                            <label for="name" class="text-sm text-[#111230] block mb-1 font-medium">Product Name</label>
                            <input type="text" name="productname" id="name" class="bg-white border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Enter your Product name" required />
                        </div>
                    </div>


                    <div onChange={handleBrandChange} value={brand} name="brand" class="relative h-10 w-72 min-w-[200px] mt-8">
                        <select class="peer h-full w-full rounded-[7px] border border-[#111230] border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-[#111230]  outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-[#111230] placeholder-shown:border-t-[#111230]  empty:!bg-red-500 focus:border-2 focus:border-[#111230] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50">
                            <option value="bmw">BMW</option>
                            <option value="ford">Ford</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="tesla">Tesla</option>
                            <option value="toyota">Toyota</option>
                            <option value="honda">Honda</option>
                        </select>
                        <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-sm font-medium leading-tight text-[#111230] transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-[#111230]  before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-[#111230] after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-[#111230]  peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#111230] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-[#111230] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-[#111230] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-[#111230] ">
                            Select a Brand
                        </label>
                    </div>

                    <div class="mt-8 space-y-6">
                        <div>
                            <label for="name" class="text-sm text-[#111230] block mb-1 font-medium">Product Image URL</label>
                            <input type="text" name="imgurl" id="name" class="bg-white border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Enter your Product Img URL" required />
                        </div>
                    </div>

                    <div class="mt-8 space-y-6">
                        <div>
                            <label for="name" class="text-sm text-[#111230] block mb-1 font-medium">Product Price</label>
                            <input type="number" name="price" id="name" class="bg-white border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Enter your Product Price" required />
                        </div>
                    </div>

                    <div class="mt-8 space-y-6">
                        <div>
                            <label for="name" class="text-sm text-[#111230] block mb-1 font-medium">Product Type</label>
                            <input type="text" name="type" id="name" class="bg-white border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Enter your Product Type" required />
                        </div>
                    </div>

                    <div class="mt-8 space-y-6">
                        <div>
                            <label for="name" class="text-sm text-[#111230] block mb-1 font-medium">Product Description</label>
                            <input type="text" name="description" id="name" class="bg-white border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Give a short Description of your Product" required />
                        </div>
                    </div>
                    {/* <div class="relative h-10 w-72 min-w-[200px] mt-8">
                        <select onChange={handleRatingChange} value={rating} name="rating" class="peer h-full w-full rounded-[7px] border border-[#111230] border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-[#111230]  outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-[#111230] placeholder-shown:border-t-[#111230]  empty:!bg-red-500 focus:border-2 focus:border-[#111230] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-[#111230] ">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-sm font-medium leading-tight text-[#111230] transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-[#111230]  before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-[#111230] after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-[#111230]  peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#111230] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-[#111230] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-[#111230] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                            Rating in Stars
                        </label>
                    </div> */}
                    <div className='mt-8 space-y-2'>
                        <label for="name" class="text-sm text-[#111230] block mb-1 font-medium">Rating:</label>
                        {/* <Rating style={{ maxWidth: 150 }} value={rating} onChange={setRating} /> */}
                        <Rating
                            size='large'
                            name="simple-controlled"
                            value={rating}
                            onChange={(event, newRating) => {
                                setRating(newRating);
                            }}
                        />
                    </div>

                    <div class="space-x-4 mt-8 flex justify-center">
                        <button type="submit" class="py-3 px-5 bg-[#111230] text-white rounded hover:bg-[#5e5f92]">Add Product</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProducts;