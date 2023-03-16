// interface Person {
//     name: String;
//     age?: number;
// }

type Person = {
    name: String;
    age?: number;
}

type Developer = Person & {
    skills: string[];
}

const person: Person = {
    name: 'jsj',
    age: 20
};

const expert: Developer = {
    name: 'jsj',
    skills: ['javascript', 'react', 'typescript']
};

type People = Person[];
const people: People = [person, expert];

type Color = 'red' | 'orange' | 'yellow';
const color: Color = 'orange';

