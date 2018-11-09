<?php

/*     # 使用超全局变量  $_GET
    $user = $_GET['name'];
    $pwd = $_GET['pwd'];
    # 输出用户名和密码
    echo '输出用户名:'.$user.'输出密码:'.$pwd; */

    # 使用超全局变量  $_GET
    $user = $_POST['name'];
    $pwd = $_POST['pwd'];
    # 输出用户名和密码
    echo '输出用户名:'.$user.'输出密码:'.$pwd;
?>