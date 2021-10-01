export function clampString(inputString: string, maxLength: number) {
    if(inputString.length <= maxLength) {
        return inputString;
    }
    inputString = inputString.slice(0, maxLength);
    inputString += "...";

    return inputString;
}