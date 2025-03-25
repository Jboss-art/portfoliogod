<?php
include 'bdd.php';

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $comment_id = $_GET['id'];

    $sql = "SELECT * FROM comments WHERE id = :id";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':id', $comment_id);
    $stmt->execute();
    $comment = $stmt->fetch();

    if ($comment) {
        $sql = "DELETE FROM comments WHERE id = :id";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':id', $comment_id);
        $stmt->execute();
    }

    header("Location: news.php?id=" . $comment['news_id']);
}
?>
