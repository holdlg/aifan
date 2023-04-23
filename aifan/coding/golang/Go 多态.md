# Go 多态

```go
package main

import "fmt"

type Animaler interface {
    Eat()
}

type Animal struct {
    name string
}

type Cat struct {
    animal Animal
    age    int
}

func (cat Cat) Eat() {
    fmt.Println("猫吃鱼","我今年：",cat.age,"岁")
}

type Dog struct {
    animal Animal
    age    int
}

func (dog Dog) Eat() {
    fmt.Println("狗吃肉","我今年：",dog.age,"岁")
}

func main() {

    var animal Animaler = Cat{animal: Animal{name: "喵喵"}, age: 9}

    animal.Eat()

    animal = Dog{animal:Animal{name: "狗狗"}, age:10}

    animal.Eat()
}
```
