import { useState } from 'react'

function ProductForm() {
const [name, setName] = useState('');
const [price, setPrice] = useState('');
const [description, setDescription] = useState('');
const [category, setCategory] = useState('');
const [stock, setStock] = useState('');
const [tags, setTags] = useState('');
const [email, setEmail] = useState('');

const [image, setImage] = useState([]);
const [preview, setPreview] = useState(null);
const handlesubmit = (e) => {
  e.preventDefault();
  // Add your form submission logic here
  console.log({
    name,
    price,
    description,
    category,
    stock,
    tags,
    email,
    image,
    preview
  });
}


  return (
    <div>
        <form onSubmit={handlesubmit}>
            <div>
                <label htmlFor="">Email</label>
                <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email} required placeholder='Enter your email' />
            </div>
            <div>
                <label htmlFor="">Name</label>
                <input type="text" onChange={(e)=>setName(e.target.value)} value={name} required placeholder='Enter your name' />
            </div>
            <div>
                <label htmlFor="">Tag</label>
                <input type="text" onChange={(e)=>setTags(e.target.value)} value={tags} required placeholder='Enter tag' />
            </div>
            <div>
                <label htmlFor="">Category</label>
                <input type="text" onChange={(e)=>setCategory(e.target.value)} value={category} required placeholder='Enter category' />    
            </div>
            <div>
                <label htmlFor="">Stock</label>
                <input type="number" onChange={(e)=>setStock(e.target.value)} value={stock} required placeholder='Enter stock' />
            </div>
            <div>
                <label htmlFor="">Price</label>
                <input type="number" onChange={(e)=>setPrice(e.target.value)} value={price} required placeholder='Enter price' />
            </div>
            <div>
                <label htmlFor="">Description</label>
                <input type="text" onChange={(e)=>setDescription(e.target.value)} value={description} required placeholder='Enter description' />
            </div>
            <div>
                <label htmlFor="">Preview</label>
                <input type="file" onChange={(e)=>setPreview(e.target.files[0])} required />
            </div>
            <div>
                <label htmlFor="">Image</label>
                <input type="file" onChange={(e)=>setImage(e.target.files[0])} required />
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    </div>
  )
}

export default ProductForm