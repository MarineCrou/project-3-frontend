// import { Link } from "react-router-dom";
// import { IProduct } from "../interfaces/productInterface";
// import React from "react";

// export function IndividualProduct({
//   _id,
//   title,
//   image,
//   price,
//   user,
//   description,
//   category,
// }: IProduct) {
//   return (
//     <>
//       <section className="hero is-fullheight">
//         <div className="box is-centered has-background-success-light">
//           <div className="columns is-multiline">
//             <div className="column is-two-fifths">
//               <figure className="image is-full-width">
//                 <img src={image} alt={title} />
//               </figure>
//             </div>
//             <div className="column is-one-third">
//               <div className="content">
//                 <h2 className="is-size-2 has-text-black">{title}</h2>
//                 <h5 className="mt-2 mb-1 has-text-black">Price:</h5>
//                 <div className="has-text-black">£{price}</div>
//                 <h5 className="mt-4 mb-1 has-text-black">Description</h5>
//                 <div className="has-text-black">{description}</div>
//               </div>
//             </div>
//             <div className="column ">
//               <p className="is-pulled-right has-text-black">Category: {category}</p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }



// import React, { SyntheticEvent } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { IProduct } from "../interfaces/productInterface";
// import Product from "./ProductCard";
// import { IUser } from "../interfaces/userInterface";
// import axios from "axios";
// import Checkout from "./Checkout";
// import { Link } from "react-router-dom";
// import {IndividualProduct} from "../components/ShowindividualCard"

// function ShowProduct({ user }: { user: null | IUser }) {
//   const [product, setProducts] = React.useState<IProduct | null>(null);
//   const [purchasedProduct, setPurchasedProduct] = React.useState<string | null>(
//     null
//   );
//   const { productId } = useParams();
//   const navigate = useNavigate();

//   React.useEffect(() => {
//     console.log("An individual product Page has mounted");
//   }, []);

//   React.useEffect(() => {
//     async function fetchProducts() {
//       const resp = await fetch(`/api/products/${productId}`);
//       const productData = await resp.json();
//       setProducts(productData);
//     }
//     fetchProducts();
//   }, []);

//   async function deleteProduct(e: SyntheticEvent) {
//     try {
//       const token = localStorage.getItem("token");
//       await axios.delete("/api/products/" + productId, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       navigate("/products");
//     } catch (e: any) {
//       console.log(e.response.data);
//     }
//   }

//   function editProduct() {
//     <Link to="/edit"></Link>;
//   }

//   function buyButton() {
//     if (productId) {
//       setPurchasedProduct(productId);
//     }
//   }

//   console.log(user);

//   const [sellerName, setSellerName] = React.useState(null);

//   async function fetchSeller() {
//     const res = await fetch(`/api/findSellerName/${productId}`);
//     const userData = await res.json();
//     console.log(userData);
//     setSellerName(userData.userName);
//   }

//   React.useEffect(() => {
//     fetchSeller();
//   }, []);

//   return (
//     <section className="section">
//       <div className="container">
//         <div className="columns is-multiline">
//           {product && <IndividualProduct key={product._id} {...product} />}
//         </div>
        
//         <div className="mb-3">Seller: {sellerName}</div>
//         {product && user?._id === product.user && (
//           <button onClick={deleteProduct} className="button is-danger">
//             Delete
//           </button>
//         )}
//         {product && user?._id === product.user && (
//           <Link to={`/editproduct/${productId}`}>
//             <button className="button is-info">Edit</button>
//           </Link>
//         )}
//         <button onClick={buyButton} className="button is-primary">
//           Buy Now!
//         </button>
//         {purchasedProduct && product && <Checkout {...product} />}
//       </div>
//     </section>
//   );
// }

// export default ShowProduct;