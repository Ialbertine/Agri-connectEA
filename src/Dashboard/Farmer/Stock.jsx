import React, { useEffect, useState } from 'react';
import { VscLoading } from "react-icons/vsc";
import { TbMoodSad } from "react-icons/tb";
import { IoMdClose } from "react-icons/io";

const Stock = () => {
  const [stock, setStock] = useState([]);
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deletingStockId, setDeletingStockId] = useState(null);
  const [editingStockId, setEditingStockId] = useState(null);
  const [updatedData, setUpdatedData] = useState({});
  const [currentStockId, setCurrentStockId] = useState(null); // New state to track the current stock ID being edited

  useEffect(() => {
    const fetchStock = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          return;
        }

        const response = await fetch('https://agrisokoconnect-backend-ipza.onrender.com/AgriSoko/stock/retrieve/', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error('Network error!');
        }

        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          const data = await response.json();
          if (data && Array.isArray(data.data)) {
            setStock(data.data);
          } else {
            throw new Error('Response data does not contain stocks');
          }
        } else {
          throw new Error('Response is not in JSON format');
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStock();
  }, []);

  const handleDeletestock = async (stockId) => {
    try {
      setDeletingStockId(stockId);
      const token = localStorage.getItem("token");
      if (!token) {
        setError('No token found, please log in');
        return;
      }
      const response = await fetch(`https://agrisokoconnect-backend-ipza.onrender.com/AgriSoko/stock/delete/${stockId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to delete stock: ${response.statusText}`);
      }

      setStock((prevStock) => prevStock.filter((item) => item._id !== stockId));
    } catch (error) {
      setError(error.message);
    } finally {
      setDeletingStockId(null);
    }
  };

  const toggleModal = (item) => {
    if (item) {
      setCurrentStockId(item._id); // Set the current stock ID being edited
      setUpdatedData({
        NameOfProduct: item.NameOfProduct,
        typeOfProduct: item.typeOfProduct,
        description: item.description,
        quantity: item.quantity,
        pricePerTon: item.pricePerTon
      });
    }
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add('active-modal');
  } else {
    document.body.classList.remove('active-modal');
  }

  const handleUpdateStock = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setError('No token found, please log in');
        return;
      }
      const response = await fetch(`https://agrisokoconnect-backend-ipza.onrender.com/AgriSoko/stock/update/${currentStockId}`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedData),
      });

      if (!response.ok) {
        throw new Error(`Failed to update stock: ${response.statusText}`);
      }

      setStock((prevStock) =>
        prevStock.map((item) =>
          item._id === currentStockId ? { ...item, ...updatedData } : item
        )
      );
      setEditingStockId(null);
      setUpdatedData({});
      setModal(false);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData((prevData) => ({ ...prevData, [name]: value }));
  };

  if (loading) {
    return (
      <div className='flex flex-col px-10'>
        <div className='py-10 flex justify-center gap-5'>
          <strong>My Stock</strong>
        </div>
        <div>
          <p className='text-xl'>This is what you have in stock:</p>
        </div>
        <div className='px-5 flex gap-5'></div>
        <div className='pt-20 flex justify-center gap-5 text-xl h-[80vh] text-black font-semibold'>
          <VscLoading className='animate-spin' />
          <p>Loading</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className='pt-20 flex justify-center items-center gap-5 text-xl h-[80vh] text-black font-semibold'>
        <TbMoodSad />
        <p>{error}</p>
      </div>
    );
  }

  if (!Array.isArray(stock) || stock.length === 0) {
    return (
      <div className='pt-20 flex justify-center items-center gap-5 text-xl h-[80vh] text-black font-semibold'>
        <p>No stock available.</p>
      </div>
    );
  }

  return (
    <div className='flex flex-col px-10'>
      <div className='py-10 flex justify-center gap-5'>
        <strong>My Stock</strong>
      </div>
      <div>
        <p className='text-xl'>This is what you have in stock:</p>
      </div>
      <div className='px-5 pt-3 flex gap-5'>
        <ul>
          {stock.map((item) => (
            <li key={item._id} className='border-b flex gap-5 items-center border-gray-200 py-4'>
              <strong className='pr-5 w-[15vh] '>{item.NameOfProduct}<img src={item.image} className='rounded-sm pt-1 object-cover w-[15vh] h-[10vh]'></img></strong>
              <div className='w-[30vh]'>{item.typeOfProduct}</div>
              <div className='w-[35vh]'>{item.description}</div>
              <div className='w-[15vh]'>{item.quantity} tons</div>
              <div className='w-[15vh]'>{item.pricePerTon} RWF</div>
              <div className='flex flex-col gap-2'>
                <button className='text-white rounded-lg px-3 hover:bg-[#269553] bg-[#2d7a4a] py-1 text-lg w-[13vh]'
                  onClick={() => toggleModal(item)}
                >
                  Update
                </button>
                <button
                  className='text-white rounded-lg px-3 hover:bg-orange-900 bg-[#b63636] py-1 text-center text-lg w-[13vh]'
                  onClick={() => handleDeletestock(item._id)}
                  disabled={deletingStockId === item._id}
                >
                  {deletingStockId === item._id ? (
                    <VscLoading className='animate-spin' />
                  ) : (
                    'Delete'
                  )}
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {modal && (
        <div className="modal mt-20">
          <div onClick={() => toggleModal()} className="overlay"></div>
          <div className="modal-content py-10 bg-slate-50">
            <strong>Update my stock</strong>

            <div className='flex flex-col w-full gap-2'>
              <label className='mt-5 pl-2'>Product name:</label>
              <input
                type="text"
                name="NameOfProduct"
                placeholder="Name of Product"
                value={updatedData.NameOfProduct || ''}
                onChange={handleChange}
                className="rounded-lg py-2 px-4 text-black w-[30rem] border-2"
              />
              <label className='pl-2'>Type of product</label>
              <input
                type="text"
                name="typeOfProduct"
                placeholder="Type of Product"
                value={updatedData.typeOfProduct || ''}
                onChange={handleChange}
                className="rounded-lg py-2 px-4 text-black w-[30rem] border-2"
              />
              <label className='pl-2'>Description</label>
              <input
                type="text"
                name="description"
                placeholder="Description"
                value={updatedData.description || ''}
                onChange={handleChange}
                className="rounded-lg py-2 px-4 text-black w-[30rem] border-2"
              />
              <label className='pl-2'>Quantity</label>
              <input
                type="number"
                name="quantity"
                placeholder="Quantity"
                value={updatedData.quantity || ''}
                onChange={handleChange}
                className="rounded-lg py-2 px-4 text-black w-[30rem] border-2"
              />
              <label className='pl-2'>Price per ton</label>
              <input
                type="number"
                name="pricePerTon"
                placeholder="Price Per Ton"
                value={updatedData.pricePerTon || ''}
                onChange={handleChange}
                className="rounded-lg py-2 px-4 text-black w-[30rem] border-2"
              />
              <button
                className='text-white rounded-lg px-3 hover:bg-[#269553] bg-[#2d7a4a] py-1 text-lg w-[20vh] mt-3'
                onClick={handleUpdateStock}
                disabled={loading}
              >
                {!loading && "Save Updates"}
                {loading && "Saving..."}
              </button>
            </div>

            <button className="close-modal" onClick={() => toggleModal()}>
              <IoMdClose />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Stock;
