# javascript-lotto-precourse

## 로또 (Lotto)

> 우아한테크코스 8기
3주차 과제
> 

</br>

### 🍥 기능 요구 사항

---

각 세부 기능은 TDD의 Red-Green-Refactor 사이클을 따릅니다.

기능별 단위 테스트 코드 작성 및 실제 코드 작성을 커밋 단위로 관리합니다.

1. **입출력 처리 (Input Handling)**
    - 입출력 처리에 대한 테스트를 구현한다.
    - `Console.readLineAsync()`를 통해 사용자 입력을 비동기적으로 받는다.
    - 입력 요청 메시지 및 에러 메세지를 핸들링할 수 있는 `InputView`, `OutputView`의 기본 구조를 구현한다.
2. **로또 도메인 모델 구현 (Lotto)**
    - Lotto 처리에 대한 테스트를 구현한다.
    - numbers 멤버 변수로 6개의 숫자 배열을 가지는 `Lotto` 클래스를 생성한다.
    - numbers가 개수에 맞는지, 올바른 범위 내에 있는지 확인한다.
    - 사용자가 구입한 금액만큼 로또 번호를 랜덤으로 선정한다.
3. **당첨 번호 도메인 모델 구현 (WinningNumbers)**
    - WinningNumbers에 대한 테스트를 구현한다.
    - 당첨 번호와 보너스 번호를 관리하는 클래스를 구현한다
4. **로또 번호 생성 (LottoGenerator, LottoMachine)**
    - LottoGenerator에 대한 테스트를 구현한다.
    - 1~45 중 중복 없는 6개 번호 생성하는 **`LottoGenerator`** 클래스를 구현한다.
    - 구매 금액만큼 로또를 생성하는 **`LottoMachine`** 클래스를 구현한다.
5. **로또 결과 생성 (WinningService)**
    - 로또 결과 생성에 대한 테스트를 구현한다.
    - 로또 당첨 확인 후 결과를 반환한다.
    - 등수별 개수를 집계해서 통계 결과를 반환한다.
6. **결과 출력 및 기능 통합 (Output Handling)**
    - 전체 게임 흐름 제어에 관한 테스트를 구현한다.
    - 전체 게임 로직 및 결과 입출력 로직을 연결한다.

### 🍥 클래스 설계

---

1. **Lotto** (제공된 클래스 확장)
- **책임**: 로또 티켓 하나를 표현하는 도메인 객체
- **필드**
    - `#numbers`: 6개의 로또 번호 배열
- **메서드**
    
    
    | 메서드 | 기능 | 검증 사항 |
    | --- | --- | --- |
    | `constructor(numbers)` | 로또 번호 초기화 | - 6개 번호인지
    - 1~45 범위인지
    - 중복이 없는지 |
    | `getNumbers()` | 번호 조회 | 정렬된 배열 반환 |
    | `countMatches(winningNumbers)` | 일치 개수 계산 | 당첨 번호와 비교 |
    | `hasNumber(number)` | 특정 번호 포함 여부 | 보너스 번호 확인용 |
- **에러 메시지**
    - `[ERROR] 로또 번호는 6개여야 합니다.`
    - `[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.`
    - `[ERROR] 로또 번호에 중복된 숫자가 있습니다.`
- **테스트 케이스**
    
    ```jsx
    // 정상 케이스
    - [1, 2, 3, 4, 5, 6] 생성 성공
    - getNumbers()는 정렬된 배열 반환
    - countMatches([1, 2, 3, 4, 5, 6]) → 6
    - hasNumber(7) → false
    
    // 예외 케이스
    - [1, 2, 3, 4, 5] → 에러 (6개 미만)
    - [1, 2, 3, 4, 5, 6, 7] → 에러 (6개 초과)
    - [1, 2, 3, 4, 5, 46] → 에러 (범위 초과)
    - [1, 2, 3, 4, 5, 5] → 에러 (중복)
    - [0, 1, 2, 3, 4, 5] → 에러 (범위 미만)
    ```
    

2. **WinningNumbers**
- **책임**: 당첨 번호와 보너스 번호를 관리하는 도메인 객체
- **필드**
    - `#winningNumbers`: 당첨 번호 6개 (Lotto 객체)
    - `#bonusNumber`: 보너스 번호 1개
- **메서드**
    
    
    | 메서드 | 기능 | 검증 사항 |
    | --- | --- | --- |
    | `constructor(numbers, bonusNumber)` | 당첨 정보 초기화 | - 보너스가 1~45 범위인지
    - 당첨 번호와 중복 없는지 |
    | `getWinningNumbers()` | 당첨 번호 조회 | Lotto 객체 반환 |
    | `getBonusNumber()` | 보너스 번호 조회 | 숫자 반환 |
    | `match(lotto)` | 당첨 결과 계산 | { matchCount, hasBonus } 반환 |
- **에러 메시지**
    - `[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.`
    - `[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.`
