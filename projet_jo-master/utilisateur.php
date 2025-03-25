<?php
session_start();
if (!isset($_SESSION['user_id'])) {
    header('Location: login.php');
    exit;
}

$bdd = new PDO('mysql:host=localhost;dbname=espace_membres;charset=utf8;', 'root', '');
$user_id = $_SESSION['user_id'];

if (isset($_POST['update'])) {
    $email = htmlspecialchars($_POST['email']);
    $new_password = !empty($_POST['new_password']) ? sha1($_POST['new_password']) : null;

    if ($new_password) {
        $query = $bdd->prepare('UPDATE users SET email = ?, password = ? WHERE id = ?');
        $query->execute([$email, $new_password, $user_id]);
    } else {
        $query = $bdd->prepare('UPDATE users SET email = ? WHERE id = ?');
        $query->execute([$email, $user_id]);
    }

    echo "Informations mises à jour avec succès.";
}

$query = $bdd->prepare('SELECT * FROM users WHERE id = ?');
$query->execute([$user_id]);
$user = $query->fetch();
?>

<!DOCTYPE html>
<html>

<head>
    <title>Espace Utilisateur</title>
</head>

<body>
    <h2>Bienvenue, <?php echo $user['username']; ?></h2>
    <form method="POST" action="">
        <label>Email :</label>
        <input type="email" name="email" value="<?php echo $user['email']; ?>" required>

        <label>Nouveau mot de passe :</label>
        <input type="password" name="new_password" placeholder="Laisser vide pour ne pas changer">

        <button type="submit" name="update">Mettre à jour</button>
    </form>
    <a href="logout.php">Déconnexion</a>
</body>

</html>