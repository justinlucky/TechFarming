-- Replace 'user_id' and 'product_id' with actual user and product identifiers
DECLARE @user_id INT;
DECLARE @product_id INT;
SET @user_id = 1; -- Replace with the actual user ID
SET @product_id = 123; -- Replace with the actual product ID

-- Check if the product is already in the cart
IF EXISTS (SELECT 1 FROM cart_table WHERE user_id = @user_id AND product_id = @product_id)
BEGIN
    -- Decrement the product quantity by 1
    UPDATE product_table
    SET quantity = quantity - 1
    WHERE product_id = @product_id;

    -- Remove the product from the cart
    DELETE FROM cart_table
    WHERE user_id = @user_id AND product_id = @product_id;
END
