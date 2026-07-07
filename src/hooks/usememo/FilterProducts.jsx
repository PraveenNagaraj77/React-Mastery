import React, { useMemo, useState } from 'react'

const FilterProducts = () => {
    const [search,setSearch] = useState("");
    const [darkMode,setDarkMode] = useState(false);
    
    const products = [
        "Laptop",
    "Mobile",
    "Keyboard",
    "Mouse",
    "Monitor",
    "Laptop Stand",
    "Gaming Laptop",
    "Headphones",
    "Webcam",
    "Speaker"
    ]

//    const filteredProducts = products.filter(product=>{
//     console.log("Filtering Products : ",product);
//     return product.toLowerCase().includes(search.toLowerCase());
//    })

   const filteredProducts = useMemo(()=>{
    console.log("Filtering Products...");
    return products.filter(product=>product.toLowerCase().includes(search.toLowerCase()))
   },[search]);

    

  return (
    <div>
        <h1>Filter Products</h1>

        <input type="text" placeholder='Search' value={search} onChange={(e)=>setSearch(e.target.value)} />
        <br /><br />

        <button onClick={()=>setDarkMode(!darkMode)}>Toggle Theme</button>

        <hr />
        {
            filteredProducts.map(product=>(
                <h3 key={product}>{product}</h3>
            ))
        }
    </div>
  )
}

export default FilterProducts