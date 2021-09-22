# Rotating Navigation

> 2021.9.17  
> [demo](https://movie42.github.io/vanillaJS_PJ/moving_ball/index.html)  
> [출처 - interactive developer](https://www.youtube.com/watch?v=sLCiI6d5vTM)

## 만들면서 공부한 것들

### 수학

수학이라고 말하면 조금 민망하지만 공간의 좌표를 정의하고 백터에 따라 좌표값이 계속 변하게 하는 것도 수학의 일부라고 볼 수 있다. 이번 예제를 따라 만들면서 간단한 수학이 재미있는 작업을 할 수 있다는 것을 배웠다. 백준 온라인 저지에서 수학 문제를 푸는 알고리즘이 있는데 그냥 풀기만 했던 것 같다. 뭐가 됐든지 간에 기본기를 다진다고 생각하고 열심히 해야겠다.

### Classes

[classes](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Classes)

class는 객체를 생성하기 위한 템플릿입니다.클래스는 데이터와 이를 조작하는 코드를 하나로 추상화합니다. 자바스크립트에서 클래스는 프로토타입을 이용해서 만들어졌지만 ES5의 클래스 의미와는 다른 문법과 의미를 가집니다.

class는 선언과 표현으로 할 수 있다. 두 가지 방법의 결정적 차이는 호이스팅이 있고 없고의 차이다.
class를 선언하게 되면 호이스팅이 일어나지 않기 때문에 다른 클래스를 외부에 선언하게 되면 반드시 가져와 사용하고자 하는 클래스가 위에 있어야한다.
constructor는 생성자라고 부른다. constructor는 class안에 하나만 존재할 수 있다.
super는 constructor안에서 부모 클래스의 constructor를 호출하기 위해 사용한다.

```javascript
// 선언
class App {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
  }
}

// 표현
const App = class {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
  }
};
```
