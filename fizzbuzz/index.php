<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Solutions to the Fizz-Buzz Problem | benryerson.com</title>
        <meta name="description" content="Write a program that prints the numbers from 1 to 100. Then, for multiples of three, print 'Fizz' instead of the number and for multiples of five print 'Buzz'. For numbers which are multiples of both three and five, print 'FizzBuzz'.">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link href='http://fonts.googleapis.com/css?family=Amaranth:400,700' rel='stylesheet' type='text/css'>
        <link rel="stylesheet" href="css/normalize.css">
        <link rel="stylesheet" href="css/main.css">
        <script src="js/vendor/modernizr-2.6.2.min.js"></script>
    </head>
    <body>
        <!--[if lt IE 7]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->
    <div id="page-wrap">
        <header>
            <h1>The FIZZ-BUZZ Problem</h1>
            <p>Write a program that prints the numbers from 1 to 100. Then, for multiples of three, print "Fizz" instead of the number and for multiples of five print "Buzz". For numbers which are multiples of both three and five, print "FizzBuzz".</p>
            <p>These are by no means the best solutions and were culled or influenced by many, many programmers who came before me. I used the <a href="http://rosettacode.org/wiki/FizzBuzz">FizzBuzz page</a> on Rosetta Code as reference plus, you know, the Internet. Where possible, all sources are cited.</p>
        </header>
        
        <div class="php-solution">
            <h2>PHP Solution #1</h2>
            <p><a href="http://c2.com/cgi/wiki?FizzBuzzTest">Source</a></p>
            <pre class="brush: php">
                    $out = ''; for ( $i=1; $i <= 100; ++$i ) {
                        if ($f = ($i%3 == 0)) $out .= 'Fizz';
                        if ($b = ($i%5 == 0)) $out .= 'Buzz';
                        if ($f == 0 && $b == 0) $out .= $i;
                        $out .= ', ';
                    } echo $out;
            </pre>

            <h3>Result</h3>
            <?php
                $out = ''; for ( $i=1; $i <= 100; ++$i ) {
                    if ($f = ($i%3 == 0)) $out .= 'Fizz';
                    if ($b = ($i%5 == 0)) $out .= 'Buzz';
                    if ($f == 0 && $b == 0) $out .= $i;
                    $out .= ', ';
                } echo $out;
            ?>
        </div>

        <div class="php-solution">
            <h2>PHP Solution #2</h2>
            <p>This solution is a less elegant PHP option as it appends "Fizz", "Buzz", and "FizzBuzz" to the appropriate numbers rather than replacing them but whatever, same basic principles at work. <a href="http://c2.com/cgi/wiki?FizzBuzzTest">Source</a></p>
            <pre class="brush: php">
                $map = array(3=>"Fizz",5=>"Buzz");
                $fb=0;
                while ($fb<100) {
                    ++$fb;
                    $res = $fb;
                    foreach ($map as $k=>$v) {
                        if ($fb%$k == 0) $res .= $v;
                    }
                    echo " $res, ";
                }
            </pre>

            <h3>Result</h3>
            <?php
                $map = array(3=>"Fizz",5=>"Buzz");
                $fb=0;
                while ($fb<100) {
                    ++$fb;
                    $res = $fb;
                    foreach ($map as $k=>$v) {
                        if ($fb%$k == 0) $res .= $v;
                    }
                    echo " $res, ";
                }
            ?>
        </div><!-- end PHP solutions -->

        <div class="js-solution clearfix">
            <h2>JavaScript Solution #1</h2>
            <pre class="brush: js">
                var i = 1,
                    f = 'Fizz',
                    b = 'Buzz',
                    out = '';
                for (; i <= 100; i++) {
                    out = !(i % 3)? !(i % 5)? f+b : f : !(i % 5)? b : i;
                    document.write('<span>', out, ',', '</span>');
                }
            </pre>
            <h3>Result</h3>
            <script>
                var i = 1,
                    f = 'Fizz',
                    b = 'Buzz',
                    out = '';
                for (; i <= 100; i++) {
                    out = !(i % 3)? !(i % 5)? f+b : f : !(i % 5)? b : i;
                    document.write('<span>', out, ',', '</span>');
                }
            </script>
        </div>

        <div class="js-solution clearfix">
            <h2>JavaScript Solution #2</h2>
            <pre class="brush: js">
                var i = 1,
                    f = 'Fizz',
                    b = 'Buzz',
                    out = '';
                for (; i <= 100; i++) {
                    out = !(i % 3)? !(i % 5)? f+b : f : !(i % 5)? b : i;
                    console.log(out);
                }
            </pre>
            <script>
                var i = 1,
                    f = 'Fizz',
                    b = 'Buzz',
                    out = '';
                for (; i <= 100; i++) {
                    out = !(i % 3)? !(i % 5)? f+b : f : !(i % 5)? b : i;
                    console.log(out);
                }
            </script>
            <h3>Result</h3>
            <small>Pssst...check the Console</small>
        </div><!-- end JS solution -->

        <div class="bash-solution">
            <h2>BASH Solution #1</h2>
            <p>This solution will output Fizz-Buzz results when run in a BASH console.</p>
            <pre class="brush: bash"> 
                function isDivisibleBy {
                    return $(($1%$2))
                }
                 
                function fizzOrBuzz {
                    output=""
                    isDivisibleBy $1 3 && output="Fizz"
                    isDivisibleBy $1 5 && output="${output}Buzz"
                    if [ -z $output ]; then
                        echo $1
                    else
                        echo $output;
                    fi
                }
                 
                for number in {1..100}; do
                    echo "`fizzOrBuzz $number`"
                done
            </pre>
        </div>
        
        <div class="bash-solution">
            <h2>BASH Solution #2</h2>
            <p>A super-concise BASH solution. <a href="http://rosettacode.org/wiki/FizzBuzz#bash">Source</a></p>
            <pre class="brush: bash">
                for n in {1..100}; do ([ $((n%15)) -eq 0 ] && echo 'FizzBuzz') || ([ $((n%5)) -eq 0 ] && echo 'Buzz') || ([ $((n%3)) -eq 0 ] && echo 'Fizz') || echo $n; done
            </pre>
        </div><!-- end BASH solution -->
        
        <footer>
            <p><small>Math is the new hotness, you guys.<br/><a href="http://www.benryerson.com">benryerson.com</a></small></p>
        </footer>

    </div><!-- end page wrap -->

        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.10.2.min.js"><\/script>')</script>
        <script src="js/plugins-ck.js"></script>
        <script src="js/main-ck.js"></script>
        <script>SyntaxHighlighter.all();</script>

        <script type="text/javascript">
          var _gaq = _gaq || [];
          _gaq.push(['_setAccount', 'UA-8389634-4']);
          _gaq.push(['_trackPageview']);

          (function() {
            var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
            ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
            var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
          })();
        </script>
    </body>
</html>
