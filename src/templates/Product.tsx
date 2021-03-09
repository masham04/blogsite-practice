import React from "react";

const Product = ({ pageContext }) => {
  console.log(pageContext)
  const {item} = pageContext
  console.log(item.title)
  return (
    <div>
      <h1>{item.title}</h1>
  
      
    </div>
  );
};

export default Product;
