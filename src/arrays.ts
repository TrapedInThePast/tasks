/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length === 0) {
        return [];
    } else if (numbers.length === 1) {
        const newArray: number[] = [numbers[0], numbers[0]];
        return newArray;
    } else {
        const newArray: number[] = [numbers[0], numbers[numbers.length - 1]];
        return newArray;
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((num: number): number => num * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const intArray = numbers.map((str: string): number =>
        parseInt(str) ? parseInt(str) : 0
    );
    return intArray;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const removed = amounts.map((num: string): string =>
        num[0] === "$" ? num.replace("$", "") : num
    );
    const intArray = removed.map((str: string): number =>
        parseInt(str) ? parseInt(str) : 0
    );
    return intArray;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const allCaps = messages.map((str: string): string =>
        str.endsWith("!") ? str.toUpperCase() : str
    );
    const removeQuestions = allCaps.filter(
        (question: string): boolean => !question.endsWith("?")
    );
    return removeQuestions;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const short = words.filter((word: string): boolean => word.length < 4);
    return short.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length === 0) {
        return true;
    } else {
        const onlyRGB = colors.filter(
            (color: string): boolean =>
                color === "red" || color === "green" || color === "blue"
        );
        if (onlyRGB.length === colors.length) {
            return true;
        }
        return false;
    }
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    let sum = 0;
    if (addends.length === 0) {
        return "0=0";
    }
    const added = addends.join("+");
    addends.map((add: number): number => (sum += add));
    return sum.toString() + "=" + added;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const firstNeg = values.findIndex((value: number): boolean => value < 0);
    if (firstNeg === -1) {
        const total = values.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0
        );
        const arrayOne = [...values, total];
        return arrayOne;
    } else {
        const isLeft = [...values];
        isLeft.splice(firstNeg);
        const count = isLeft.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0
        );
        const arrayTwo = [...values];
        arrayTwo.splice(firstNeg + 1, 0, count);
        return arrayTwo;
    }
}
