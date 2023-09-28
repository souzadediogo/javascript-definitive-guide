/*
This section is based on the book "Javascripts: The Definitive Guide - 
Master the World's Most-Used Programming Language" by David Flanagan
*/

/*
WHAT IS JAVASCRIPT?
    Javascript is a interpreted, dynamic, high-level, untyped programming language.
    It's well suited for object-oriented (OOP) and functionall programming.
    It was created and patented by Netscape (now Mozilla, owned by Sunmicrosistems (now Oracle).

    It was later submitted for standardization at the European Computer Manufacturer's Association (ECMA) - thus, 
    gaining the name ECMAScript - or ES, for abbreviation.

    EARLY VERSIONS & ES6
        In 2015, ES6 was released to correct flaws from previous versins and introduced new 
        imporpant features such as class and the module syntax. It still mantains backwards compatibility, unless 
        you use 'strict mode', in which case previous flawd features won't be accepted.
        
        Also, in ES6 the use of new features usually implicitely invoke 'strict mode'.

    HOST ENVIRONMENTS
        As other programming languages, JS need a host environment or standard to provide features such
        as input & output (I/O), networking, storage & graphics.

        THE BROWSER
        Initially, JS was hosted inside the browser, from which these features came. Through
        the broswe, JS can access input from the mouse, keyboard and HTTP requests, as well as 
        display information through HTML and CSS.
        The brower is still the most common environment for JS.

        NODE
        Since 2010, With Node, JS got access to the entire operating system.
        This allow Node to read & write files, send & receive data over the network, 
        and make & serve HTTP requests.
    
    EXPLORING BASIC CONCEPTS
        You can run Javascript:
            From the browser: using the Dev Tools, going to the Console and directly typing your
            expressions and code.
            From Node: installing Node on you machine and typing 'node' at the terminal 
            will open the Repl where you can directly type code.
            From a file: writting code to a file and running using 'node myfile.js'
            From a filme in the browser: writting a .js file and creating a .html file inserting
            the js file as a script "<script src="myfile.js"></script>"
        DATA TYPES IN JAVASCRIPT
            Javascript supports N basic data types:

        BASIC SYNTAX - HOW WE WRITE THINGS
            COMMENT SYNTEX
                    You can comment in JS using:
                // double slash for single-line comments
                /* to open a multi-line comment and  to close it use */
                    /*
            EXPRESSIONS
                Initializer Expression:
                    Is an expressions that initializes a variable and assigns it to a value;
                    You can initialize a variable to any of the supported types: */
                        var number = 5            //Initializes a variable named number and 
                                                  // assignes it to the number 5
                        var naturals = [1, 2, 3]  //Intitializes a variable named naturals 
                                                 //  and assignes an array with the numbers 1, 2 and 3
            /*OPERATORS

            */
        