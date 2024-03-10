/* eslint-disable no-unused-vars */
const shortenText = text => text.split(" ").slice(0,3).join(" ");

const searchProduct = (products, search)=>{
    if(!search) return products;
    const searchedProducts= products.filter(p => p.title.toLowerCase().includes(search));
    return searchedProducts;
}
const filterProduct = (products, category) => {
    if(!category) return products;
    const filteredProducts= products.filter(p => p.category === category);
    return filteredProducts;
}

const updateQuery = (currentQuery, newQuery) => {
    if(newQuery.category === "all") {
        const {category, ...rest} = currentQuery;
        return rest;
    }
    if (newQuery.search === "") {
        const {search, ...rest} = currentQuery;
        return rest
    }
    return {...currentQuery, ...newQuery}
} 

const getInitialQuery = (searchParams) => {
    const query = {}
    const category = searchParams.get("category")
    const search = searchParams.get("search")
    if(category) query.category = category;
    if(search) query.search = search;
    return query;
}
const sumProducts = (products) =>{
    const totalQuantity = products.reduce((acc, product) => acc + product.quantity, 0)
    const totalPrice = products.reduce((acc, product) => acc + product.price * product.quantity, 0)
    return{totalPrice, totalQuantity}
}
const productQuantity = (state, id)=>{
    const index = state.selectedItems.findIndex(item => item.id === id)
    if(index === -1) {return 0
    }else{return state.selectedItems[index].quantity} 
} 

export {shortenText, searchProduct, filterProduct, updateQuery, getInitialQuery, sumProducts,productQuantity}