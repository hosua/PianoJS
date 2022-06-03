<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
        <meta name="description" content="">
        <meta name="author" content="">
        <link rel="icon" href="favicon.ico">

        <title>PHPianoJS</title>

        <!-- Bootstrap core CSS -->
        <link href="../assets/dist/css/bootstrap.min.css" rel="stylesheet">

        <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
        <link href="../assets/css/ie10-viewport-bug-workaround.css" rel="stylesheet">

        <link rel="stylesheet" href="piano.css">

        <!--[if lt IE 9]><script src="assets/js/ie8-responsive-file-warning.js"></script><![endif]-->
        <script src="../assets/js/ie-emulation-modes-warning.js"></script>

        <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
        <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
        <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]-->
        </head>
        <body class="text-light bg-dark">
            
            <div class="container">
<?php
// Fuck JavaScript this shit is easier to do in php
// range can be 1 - 7
function drawOctave($start, $end){
    for ($octave = $start; $octave <= $end; $octave++){
        echo <<<EOT
                    <div octave='$octave' note='C' class="key white"><div octave='$octave' note='Db' class="key black"></div></div>
                    <div octave='$octave' note='D' class="key white"><div octave='$octave' note='Eb' class="key black"></div></div>
                    <div octave='$octave' note='E' class="key white"></div>
                    <div octave='$octave' note='F' class="key white"><div octave='$octave' note='Gb' class="key black"></div></div>
                    <div octave='$octave' note='G' class="key white"><div octave='$octave' note='Ab' class="key black"></div></div>
                    <div octave='$octave' note='A' class="key white"><div octave='$octave' note='Bb' class="key black"></div></div>
                    <div octave='$octave' note='B' class="key white"></div>
EOT;
    }
}

drawOctave(3, 5);
?>
<script src='piano.js'></script>
            </div>
            <!--
            <div class="container">
                <canvas id="piano_canvas" width=800 height=800></canvas>
                <canvas id="myCanvas" width=800 height=800></canvas>
                <script src="piano.js"></script>
            </div>
            -->
        <!-- Bootstrap core JavaScript
================================================== -->
        <!-- Placed at the end of the document so the pages load faster -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="assets/js/vendor/jquery.min.js"><\/script>')</script>
        <script src="../assets/dist/js/bootstrap.min.js"></script>
        <!-- Needed for responsive menu -->
        <script src="../assets/dist/js/bootstrap.bundle.min.js"></script>
        <script src="offcanvas.js"></script>

        <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
        <script src="../assets/js/ie10-viewport-bug-workaround.js"></script>
        <!-- popper.js and jQuery are needed for many bootstrap components to work -->
        <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
    </body>
    <!-- END OF BOILERPLATE -->
</html>

