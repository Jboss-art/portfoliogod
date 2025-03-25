<?php
session_start();

try {
    $bdd = new PDO('mysql:host=localhost;dbname=espace_membres;charset=utf8;', 'root', '');
} catch (Exception $e) {
    die('Erreur : ' . $e->getMessage());
}

if (isset($_POST['envoi'])) {
    if (!empty($_POST['pseudo']) && !empty($_POST['mdp'])) {
        $pseudo = htmlspecialchars($_POST['pseudo']);
        $mdp = sha1($_POST['mdp']);

        $recupUser = $bdd->prepare('SELECT * FROM users WHERE pseudo = ? AND mdp = ?');
        $recupUser->execute(array($pseudo, $mdp));

        if ($recupUser->rowCount() > 0) {
            $user = $recupUser->fetch();
            // $_SESSION['pseudo'] = $pseudo;
            $_SESSION['pseudo'] = $user['pseudo'];
            // $_SESSION['mdp'] = $mdp;
            $_SESSION['mdp'] =$user['mdp'];
            $_SESSION['id'] = $user['id'];

            header("Location: index.php?id=".$_SESSION['id']);
            exit();
        } else {
            echo "<script type='text/javascript'>alert('email ou mot de passe incorrect');</script>";
        }
    }
}


?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.13.0/css/all.css">
    <!-- <link rel="stylesheet" href="css/Inscription.css"> -->
    <link rel="stylesheet" href="css/inscrit.css">
    
    <title>Connexion</title>
</head>

<body>
    <!-- <form method="POST" action="" align="center">

        <input type="text" name="pseudo" id="" autocomplete="off">
        <br>
        <input type="password" name="mdp" id="" autocomplete="off">

        <br><br>
        <input type="submit" name="envoi">
    </form> -->

    <form method="POST" action="">

        <h1>Se connecter</h1>
        <!-- <div class="social-media">
            <p><i class="fab fa-google"></i></p>
            <p><i class="fab fa-youtube"></i></p>
            <p><i class="fab fa-facebook-f"></i></p>
            <p><i class="fab fa-twitter"></i></p>
        </div>
        <p class="choose-email">ou utiliser mon adresse e-mail :</p> -->

        <div class="inputs">
            <input type="email" name="pseudo" placeholder="Email" autocomplete="off" />
            <input type="password" name="mdp" placeholder="Mot de passe" autocomplete="off">
        </div>

        <p class="inscription">Je n'ai pas de <span>compte</span>. Je m'en <span>crée</span> un.<span><a href="inscrit.php">Créer</a></span></p>
        <div align="center">

            <button type="submit" name="envoi">Se connecter</button>
        </div>
    </form>
    <div class="mousemove"></div>

</body>

</html>