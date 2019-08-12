import YAML from 'yaml';

export const test = (input) => {
    const output = YAML.stringify(input);
    console.log(output);
    return output;
};
console.log(test({ foo: "bar" }));