# [Typescript] 类函数装饰器

函数有多个参数

```typescript

function abc(bool: boolean) {
  return function(target: any, property: string, descriptor: PropertyDescriptor) {
    let method = descriptor.value;
    descriptor.value = function (...args: Array<any>) {
      console.log('11111')
      console.log(bool)
      console.log(args)
      method.apply(this);
    }
  }
}
// 11111
// true
// ["wwwwwwwwwww", "sdfefsef"]
// 22222
// abc


class EditComponent {


  constructor() {}
  
  start(): void {
    this.testDe('wwwwwwwwwww', 'sdfefsef')
  }

  @abc(true)
  testDe(name: string, pawd: string): void {
    console.log('22222')
    console.log('abc')
  }
  

}



```

函数有一个参数

```typescript

function abc(bool: boolean) {
  return function(target: any, property: string, descriptor: PropertyDescriptor) {
    let method = descriptor.value;
    descriptor.value = function (args: any) {
      console.log('11111')
      console.log(bool)
      console.log(args)
      method.apply(this);
    }
  }
}
// 11111
// true
// wwwwwwwwwww
// 22222
// abc


class EditComponent {


  constructor() {}
  
  start(): void {
    this.testDe('wwwwwwwwwww')
  }

  @abc(true)
  testDe(name: string): void {
    console.log('22222')
    console.log('abc')
  }
  

}



```

函数没有参数

```typescript

function abc(bool: boolean) {
  return function(target: any, property: string, descriptor: PropertyDescriptor) {
    let method = descriptor.value;
    descriptor.value = function () {
      console.log('11111')
      console.log(bool)
      method.apply(this);
    }
  }
}
// 11111
// true
// 22222
// abc


class EditComponent {


  constructor() {}
  
  start(): void {
    this.testDe()
  }

  @abc(true)
  testDe(): void {
    console.log('22222')
    console.log('abc')
  }

}



```

​

需要返回值

```typescript

function abc(bool: boolean) {
  return function(target: any, property: string, descriptor: PropertyDescriptor) {
    let method = descriptor.value;
    descriptor.value = function (...args: Array<any>) {
      console.log(bool)
      args.push('1212121212')
      args.push('333333333')
      console.log(args)
      method.apply(this, args);
    }
  }
}
// ["wwwwwwwwwww", "sdfefsef", "1212121212", "333333333"]
// -------------
// ["wwwwwwwwwww", "sdfefsef", "1212121212", "333333333"]

class EditComponent {


  constructor() {}
  
  start(): void {
    this.testDe('wwwwwwwwwww', 'sdfefsef')
  }

  @abc(true)
  testDe(...args: Array<any>): void {
    console.log('-------------')
    console.log(args)
  }

}



```

指定参数名，覆盖原来函数参数的值

```typescript

function abc(bool: boolean) {
  return function(target: any, property: string, descriptor: PropertyDescriptor) {
    let method = descriptor.value;
    descriptor.value = function (...args: Array<any>) {
      console.log(bool)
      args.push('1212121212')
      args.push('333333333')
      console.log(args)
      method.apply(this, args);
    }
  }
}

// ["wwwwwwwwwww", "sdfefsef", "1212121212", "333333333"]
// wwwwwwwwwww
// sdfefsef
// ------------- 
// ["1212121212", "333333333"]


class EditComponent {


  constructor() {}
  
  start(): void {
    this.testDe('wwwwwwwwwww', 'sdfefsef')()
  }

  @abc(true)
  testDe(name: string, pawd: string, ...args: Array<any>): void {
    console.log(name)
    console.log(pawd)
    console.log('-------------')
    console.log(args)
  }

}



```
