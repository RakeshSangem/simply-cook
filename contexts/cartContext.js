
import { useAuth } from "@/lib/useAuth";
import { createContext, useState, useEffect } from "react";
import { onSnapshot, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

export const CartContext = createContext({
  isCartOpen: false,
  items: [],
  itemsCount: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [items, setItems] = useState([]);
  const [itemsCount, setItemsCount] = useState(0);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      const unsubscribe = onSnapshot(doc(db, "users", user.uid), (doc) => {
        if (doc.exists()) {
          const userData = doc.data();
          const ingredients = userData.ingredients;
          if (ingredients) {
            setItems(ingredients);
            setItemsCount(ingredients.length);
          }
        }
      });
      return () => unsubscribe();
    } else {
      setItems([]);
      setItemsCount(0);
    }
  }, [user]);

  const removeIngredient = async (item) => {
    try {
      // const user = useAuth().user;
      if (!user) {
        return;
      }

      const userDocRef = doc(db, "users", user.uid);
      const docSnapshot = await getDoc(userDocRef);
      if (!docSnapshot.exists()) {
        return;
      }

      const userData = docSnapshot.data();
      const updatedIngredients = userData.ingredients.filter(
        (ingredient) => ingredient !== item
      );
      await updateDoc(userDocRef, { ingredients: updatedIngredients });

      setItems(updatedIngredients);
      setItemsCount(updatedIngredients.length);
    } catch (error) {
      console.error(error);
    }
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    items,
    setItems,
    itemsCount,
    setItemsCount,
    removeIngredient,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