- **테스트 케이스**
    
    ```jsx
    // 정상 케이스
    - new WinningNumbers([1,2,3,4,5,6], 7) 생성 성공
    - match(로또) → { matchCount: 3, hasBonus: false }
    - match(로또) → { matchCount: 5, hasBonus: true }
    
    // 예외 케이스
    - new WinningNumbers([1,2,3,4,5,6], 6) → 에러 (중복)
    - new WinningNumbers([1,2,3,4,5,6], 46) → 에러 (범위)
    - new WinningNumbers([1,2,3,4,5,6], 0) → 에러 (범위)
    ```
    

3. **Rank**
- **책임**: 당첨 등수를 나타내는 Enum 클래스
- **메서드**
    
    
    | 메서드 | 기능 |
    | --- | --- |
    | `static of(matchCount, hasBonus)` | 일치 개수와 보너스 여부로 등수 반환 |
    | `static values()` | 모든 등수 배열 반환 (NONE 제외) |
    | `getPrize()` | 상금 반환 |
    | `getDescription()` | 당첨 설명 문자열 반환 |
- **테스트 케이스**
    
    ```jsx
    - Rank.of(6, false) → FIRST
    - Rank.of(5, true) → SECOND
    - Rank.of(5, false) → THIRD
    - Rank.of(4, false) → FOURTH
    - Rank.of(3, false) → FIFTH
    - Rank.of(2, false) → NONE
    - Rank.of(5, false).getPrize() → 1_500_000
    - Rank.of(5, false).getDescription() → "5개 일치 (1,500,000원)"
    ```
    

4. **LottoGenerator**
- **책임**: 랜덤 로또 번호 생성
- **메서드**
    
    
    | 메서드 | 기능 |
    | --- | --- |
    | `generate()` | 1~45 중 중복 없는 6개 번호 생성하여 Lotto 객체 반환 |
- **구현**
    - `MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6)` 사용
- **테스트 케이스**
    
    ```jsx
    - generate() → 유효한 Lotto 객체 반환
    - 생성된 로또는 6개 번호
    - 생성된 로또는 1~45 범위
    - 생성된 로또는 중복 없음
    ```
    

5. **LottoMachine**
- **책임**: 로또 티켓 대량 발행
- **메서드**
    
    
    | 메서드 | 기능 |
    | --- | --- |
    | `issue(amount)` | 금액만큼 로또 생성 (1000원당 1장) |
- **테스트 케이스**
    
    ```jsx
    - issue(8000) → 8개 Lotto 배열
    - issue(1000) → 1개 Lotto 배열
    - issue(14000) → 14개 Lotto 배열
    - 각 로또는 유효한 Lotto 객체
    ```
    

6. **WinningService**
- **책임**: 당첨 확인 및 통계 생성
- **메서드**
    
    
    | 메서드 | 기능 |
    | --- | --- |
    | `checkWinnings(lottos, winningNumbers)` | 모든 로또의 당첨 결과 반환 (Rank 배열) |
    | `calculateStatistics(ranks)` | 등수별 개수 집계 (Map 반환) |
- **테스트 케이스**
    
    ```jsx
    // checkWinnings
    - 로또 5개, 1등 1개, 5등 2개 포함 → [FIRST, FIFTH, FIFTH, NONE, NONE]
    
    // calculateStatistics
    - [FIRST, FIFTH, FIFTH] → Map { FIRST: 1, FIFTH: 2, ... }
    ```
    

7. **ProfitCalculator**
- **책임**: 수익률 계산
- **메서드**
    
    
    | 메서드 | 기능 |
    | --- | --- |
    | `calculate(statistics, purchaseAmount)` | 수익률 계산 (소수점 둘째자리 반올림) |
- **계산식**
    
    ```
    수익률 = (총 상금 / 구입 금액) * 100
    ```
    
- **테스트 케이스**
    
    ```jsx
    - statistics: {FIFTH: 1}, amount: 8000 → 62.5
    - statistics: {FIRST: 1}, amount: 1000 → 200000000.0
    - statistics: {}, amount: 5000 → 0.0
    - statistics: {THIRD: 2, FIFTH: 1}, amount: 10000 → 30050.0
    ```
    

8. **PurchaseAmountValidator**
- **책임**: 구입 금액 검증
- **메서드**
    
    
    | 메서드 | 검증 내용 |
    | --- | --- |
    | `validate(input)` | - 숫자인지
    - 양수인지
    - 1000원 단위인지 |
- **에러 메시지**
    - `[ERROR] 구입 금액은 숫자여야 합니다.`
    - `[ERROR] 구입 금액은 1,000원 단위로 입력해야 합니다.`
- **테스트 케이스**
    
    ```jsx
    // 정상
    - "8000" → 통과
    - "1000" → 통과
    
    // 예외
    - "abc" → 에러 (숫자 아님)
    - "500" → 에러 (1000원 단위 아님)
    - "0" → 에러 (0원)
    - "-1000" → 에러 (음수)
    - "1500" → 에러 (1000원 단위 아님)
    
    ```
    

