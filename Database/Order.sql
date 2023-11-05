-- Replace the placeholders with actual criteria
SELECT o.order_id, o.customer_id, o.product_id, o.quantity, o.order_date, o.shipping_address
FROM order_table AS o
JOIN product_table AS p ON o.product_id = p.product_id
WHERE p.product_category = 'YourProductCategory'
AND LEFT(o.shipping_address, 6) = 'YourPinCodePrefix';
