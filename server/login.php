<?php
header('Content-Type: application/json');

$servername = "localhost";
$username = "root"; // Use your MySQL username
$password = ""; // Use your MySQL password
$dbname = "your_database_name";

// Create a connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check the connection
if ($conn->connect_error) {
    die(json_encode(["success" => false, "message" => "Connection failed: " . $conn->connect_error]));
}

$userId = $_POST['userId'] ?? '';
$userPass = $_POST['userPass'] ?? '';

if (empty($userId) || empty($userPass)) {
    echo json_encode(["success" => false, "message" => "User ID and password are required."]);
    exit;
}

// SQL query to check credentials
$sql = "SELECT * FROM users WHERE user_id = ? AND password = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ss", $userId, $userPass); // 'ss' for string parameters
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    echo json_encode(["success" => true, "message" => "Login successful!"]);
} else {
    echo json_encode(["success" => false, "message" => "Invalid credentials."]);
}

$stmt->close();
$conn->close();
?>
