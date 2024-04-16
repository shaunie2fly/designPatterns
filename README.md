# Design Patterns
Helpful design patterns that can help you write more modular, reusable, and maintainable code. Created With Deno 🦕.

## Creational Design Patterns
Creational design patterns are design patterns that deal with object creation mechanisms, trying to create objects in a manner suitable to the situation. The basic form of object creation could result in design problems or added complexity to the design. Creational design patterns solve this problem by somehow controlling this object creation.

*There are 5 well-known creational design patterns:*

**Singleton Pattern** - Ensures a class only has one instance and provides a global point of access to it.

**Factory Method Pattern** - Defines an interface for creating an object, but let subclasses decide which class to instantiate. Lets a class defer instantiation to subclasses.

**Abstract Factory Pattern** - Provides an interface for creating families of related or dependent objects without specifying their concrete classes.

**Builder Pattern** - Separates the construction of a complex object from its representation so that the same construction process can create different representations.

**Prototype Pattern** - Specifies the kind of objects to create using a prototypical instance, and creates new objects by copying this prototype.
The key idea is that these patterns provide different ways to encapsulate the object creation process and make it more flexible and reusable. They help decouple the client code from the actual object creation process.

## Structural Design Patterns 

Structural Design Patterns are design patterns that ease the design by identifying a simple way to realize relationships among entities. They are concerned with how classes and objects are composed to form larger structures.

The 7 structural design patterns are:

**Adapter Pattern** - Allows objects with incompatible interfaces to collaborate by converting the interface of a class into another interface clients expect.

**Bridge Pattern** - Decouples an abstraction from its implementation so that the two can vary independently.

**Composite Pattern** - Composes objects into tree structures to represent part-whole hierarchies. Lets clients treat individual objects and compositions uniformly.

**Decorator Pattern** - Attaches additional responsibilities to an object dynamically keeping the same interface. Provides a flexible alternative to subclassing for extending functionality.

Facade Pattern - Provides a unified interface to a set of interfaces in a subsystem. Defines a higher-level interface that makes the subsystem easier to use.

**Flyweight Pattern** - Uses sharing to support large numbers of similar objects efficiently.

**Proxy Pattern** - Provides a surrogate or placeholder for another object to control access to it.

The key idea behind structural patterns is to simplify the structure of the system by identifying the relationships between entities. They help organize the classes and objects into larger structures while keeping the structures flexible and efficient.
