const { ageClassification, weekFn } = require("../functions.js");
test("ageClassification for negative numbers  returns null ", () => {
  expect(ageClassification(-1)).toBe(null);
});
test("ageClassification for 2 years returns Дитинство", () => {
  expect(ageClassification(2)).toBe("Дитинство");
});

test("ageClassification for 36 years returns Молодість", () => {
  expect(ageClassification(36)).toBe("Молодість");
});
test("ageClassification for 55 years returns Зрілість", () => {
  expect(ageClassification(55)).toBe("Зрілість");
});
test("ageClassification for 68 years returns Старість", () => {
  expect(ageClassification(68)).toBe("Старість");
});
test("ageClassification for 85 years returns Довголіття", () => {
  expect(ageClassification(85)).toBe("Довголіття");
});
test("ageClassification for 122 years returns Рекорд", () => {
  expect(ageClassification(122)).toBe("Рекорд");
});

test("ageClassification for 200 years returns null", () => {
  expect(ageClassification(200)).toBe(null);
});
test('weekFn for  "1"  (Понеділок)', () => {
  expect(weekFn(1)).toBe("Понеділок");
});
test('weekFn for  "3"  (Середа)', () => {
  expect(weekFn(3)).toBe("Середа");
});

test('weekFn for  "7"  (Неділя)', () => {
  expect(weekFn(7)).toBe("Неділя");
});

test('weekFn for  "9"  returns', () => {
  expect(weekFn(9)).toBe(null);
});
test('weekFn for  "1.5"  returns', () => {
  expect(weekFn(1.5)).toBe(null);
});
test('weekFn for  "2"  returns', () => {
  expect(weekFn("2")).toBe(null);
});
test("weekFn for null -> null ", () => {
  expect(weekFn(null)).toBe(null);
});
test("weekFn for undefined returns ", () => {
  expect(weekFn(undefined)).toBe(null);
});
