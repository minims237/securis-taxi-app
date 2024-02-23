import React from "react";
import { useState } from "react";
// import DataTable from "react-data-table-component";


const PRODUCTS = [
    { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
    { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
    { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
    { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
    { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
    { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
];
const capitalize = (word) => {
    return word[0].toUpperCase() + word.slice(1)
}

function TableLayout() {
    const {products}={}
    let headers = Object.keys(PRODUCTS[0]);
    return
     <table class="table text-nowrap mb-0 table-centered table-hover">
        <thead class="table-light">
            <tr>
                {
                    headers.map(header => {
                        return <th>{header}</th>
                    })
                }
            </tr>
        </thead>
        <tbody>
            {
                PRODUCTS.map(({ category, price, stocked, name }) => {
                    return <tr>
                        <td>{category}</td>
                        <td>{price}</td>
                        <td>{stocked}</td>
                        <td>{name}</td>
                    </tr>
                })
            }
        </tbody>
    </table>
}
export default TableLayout