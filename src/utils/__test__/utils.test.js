import {
    upperCaseChar,
    capitalStr,
    join
} from "@/utils";

describe('function upperCaseChar', () => {
    describe('given empty, return empty string', () => {
        test('given undefined, should be ""', () => {
            expect(upperCaseChar()).toBe("");
        });

        test('given empty string, should be ""', () => {
            expect(upperCaseChar('')).toBe("");
        });
    });

    describe('given number, return number string', () => {
        test('given 0, should be "0"', () => {
            expect(upperCaseChar(0)).toBe('0');
        });

        test('given "1", should be "1"', () => {
            expect(upperCaseChar("1")).toBe("1");
        });
    });

    describe('given one char, return an Upper Case char', () => {
        test('given a, should be A', () => {
            expect(upperCaseChar('a')).toBe('A');
        });

        test('given cc, should be CC', () => {
            expect(upperCaseChar('cc')).toBe('CC');
        });
    });
});

describe('function capitalStr', () => {
    const charConverter = upperCaseChar;

    describe('given empty arguments should return empty string', () => {
        test('given "", should return ""', () => {
            expect(capitalStr()).toBe("");
        });

        test('given one char but lost convert function, should return ""', () => {
            expect(capitalStr('a')).toBe("");
        });

        test('given one char but convert is not function, should return falsy', () => {
            expect(capitalStr('a', '')).toBe("");
        });
    });

    describe("given string and charConverter should return an Upper Case string.", () => {
        test('given america should be America', () => {
            expect(capitalStr('america', charConverter)).toBe('America');
        });

        test("given region should be Region", () => {
            expect(capitalStr("region", charConverter)).toBe("Region");
        });

        test("given Title should be Title", () => {
            expect(capitalStr("Title", charConverter)).toBe("Title");
        });
    });
});

describe("function join", () => {
    describe("given sign to init function return a function", () => {
        test("given ',' should be function", () => {
            expect(join(",")).toBeInstanceOf(Function);
        });
    });

    describe("given empty operations should return empty string", () => {
        test("given [] should be ''", () => {
            expect(join("? ")([])).toBe("");
        });
    });

    describe("given operations should return a string with separate mark each char.", () => {
        test("given [1,2,3] should be 1, 2, 3", () => {
            expect(join(", ")([1, 2, 3])).toBe("1, 2, 3");
        });

        test("given ['taiwan','japan','america'] should be taiwan! japan! america", () => {
            expect(join("! ")(["taiwan", "japan", "america"])).toBe(
                "taiwan! japan! america"
            );
        });

        test("given ['go', 'go', 'go'] should be go! go! go", () => {
            expect(join("! ")(["go", "go", "go"])).toBe("go! go! go");
        });
    });
});


