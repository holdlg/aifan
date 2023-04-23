# Go 继承

```go
package main

import (
  "fmt"
  "strconv"
)

// 动物类
type Animal struct {
  name string
  subject string
}

// 动物的公共方法
func (a *Animal) eat(food string) {
  fmt.Println(a.name + "喜欢吃：" + food +",它属于:" + a.subject)
}

// 猫类，继承动物类
type Cat struct {
  // 继承动物的属性和方法
  Animal
  // 猫自己的属性
  age int
}

// 猫类独有的方法
func (c Cat) sleep() {
  fmt.Println(c.name + " 今年" + strconv.Itoa(c.age) + "岁了,特别喜欢睡觉")
}

func main() {
  // 创建一个动物类
  animal := Animal{name:"动物", subject:"动物科"}
  animal.eat("肉")

  // 创建一个猫类
  cat := Cat{Animal: Animal{name:"咪咪", subject:"猫科"},age:1}
  cat.eat("鱼")
  cat.sleep()
}
```

## 使用接口

```go
package main

import (
"fmt"
"strconv"
)

type Animaler interface {
    eat()
}

type Animal struct {
    name string
    age int
    food string
}

// 实现 eat() 方法
func (animal Animal) eat() {
    fmt.Println(animal.name + "今年"+ strconv.Itoa(animal.age) +"岁了，" + "喜欢吃" + animal.food)
}

type Cat struct {
    Animal
    time int
}

type Dog struct {
    Animal
    plays string
}

// 猫独有的方法
func (cat Cat) sleep() {
    fmt.Println("我叫" + cat.name + "， 我能睡" + strconv.Itoa(cat.time) + "分钟" )
}
// 狗独有的方法
func (dog Dog) play() {
    fmt.Println("我叫" + dog.name + "我喜欢玩" + dog.plays)
}

func testInterface(animaler Animaler)  {
    animaler.eat()
}

func main()  {
    cat := Cat{Animal:Animal{name:"咪咪", age:2, food:"鱼"}, time: 8}
    cat.sleep()
    testInterface(cat)

    dog := Dog{Animal:Animal{name:"大黄", age:2, food:"骨头"}, plays:"球球"}
    dog.play()
    testInterface(dog)
}
```
