let data: number[] = [7, 2, 3, -55, -6, 55, 2, -1, 1, 6, 0, -45];
console.log(`Одномерный массив:`);
console.log(data);
function getMedian(arr: number[]): number {
    const sorted = [...arr].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    if (sorted.length % 2 === 0) {
        return (sorted[mid - 1] + sorted[mid]) / 2;
    } else {
        return sorted[mid];
    }
}
const median = getMedian(data);
console.log(`Медианное значение: ${median}`);
let matrix = [
    [1, 1, 2],
    [0, 9, 5],
    [4, 0, 7]
];
console.log(`Матрица целых чисел: `);
console.log(matrix);
function countNonZero(matrix: number[][], startRow: number, endRow: number, startCol: number, endCol: number): number {
    let count = 0;
    for (let i = startRow; i <= endRow; i++) 
        {
        for (let j = startCol; j <= endCol; j++) 
            {
            if (matrix[i][j] !== 0) 
                {
                count++;
            }
        }
    }
    return count;
}
const nonZeroCount = countNonZero(matrix, 0, 2, 0, 1);
console.log(`Количество ненулевых значений в заданном отрезке: ${nonZeroCount}`);
let myTuple: [number, string, number] = [5, "Example", 3];
console.log(`Кортеж: `);
console.log(myTuple);
function multiplyNumbersFromTuple(tuple: [number, string, number]): number 
{
    const [num1, , num2] = tuple;  
    return num1 * num2; 
}
const result = multiplyNumbersFromTuple(myTuple);
console.log(`Результат произведения чисел: ${result}`);
enum Vitamin {
    A = "A",
    B3 = "B3",
    B6 = "B6",
    B12 = "B12",
    E = "E"
}
console.log(`Перечисление витаминов: `);
console.log(Vitamin);
console.log(`Выбранный витамин: ${Vitamin.B6}`);
class Pet {
    name: string = 'Some pet'
    age: number = -1
    speak() {
    return "No speak. I am fish!";
    }
    }
    
    class Dog extends Pet {
    label = "AngryHunter";
    age = 8;
    speak() {
    return "Yaw-Gaw!";
    }
    }
    class Cat extends Pet {
    name = 'Barsik';
    age = 2;
    speak() {
    return "Miyau!";
    }
}
    function printPet<T extends Pet>(pet: T): void {
        console.log(`Name: ${pet.name}, Age: ${pet.age}, Speak: ${pet.speak()}`);
    }
    const myDog = new Dog();
    const myCat = new Cat();
    console.log(`Результат выполнения четвёртого задания: `);
    printPet(myDog);
    printPet(myCat);
    type VitaminInfo = {
        name: Vitamin; 
        description: string; 
        source: string[];     
    }
    const vitaminB6: VitaminInfo = {
        name: Vitamin.B6,
        description: "Витамин B6 необходим человеку.",
        source: ["Печень", "Картофель", "Бананы", "Курица", "Рыба"]
    };
    console.log(JSON.stringify(vitaminB6, null, 2));






