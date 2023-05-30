export const addToCart = async (productId, qty) => {
    try {
    const response = await fetch("https://nextblog.havenwork.com/wp-json/wc/v3/products", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_WOOCOMMERCE_API_KEY}`,
        },
        body: JSON.stringify({
            product_id: productId,
            quantity: qty,
        }),
    });
    if (response.ok) {
        // Item added successfully
        console.log('Item added to WooCommerce');
      } else {
        console.log('Failed to add item to WooCommerce');
      }
    }
    catch (error) {
      console.error('Error:', error);
    }
};