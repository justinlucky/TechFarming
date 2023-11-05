CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    category ENUM('Free', 'Basic', 'Premium', 'Ultra Premium') NOT NULL,
    additional_data JSON
);
INSERT INTO users (username, email, password, category, additional_data)
VALUES ('john_doe', 'john@example.com', 'hashed_password', 'Free', '{"free_data": "Some free data"}');
