//get
const getData = (type) => {
    const cartList = localStorage.getItem(type);
    
    if(cartList){
        const cart = JSON.parse(cartList);
        return cart;
    } else {
        return [];
    }

}


//add
const addData = (type, productID) => {
    const data = getData(type);
    const check = data.includes(productID)
    
    if(check) {
        console.log('already added') 
    } else {
        data.push(productID);
        localStorage.setItem(type, JSON.stringify(data));
    }
}



//remove

const removeData = (type, productID ) => {
    const data = getData(type);

    const newData = data.filter(id => id !== productID);

    localStorage.setItem(type, JSON.stringify(newData));

}

export {getData , addData, removeData }