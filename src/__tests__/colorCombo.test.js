const colorCombo = require('../colorCombo')
const testUpperValue = require('../testUpperValue')
const testLowerValue = require('../testLowerValue')

test('Decodes numerical values of color combonations', () => {
	expect(colorCombo('yellow','violet','red','gold')).toBe(4700);
	expect(colorCombo('red','violet','red','gold')).toBe(2700);
	expect(colorCombo('brown','orange','brown','orange')).toBe(130);
	expect(colorCombo('green','yellow','brown','orange')).toBe(540);
	expect(colorCombo('violet','orange','brown','yellow')).toBe(730);
	expect(colorCombo('white','orange','blue','yellow')).toBe(93000000);
	expect(colorCombo('white','orange','grey','yellow')).toBe(9300000000);
	expect(colorCombo('white','orange','red','yellow')).toBe(9300);
	expect(colorCombo('white','blue','pink','gold')).toBe(.096);
	expect(colorCombo('blue','green','silver','black')).toBe(.65);
})

test('Decodes numerical values of color combonations', () => {
	expect(testUpperValue('yellow','violet','red','gold')).toBe(4935);
	expect(testUpperValue('red','violet','red','gold')).toBe(2835);
	expect(testUpperValue('brown','orange','brown','orange')).toBe(156);
	expect(testUpperValue('green','yellow','brown','orange')).toBe(648);
	expect(testUpperValue('violet','orange','brown','yellow')).toBe(766.5);
	expect(testUpperValue('white','orange','blue','gold')).toBe(97650000);
	expect(testUpperValue('white','orange','green','violet')).toBe(9309300);
	expect(testUpperValue('white','orange','red','gold')).toBe(9765);
	expect(testUpperValue('white','blue','pink','gold')).toBe(.101);
	expect(testUpperValue('blue','green','silver','black')).toBe(.78);
})

test('Decodes numerical values of color combonations', () => {
	expect(testLowerValue('yellow','violet','red','gold')).toBe(4465);
	expect(testLowerValue('red','violet','red','gold')).toBe(2565);
	expect(testLowerValue('brown','orange','brown','orange')).toBe(104);
	expect(testLowerValue('green','yellow','brown','red')).toBe(529.2);
	expect(testLowerValue('violet','orange','brown','yellow')).toBe(693.5);
	expect(testLowerValue('white','orange','blue','gold')).toBe(88350000);
	expect(testLowerValue('white','orange','green','violet')).toBe(9290700);
	expect(testLowerValue('white','orange','red','gold')).toBe(8835);
	expect(testLowerValue('white','blue','pink','gold')).toBe(.091);
	expect(testLowerValue('blue','green','silver','black')).toBe(.52);
})