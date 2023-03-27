import { createContext, useState, useEffect } from "react";
import { firestore } from "../lib/firebase";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const unsubscribe = firestore.collection("cart").onSnapshot((snapshot) => {
      const items = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setItems(items);
    });

    return unsubscribe;
  }, []);

  const addItem = (item) => {
    const existingItem = items.find((i) => i.id === item.id);

    if (existingItem) {
      firestore
        .collection("cart")
        .doc(existingItem.id)
        .update({
          quantity: existingItem.quantity + 1,
        });
    } else {
      firestore.collection("cart").add({ ...item, quantity: 1 });
    }
  };

  const removeItem = (itemId) => {
    firestore.collection("cart").doc(itemId).delete();
  };

  const clearCart = () => {
    items.forEach((item) => {
      firestore.collection("cart").doc(item.id).delete();
    });
  };

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Backup

// import { useAuth } from "@/lib/useAuth";
// import { createContext, useState, useEffect } from "react";

// export const CartContext = createContext({
//   isCartOpen: false,
//   items: [],
//   itemsCount: 0,
// });

// export const CartProvider = ({ children }) => {
//   const [isCartOpen, setIsCartOpen] = useState(false);
//   const [items, setItems] = useState([]);
//   const [itemsCount, setItemsCount] = useState(0);
//   // const { user } = useContext(UserContext);
//   // const { user } = useAuth();

//   useEffect(() => {
//     setItemsCount(getItemsCount(items));
//   }, [items]);

//   const getItemsCount = (items) => {
//     return items.length;
//   };

//   const value = {
//     isCartOpen,
//     setIsCartOpen,
//     items,
//     setItems,
//     itemsCount,
//     setItemsCount,
//   };

//   return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
// };
