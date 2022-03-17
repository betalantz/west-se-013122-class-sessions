# OO Computer Lab

## Learning Goals

- Gain proficiency instantiating a class
- Gain ability to discern when to implement `attr_accessor`, `attr_reader`, and
  `attr_writer`
- Gain ability to discern when to define your own `attr_reader` (getter) and
  `attr_writer` (setter) methods

## Introduction

To practice object oriented programming (OOP), you're going to create a `Computer`
class. Each instance of the `Computer` class will have the ability to:

- report its specs
- store a file
- delete a file
- upgrade memory

## A Note on Notation

In the instructions below (and in other labs), you'll see this notation used to
represent instance methods and class methods:

- `ClassName#method_name`: represents an **instance method** that can be called
  on the class
- `ClassName.method_name`: represents a **class method** that can be called on
  the class

For example, `Computer#brand` is an example of an instance method, that we can call
on an instance of a class:

```rb
class Computer
  def brand
    @brand
  end
end
```

We can also define this particular instance method using a macro (which creates
the getter method for us):

```rb
class Computer
  attr_reader :brand
end
```

`Computer.new` is an example of a class method (remember, to create a new instance
of the class, we call `ClassName.new`, which then calls the instance method
`ClassName#initialize`).

## Instructions

Create a `Computer` class with the following behavior:

- `Computer.new(brand, model)`: takes arguments of a brand and model and saves them to the object.
  The computer's model and brand _should not_ be able to change after initialization. When a
  new computer is created, it should have the following attributes in addition
  to its brand and model (saved to instance variables):

  - `@memory_GB` with an initial value of 8
  - `@storage_free` with an initial value of 1000

- `Computer#brand`: gets the computer's brand.

- `Computer#model`: gets the computer's model.

- `Computer#memory_GB`: gets the amount of RAM in a computer's bank memory.

- `Computer#memory_GB=(value)`: sets the value of the memory to a new amount.

- `Computer#storage_free`: gets the size of the computer's storage in gigabytes.

- `Computer#storage_free=(value)`: sets the value of the computer's free storage. The maximum value allowed is 1000, and the minimum value allowed is 0.

### Additional Instance Methods

- `Computer#upgrade_memory(RAM)`: takes a hash (`{model: String, size: Integer}`) and adds the size of the RAM to the computer's memory

- `Computer#disk_full?(file_size)`: receives a file_size number and returns `true` if the free storage space is less than the file size; otherwise returns `false`.

- `Computer#save_file(file)`: given a file hash (`{name: String, size: Number}`), this method will first use a helper method to check whether the disk has enough space to save the file. If there _is_ enough space, reduce the value of `storage_free` by the file size and return the string `"#{file[:name]} has been saved!"`, but if there is not enough space, return the string `"There is not enough space on disk to save #{file[:name]}."`

- `Computer#delete_file(file)`: given a file hash (`{name: String, size: Number}`), make the appropriate adjustment to the free storage size and return a string confirming that the file has been deleted which includes the file's name.

- `Computer#specs`: returns a string which includes both the current memory and free storage, both in gigabytes.