9. **WinningNumbersValidator**
- **책임**: 당첨 번호 입력 검증
- **메서드**
    
    
    | 메서드 | 검증 내용 |
    | --- | --- |
    | `validate(input)` | - 쉼표로 6개 구분되는지
    - 모두 숫자인지
    - 1~45 범위인지
    - 중복 없는지 |
    | `parse(input)` | 문자열을 숫자 배열로 변환 |
- **에러 메시지**
    - `[ERROR] 당첨 번호는 쉼표로 구분된 6개의 숫자여야 합니다.`
    - `[ERROR] 당첨 번호는 1부터 45 사이의 숫자여야 합니다.`
    - `[ERROR] 당첨 번호에 중복된 숫자가 있습니다.`
- **테스트 케이스**
    
    ```jsx
    // 정상
    - "1,2,3,4,5,6" → [1,2,3,4,5,6]
    - "45,44,43,42,41,40" → [45,44,43,42,41,40]
    
    // 예외
    - "1,2,3,4,5" → 에러 (5개)
    - "1,2,3,4,5,6,7" → 에러 (7개)
    - "1,2,3,4,5,a" → 에러 (숫자 아님)
    - "1,2,3,4,5,46" → 에러 (범위)
    - "1,2,3,4,5,5" → 에러 (중복)
    - "1, 2, 3, 4, 5, 6" → 정상 (공백 trim)
    ```
    

10. **BonusNumberValidator**
- **책임**: 보너스 번호 검증
- **메서드**
    
    
    | 메서드 | 검증 내용 |
    | --- | --- |
    | `validate(input, winningNumbers)` | - 숫자인지
    - 1~45 범위인지
    - 당첨 번호와 중복 아닌지 |
- **에러 메시지**
    - `[ERROR] 보너스 번호는 숫자여야 합니다.`
    - `[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.`
    - `[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.`
- **테스트 케이스**
    
    ```jsx
    // 정상
    - "7", [1,2,3,4,5,6] → 통과
    
    // 예외
    - "abc", [1,2,3,4,5,6] → 에러 (숫자 아님)
    - "46", [1,2,3,4,5,6] → 에러 (범위)
    - "6", [1,2,3,4,5,6] → 에러 (중복)
    ```
    

11. **InputView**
- **책임**: 사용자 입력 처리
- **메서드**
    
    
    | 메서드 | 기능 |
    | --- | --- |
    | `async readPurchaseAmount()` | 구입 금액 입력 받기 |
    | `async readWinningNumbers()` | 당첨 번호 입력 받기 |
    | `async readBonusNumber()` | 보너스 번호 입력 받기 |
- **구현**
    - `Console.readLineAsync()` 사용
    - 각 메서드는 유효성 검증 후 파싱된 값 반환
    - 예외 발생 시 에러 출력 후 재입력
- **테스트**: UI 로직은 테스트 제외 (요구사항)

12.  **OutputView**
- **책임**: 결과 출력
- **메서드**
    
    
    | 메서드 | 기능 |
    | --- | --- |
    | `printPurchaseResult(lottos)` | 구매한 로또 출력 |
    | `printStatistics(statistics, profitRate)` | 당첨 통계 출력 |
    | `printError(message)` | 에러 메시지 출력 |
- **출력 형식**
    
    ```
    8개를 구매했습니다.
    [8, 21, 23, 41, 42, 43]
    [3, 5, 11, 16, 32, 38]
    ...
    
    당첨 통계
    ---
    3개 일치 (5,000원) - 1개
    4개 일치 (50,000원) - 0개
    5개 일치 (1,500,000원) - 0개
    5개 일치, 보너스 볼 일치 (30,000,000원) - 0개
    6개 일치 (2,000,000,000원) - 0개
    총 수익률은 62.5%입니다.
    ```
    
- **테스트**: UI 로직은 테스트 제외

13. **LottoGameController**
- **책임**: 전체 게임 흐름 제어
- **메서드**
    
    
    | 메서드 | 기능 |
    | --- | --- |
    | `async run()` | 게임 실행 (App.js에서 호출) |
    | `async #inputPhase()` | 입력 단계 |
    | `#issuePhase(amount)` | 발행 단계 |
    | `#winningPhase(lottos, winningNumbers)` | 당첨 확인 단계 |
    | `#outputPhase(statistics, profitRate)` | 결과 출력 단계 |
- **게임 흐름**

```
1. 구입 금액 입력
2. 로또 발행 및 출력
3. 당첨 번호 입력
4. 보너스 번호 입력
5. 당첨 확인
6. 통계 계산
7. 결과 출력
```

- **에러 처리**
    - 각 입력 단계에서 예외 발생 시 해당 지점부터 재입력
    - try-catch로 에러 처리

### 🍥 커밋 컨벤션

---

**AngularJS Commit Message Convention**을 따릅니다.

기능 구현 단위와 Commit 단위는 일치해야 하며,
README 문서 작성, 리팩터링, test 결과 반영 등 추가적인 Commit이 이루어질 수 있습니다.

```c
feat: onUrlChange event

Added new event :
- forward popstate event if available
- forward hashchange event if popstate not available
- do polling when neither popstate nor hashchange available
```

### 🍥 회고

---