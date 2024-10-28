# Testing workshop

## Triple-A Strategy in Tests using Vitest

The **Triple-A (AAA) strategy** in testing stands for **Arrange, Act, Assert**.
This strategy structures the test cases clearly and consistently by dividing
them into three parts:

1. **Arrange**: Set up the test data, test environment, and dependencies
   required.
2. **Act**: Execute the function or method that you want to test.
3. **Assert**: Verify if the results match the expected outcome.

## Example using Vitest

```typescript
import { describe, it, expect } from 'vitest'

// Example function to be tested
const sum = (a: number, b: number) => a + b

describe('sum function', () => {
	it('should return the correct sum of two numbers', () => {
		// Arrange
		const a = 3
		const b = 4
		const expected = 7

		// Act
		const actual = sum(a, b)

		// Assert
		expect(actual).toBe(expected)
	})
})
```

## Glossary

| Term                 | Explanation                                                                                                             |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| **actual**           | The result obtained from executing the code or function being tested. Used in comparison with the `expected` value.     |
| **expected**         | The value that the result should match if the code works correctly. This is the intended or correct output.             |
| **mock**             | A simulated object or function that mimics the behavior of a real dependency, often used to control and test outcomes.  |
| **spy**              | A special kind of mock that keeps track of how a function or method was used, such as how many times it was called.     |
| **stub**             | A type of mock that returns predefined responses when certain methods are called, used to isolate parts of a system.    |
| **assert**           | A statement used to check if a given condition holds true, usually comparing `actual` with `expected`.                  |
| **Arrange**          | The first step in the Triple-A strategy where test setup and initial data are prepared.                                 |
| **Act**              | The second step in the Triple-A strategy where the function or code is executed to obtain a result.                     |
| **Assert**           | The third step in the Triple-A strategy where the result (`actual`) is checked against an `expected` value.             |
| **describe**         | A function in test frameworks used to group and describe related tests for a function or feature.                       |
| **it**               | A function in test frameworks used to define a single test case within a `describe` block.                              |
| **test case**        | A single, specific test scenario, often represented by the `it` function, that checks a particular behavior or output.  |
| **test suite**       | A collection of related test cases grouped together, typically using a `describe` block.                                |
| **fixture**          | A fixed state of a set of objects or data used as a baseline for running tests, ensuring consistency.                   |
| **unit test**        | A test that focuses on a single unit of code (like a function or method) to check its behavior in isolation.            |
| **integration test** | A test that checks how multiple units of code work together in a combined scenario or system.                           |
| **end-to-end test**  | A test that simulates a complete user scenario to verify the whole system from start to finish.                         |
| **coverage**         | A metric that indicates the amount of code that is executed by the tests, typically shown as a percentage.              |
| **TDD**              | Test-Driven Development, a practice where tests are written before the actual code, guiding the development process.    |
| **BDD**              | Behavior-Driven Development, an extension of TDD focusing on the behavior of the software as described by stakeholders. |
| **mocking library**  | A tool or set of functions provided by a framework to create and manage mocks, spies, and stubs in tests.               |
