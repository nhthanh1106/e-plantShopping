import React from 'react';

const CartItem = () => {
    return (
        <div className="shopping-cart">
            {/* Show the total cart amount */}
            <h2>Total Cart Amount: $150</h2>

            <div className="cart-item">
                {/* Thumbnail, name, and unit price */}
                <img src="thumbnail.jpg" alt="thumbnail" />
                <h3>Snake Plant</h3>
                <p>Unit Price: $15</p>
                {/* Show the total cost for each plant */}
                <p>Total Cost: $30</p>
                
                {/* Buttons to increase and decrease the quantity */}
                <button className="increase-btn">Increase Quantity</button>
                <button className="decrease-btn">Decrease Quantity</button>
                {/* Delete button to remove it from the cart */}
                <button className="delete-btn">Remove Item</button>
            </div>

            <div className="cart-actions">
                {/* Continue shopping button */}
                <button className="continue-shopping">Continue Shopping</button>
                {/* Checkout button */}
                <button className="checkout-btn">Checkout - Coming Soon</button>
            </div>
        </div>
    );
};

export default CartItem;
