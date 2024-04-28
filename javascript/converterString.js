export function converter(stringValores){
 
    stringValores = stringValores.replace(/, /g, ',');
    return stringValores.split(',');
}
