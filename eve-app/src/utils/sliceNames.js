export function sliceName(word) {

    const sliceWord = word.slice(0,15);

    const healthyWord = `${sliceWord}...`;

    return healthyWord;   

}