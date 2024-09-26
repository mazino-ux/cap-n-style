/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import MyContext from './myContext';
import { fireDB } from '../../fireabase/FirebaseConfig';
import { Timestamp, addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, orderBy, query, setDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';

function myState(props) {
  const [mode, setMode] = useState('light');  
  const [loading, setLoading] = useState(false); 
  const [sortOption, setSortOption] = useState("Popular");

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(17, 24, 39)';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  const [products, setProducts] = useState({
    title: '',
    price: '',
    imageUrl: '',
    category: '',
    description: '',
    time: Timestamp.now(),
    date: new Date().toLocaleString(
      "en-US",
      {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }
    )
  });

  const addProduct = async () => {
    if (!products.title || !products.price || !products.imageUrl || !products.category || !products.description) {
      return toast.error('Please fill all fields');
    }
    setLoading(true);
    try {
      const productRef = collection(fireDB, "products");
      await addDoc(productRef, products);
      toast.success("Product added successfully");
      getProductData();
      setTimeout(() => {
        window.location.href = '/dashboard'
      }, 900)
      closeModal();
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
    setProducts({
      title: '',
      price: '',
      imageUrl: '',
      category: '',
      description: '',
      time: Timestamp.now(),
      date: new Date().toLocaleString(
        "en-US",
        {
          month: "short",
          day: "2-digit",
          year: "numeric",
        }
      )
    });
  }

  const [product, setProduct] = useState([]);

  const getProductData = async () => {
    setLoading(true);
    try {
      const q = query(
        collection(fireDB, "products"),
        orderBy("time", sortOption === "New" ? "desc" : "asc") // Adjust order by based on sortOption
      );
      const data = onSnapshot(q, (QuerySnapshot) => {
        let productsArray = [];
        QuerySnapshot.forEach((doc) => {
          productsArray.push({ ...doc.data(), id: doc.id });
        });
        setProduct(productsArray);
        setLoading(false);
      });
      return () => data();
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getProductData();
  }, [sortOption]); 

  const edithandle = (item) => {
    setProducts(item)
  }
  
  const updateProduct = async (item) => {
    setLoading(true)
    try {
      await setDoc(doc(fireDB, "products", products.id), products);
      toast.success("Product Updated successfully")
      setTimeout(() => {    
        window.location.href = '/dashboard'
      }, 850)
      getProductData();
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
    setProducts("")
  }

  const deleteProduct = async (item) => {
    try {
      setLoading(true);
      await deleteDoc(doc(fireDB, "products", item.id));
      toast.success('Product Deleted successfully');
      setLoading(false);
      getProductData();
    } catch (error) {
      console.error('Product Deletion Failed:', error); // Log error for debugging
      toast.error('Product Deletion Failed');
      setLoading(false);
    }
  }

  // Function to add a new order to Firestore and update the state
const addOrder = async (newOrder) => {
  setLoading(true);
  try {
    // Add the new order to Firestore
    const orderRef = collection(fireDB, "order");
    await addDoc(orderRef, newOrder);

    // Update the local state with the new order
    setOrder((prevOrders) => [...prevOrders, newOrder]);
    toast.success("Order placed successfully");
  } catch (error) {
    console.error("Error adding order: ", error);
    toast.error("Failed to place order");
  } finally {
    setLoading(false);
  }
};

  const [order, setOrder] = useState([]);

  const getOrderData = async () => {
    setLoading(true)
    try {
      const result = await getDocs(collection(fireDB, "order"))
      const ordersArray = [];
      result.forEach((doc) => {
        ordersArray.push(doc.data());
        setLoading(false)
      });
      setOrder(ordersArray);
      console.log(ordersArray)
      setLoading(false);
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  const [user, setUser] = useState([]);

  const getUserData = async () => {
    setLoading(true)
    try {
      const result = await getDocs(collection(fireDB, "users")) // Ensure correct collection name
      const usersArray = [];
      result.forEach((doc) => {
        usersArray.push({ ...doc.data(), id: doc.id }); 
        setLoading(false)
      });
      setUser(usersArray);
      console.log(usersArray)
      setLoading(false);
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    getProductData();
    getOrderData();
    getUserData();
  }, []);

  const [searchkey, setSearchkey] = useState('')
  const [filterType, setFilterType] = useState('')
  const [filterPrice, setFilterPrice] = useState('')

  return (
    <MyContext.Provider value={{ 
      mode, toggleMode, loading, setLoading,
      products, setProducts, addProduct, product, 
      edithandle, updateProduct, deleteProduct, order, user,
      searchkey, setSearchkey, filterType, setFilterType,
      filterPrice, setFilterPrice, addOrder, sortOption, setSortOption // Provide sortOption and setSortOption
    }}>
      {props.children}
    </MyContext.Provider>
  )
}

export default myState;

