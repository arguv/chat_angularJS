<?php
require_once("db.php");

	$res = mysql_query("SELECT * FROM messages");

	while($write = mysql_fetch_assoc($res)){

        echo"{$write['message_id']}-{$write['name']}-{$write['text']}/";

	}

    mysql_close($link);