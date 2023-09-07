import { createContext, useContext, useState } from "react"
import React from "react";
import { ProductProps } from "../types/product";

type ContextType = {
    savedProducts: ProductProps[];
    addProduct: (product: ProductProps | null) => void;
    removeProductById: (id: string | undefined) => void;
    isFavorite: (id: string | undefined) => boolean
}

const Context = createContext<ContextType | undefined>(undefined);

export const useMyContext = () => {
    const context = useContext(Context);

    if(!context) {
        throw new Error('Something went wrong in useContext');
    }

    return context;
}

export const ContextProvider = ({children}: {children: React.ReactNode}) => {
    const [savedProducts, setSavedProducts] = useState<ProductProps[]>([]);

    const addProduct = (product: ProductProps | null) => {
        if(!product) {
            return;
        }
        setSavedProducts(previous => [...previous, product]);
    }

    const removeProductById = (id: string | undefined) => {
        if(!id) {
            return;
        }
        setSavedProducts(previous => {
            return previous.filter(product => product.id !== parseInt(id));
        })
    }

    const isFavorite = (id: string | undefined) => {
        if(!id) return false;
        return savedProducts.some(el => el.id == parseInt(id));
    }   

    return <Context.Provider value={{savedProducts, addProduct, removeProductById, isFavorite}}>{children}</Context.Provider>
}