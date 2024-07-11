import React, { useEffect, useState } from "react";
import { fetchProducts } from "../api";
import ProductList from "../components/ProductList";
import Filter from "../components/Filter";

const AllProductsPage = () => {
    const [products, setProducts] = useState([]);
    const [filters, setFilters] = useState({});

    useEffect(() => {
        const getProducts = async () => {
            const data = await fetchProducts(filters.category, filters.company);
            setProducts(data);
        };
        getProducts();
    }, [filters]);

    const handleFilterChange = (name, value) => {
        setFilters({ ...filters, [name]: value });
    };

    return (
        <div>
            <h1>All Products</h1>
            <Filter onFilterChange={handleFilterChange} />
            <ProductList products={products} />
        </div>
    );
};

export default AllProductsPage;
