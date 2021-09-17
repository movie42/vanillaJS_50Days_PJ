# Rotating Navigation

> 2021.9.13-14
> demo : https://50projects50days.com/projects/rotating-navigation-animation/

## 만들면서 적용한 개념들

### 레이어아웃

맨처음 html, css를 배울 때, 레이어아웃을 만드는게 어려웠다. 이번에 한번 더 연습을 해보았다. 보통 레이어아웃은 flex, grid, float 등을 이용해서 만든다. 처음에는 float를 이용해서 만드는 걸 연습해왔고, flex는 실무에서 계속 쓰다보니까 익숙해졌다. 하지만 flex는 아이템을 정렬하는데 조금 어려움이 있어서 gird를 쓰는 편인다.

### css animation

- transition

트렌지션을 사용해서 변화하는 css 속성 값을 지정한 다음에 몇초간 어떻게 변화할 것인지 작성한다. 
```css
.rotate{
transform : rotate(-70deg);
transition: transform 0.5s ease-in;
}
``` 

클래스에서 변경할 값을 미리 지정한 다음에 자바스크립트로 dom을 조작해서 html에 css 값을 추가, 제거하여서 기본적인 애니메이션을 추가할 수 있다. 

많이 약한 부분인데 버튼을 하나 만들더라도 인터렉티브한 버튼을 만들어야겠다. 