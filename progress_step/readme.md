# Expand Card

> 2021.9.10
> demo : https://50projects50days.com/projects/progress-steps/

## 만들면서 적용한 개념들

```javascript
for (let i = 0; i < stepProgressSigns.length; i++) {
      if (!stepProgressSigns[i].classList.contains("on")) {
        stepProgressSigns[i].classList.add("on");
        stepProgressLines[i - 1].classList.add("on");
        break;
      }
    }
  }
```

### 코드 작성

코드를 작성하면서 함수가 하나의 역할만 할 수 있도록 하려고 노력했다. 만들다보니 함수 안에 for문을 넣고 이것저것 하게 되어 좀 난잡하게 된 느낌이 없지않아 있는데, 이 포문을 캡슐화하면 오히려 코드 가독성이 너무 떨어질 것같아서 함수로 묶지 않고 그냥 놔뒀다.

### css animation

데모는 내가 만든것과 다르다.
