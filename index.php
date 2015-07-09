<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
        <?php
            $hostname = "localhost";
            $username = "root";
            $password = "";

            $databaseName = "frzyc";
            $dbConnected = mysql_connect($hostname, $username, $password);
            $dbSelected = mysql_select_db($databaseName, $dbConnected);


            if ($dbConnected) {
                echo "MySQL connected OK<br /><br />";

                if ($dbSelected) {
                    echo "DB connected OK<br /><br />";
                } else {
                    echo "DB connection FAILED<br /><br />";
                }
            } else {
                echo "MySQL connection FAILED<br /><br />";
            }
        ?>
    </body>
</html>
