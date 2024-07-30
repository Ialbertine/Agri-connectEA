import React, { useEffect, useState } from 'react';
import { LiaCameraRetroSolid } from "react-icons/lia";
import { TbInfoTriangleFilled } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';

const UploadProduct = () => {
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState({ type: '', content: '' });
  const [loading, setLoading] = useState(false);
  const [uploads, setUploads] = useState({
    NameOfProduct: '',
    description: '',
    pricePerTon: '',
    quantity: '',
    typeOfProduct: ''
  });
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const token = localStorage.getItem("token");
      const formData = new FormData();
      formData.append("NameOfProduct", uploads.NameOfProduct);
      formData.append("description", uploads.description);
      formData.append("pricePerTon", uploads.pricePerTon);
      formData.append("quantity", uploads.quantity);
      formData.append("typeOfProduct", uploads.typeOfProduct);
      formData.append("image", image);

      console.log('Submitting form data:', formData);

      const response = await fetch(`https://agrisokoconnect-backend-ipza.onrender.com/AgriSoko/stock/add`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData
      });

      // if (!response.ok) {
      //   const errorDetails = await response.text();
      //   console.error('Error details:', errorDetails);
      //   throw new Error('Network response was not ok');
      // }

      const data = await response.data;
      console.log(data);
      setMessage({ type: 'success', content: 'Stock added successfully' });
      navigate('/dashboard/farmer/stock')
    } catch (error) {
      console.error("Error uploading to stock:", error);
      setMessage({ type: 'error', content: 'Failed to upload stock' });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let timeout;
    if (message.content) {
      timeout = setTimeout(() => {
        setMessage({ type: '', content: '' });
      }, 20000);
    }
    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [message]);

  return (
    <div className='p-5 bg-[#f2f2f2] flex flex-col gap-10 pb-20'>
      <div className="flex justify-center">
        <strong className='text-xl'>Upload My Harvest</strong>
      </div>
      <div className=' flex items-end gap-5 pl-40 pt-5'>
        <TbInfoTriangleFilled className='text-6xl text-red-800 animate-pulse' />
        <p className='text-2xl w-[55%]'> Please upload your products only when you have a new, unstocked harvest!</p>
      </div>
      <div className='flex gap-10 justify-center items-start pt-5'>
        <div className=''>
          <form onSubmit={handleSubmit} className='flex gap-10 pt-4'>
            <div className='flex flex-col gap-3 w-[70vh]'>
              <strong>Harvest information</strong>
              <input type='text' placeholder='Product name' value={uploads.NameOfProduct}
                onChange={(e) => setUploads({ ...uploads, NameOfProduct: e.target.value })}
                className='px-5 py-3 border-2 rounded-lg' required>
              </input>

              <input type='text' placeholder="Type of product (ubwoko bw'igihingwa wahinze)" value={uploads.typeOfProduct}
                onChange={(e) => setUploads({ ...uploads, typeOfProduct: e.target.value })}
                className='px-5 py-3 border-2 rounded-lg' required>
              </input>

              <input type='text' placeholder='Description' value={uploads.description}
                onChange={(e) => setUploads({ ...uploads, description: e.target.value })}
                className='px-5 py-3 border-2 rounded-lg' required>
              </input>

              <input type='number' placeholder='Quantity' value={uploads.quantity}
                onChange={(e) => setUploads({ ...uploads, quantity: e.target.value })}
                className='px-5 py-3 border-2 rounded-lg' required>
              </input>

              <input type='number' placeholder='Price per ton' value={uploads.pricePerTon}
                onChange={(e) => setUploads({ ...uploads, pricePerTon: e.target.value })}
                className='px-5 py-3 border-2 rounded-lg' required>
              </input>

              <button className='text-white rounded-lg px-3 hover:bg-[#269553] bg-[#2d7a4a] p-1 py-2 text-lg w-[23vh]' type='submit' disabled={loading}>
                {!loading && "Upload to stock"}
                {loading && "Uploading ..."}
              </button>
            </div>
            <div>
              <div className='flex flex-col gap-4'>
                <strong>Harvest image</strong>

                <LiaCameraRetroSolid className='text-4xl' />
                <input
                  type='file'
                  name='file'
                  onChange={handleFileChange}
                  required
                />
              </div>
              <div className='pt-3'>
                {/* image preview */}
                {image && <img src={URL.createObjectURL(image)} alt="Preview" width="300" />}
              </div>
            </div>
          </form>
        </div>
      </div>
      {message.content && (
        <div className={`message ${message.type === 'error' ? 'error' : 'success'}`}>
          {message.content}
        </div>
      )}
    </div >
  );
}

export default UploadProduct;
