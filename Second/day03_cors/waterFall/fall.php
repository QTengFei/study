<?php

  header('Content-type:application/json');
  $data = file_get_contents('./info/data.json');
  echo $data;
?>