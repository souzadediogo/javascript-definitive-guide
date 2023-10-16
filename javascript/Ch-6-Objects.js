
/*
This section is based on the book "Javascripts: The Definitive Guide - 
Master the World's Most-Used Programming Language" by David Flanagan

OBJECTS
    Objects are Javascript's most fundamental datatype.


    INTRODUCTION TO OBJECTS
        An object is a composite value: it aggregates multiples values (primitive values 
        or other objects) and allows you to store and retrieve those values by name.
        It is an unordered collection of properties, where each has a name and a value (name: value),
        hence a key-value pair.
        Property names are usually strings, but can also be Symbols.
        This string-to-value mapping has various names, such as "hash", "hashtable","dictionary" or "associative array".

        Besides mantaining its own set of propoerties, an object also inherit properties of its "prototype".
        The methods of  an object are usually inherited, what is called "prototypal inheritance", 
        and is a key feature in JS.

        JS objects are dynamic - properties can be added, altered and deleted. But it can also behave like
        more typed languages to simulate static objects.

        Any value in JS that is not a primitive(string, number, Symbol, null, undefined or bool) is an object.

        Objects are muttable and manipulated by reference. This means that: */
        let x = {hello: 'world'}
        let y = x
        /* If you manipulate Y, you're manipulating X, because Y only hold reference to where the objects is in memory. 
        It doesn't create a copy.

        FUNDAMENTAL OPERATIONS
            Create, set, query, delete, test and enumate properties are the most common operations in an object.
            Properties are unique, there can be no property with a duplicate name/key.

            The value can be any JS data type, and can also be a function - a getter or setter.

            In addition to its name and value, each property has three property attributeS:
            - writable: specifies wether the value of the property can be set,
            - enumerable: specifies wether the property nae is returned in a for-loop.
            - configurable: specifies wether the property can be deleted and wether its attributes can be altered.

    CREATING OBJECTS

    Objects can be created with the:
    - object literals: is an expressions that creates and initializes a new & distinct object
    - 'new' keyword;
    - Object.create() method;
*/