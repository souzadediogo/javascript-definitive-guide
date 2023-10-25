/*
This section is based and quotes directly the book "Javascripts: The Definitive Guide - 
Master the World's Most-Used Programming Language" by David Flanagan. 
To him, a huge thanks for helping me undestand deeply the Javascript language and its details.

OBJECTS
    Objects are Javascript's most fundamental datatype.


    INTRODUCTION TO OBJECTS
        An object is a composite value: it aggregates multiples values (primitive values 
        or other objects) and allows you to store and retrieve those values by name.
        It is an unordered collection of properties, where each has a name and a value (name: value),
        hence a key-value pair.
        Property names are usually strings, but can also be Symbols.
        This string-to-value mapping has various names in differente languages, such as "hash", "hashtable","dictionary" or "associative array".

        Besides mantaining its own set of properties, an object also inherit properties of its "prototype".
        The methods of  an object are usually inherited, what is called "prototypal inheritance", 
        and is a key feature in JS.

        JS objects are dynamic - properties can be added, altered and deleted. But it can also behave like
        more typed languages to simulate static objects.

        Any value in JS that is not a primitive(string, number, Symbol, null, undefined or bool) is an object.

        Objects are muttable and manipulated by reference. This means that: */
let x = { hello: "world" };
let y = x;
/* If you manipulate Y, you're manipulating X, because Y only hold reference to where the objects is in memory. 
        It doesn't create a copy.

        FUNDAMENTAL OPERATIONS
            Create, set, query, delete, test and enumerate properties are the most common operations in an object.
            Properties are unique, there can be no property with a duplicate name/key.

            The value can be any JS data type, and can also be a function - a getter or setter.

            In addition to its name and value, each property has three property attributes
            - writable: specifies wether the value of the property can be set,
            - enumerable: specifies wether the property nae is returned in a for-loop.
            - configurable: specifies wether the property can be deleted and wether its attributes can be altered.

    CREATING OBJECTS

    Objects can be created with the:
    - object literals: is an expressions that creates and initializes a new & distinct object
    - 'new' keyword;
    - Object.create() method;

    Object Literals: easiest way to create and object. Is a set of comma-separated key > values enclosed within curly braces.
    New: creates and initializes and object. Must be folloews by a function invocation. A funtion used in this way is called a constructor
    and serves to initialize a newly created object. JS alreay has constructors in place for its built-in types, as shown below:*/
let o = new Object(); // Create an empty object: {}
let a = new Array(); // Create an empty array: []
let d = new Date(); // Create a Date Object representing the current time
let r = new Map(); /* Create a Map object for key/value mapping    
    
    We can also define out own constructor, as we'll see soon.

            PROTOTYPES
            Almost every JS Object has a 2nd object associated with it, which we call prototype.
            An object inherits properties from its prototype. Every object created by object literals 
            has the same object prototype, which is Object.prototype.
            Objects created using the new keyword and a constructor invocation use the value of the prototype 
            property of the constructor function as their prototype.
            All built-in prototypes, such as Date() inherits from Object.prototype. 
            This linked series of prototypes objects is known as prototype chain.

            Object.create()
            Creates a new object, using its fist argument as the prototype of that object: */
let o1 = Object.create({ x: 1, y: 2 }); // o1 inherits properties x and y
o1.x + o1.y; /* => 3
            It can also take an optional 2nd argument that describes the properties of the new object.

            QUERYING AND SETTING PROPERTIES
            We can obtain the value of a property two ways. On both the lefhand side should be 
            an expression whose value evaluates to an object. The two ways are:
            . notation:             the righthand value should be a simple identifier.
            [] bracket notation:    the righthand value should be an expression that evaluates 
                                    to a string that contains the desired property name*/
let author = book.author; // Get the "author" property of the book.
let name = author.surname; // Get the "surname" propertu of the book.
let tile = book["main title"]; /* Get the "main title" property of the book.
            
            To create or set a property we also use de dot or bracket notation, but followed by an assignment operator:*/
book.edition = 7;
book["main title"] = "ECMAScript"; /*

            OBJECTS AS ASSOCIATIVE ARRAYS
            When we use bracket notation, it looks like array access. But an array indexed by strings rather than
            by numbers. This is known as associative array (or hash or map ou dictionary). Javascrip objects are associative arrays.
            Unlike languages like Java, C, and C++, where objects can only have a fixed numbre of properties set in advance, in Javascript 
            a program can create any number of properties in any object.
            When you create a key using dot notation, the identifier must be typed literally and it is not a datatype, so they cannot be manipulated
            by the program.
            When you use bracket notation the evaluated result will be a string or symbol, thus they can be created and manipulated during runtime. 
            For example:   */
let addr = "";
for (let i = 0; i < 4; i++) {
  add += customer[`address${i}`] + "\n";
}
