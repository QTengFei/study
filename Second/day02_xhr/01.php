<?php

  header('Content-type:application/json');
  $data = file_get_contents('./cities.json');

  echo $data;



?>