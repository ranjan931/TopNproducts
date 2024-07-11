import React from "react";

const Filter = ({ onFilterChange }) => {
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        onFilterChange(name, value);
    };

    return (
        <div>
            <label>
                Category:
                <input
                    type="text"
                    name="category"
                    onChange={handleInputChange}
                />
            </label>
            <label>
                Company:
                <input
                    type="text"
                    name="company"
                    onChange={handleInputChange}
                />
            </label>
            <label>
                Rating:
                <input
                    type="number"
                    name="rating"
                    onChange={handleInputChange}
                />
            </label>
            <label>
                Price Range:
                <input
                    type="number"
                    name="priceMin"
                    placeholder="Min"
                    onChange={handleInputChange}
                />
                <input
                    type="number"
                    name="priceMax"
                    placeholder="Max"
                    onChange={handleInputChange}
                />
            </label>
            <label>
                Availability:
                <select name="available" onChange={handleInputChange}>
                    <option value="">All</option>
                    <option value="true">In stock</option>
                    <option value="false">Out of stock</option>
                </select>
            </label>
        </div>
    );
};

export default Filter;
