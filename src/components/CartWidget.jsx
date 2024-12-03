import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const CartWidget = () => {
    return (
        <div className="d-flex align-items-center">
            <FaShoppingCart size={24} />
            <span className="badge bg-primary ms-2">3</span>
        </div>
    );
};

export default CartWidget;
