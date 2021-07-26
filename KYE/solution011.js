function solution(new_id) {
    let temp = new_id;
    let reg = /[\{\}\[\]\/(\s*)?,;:|\)*~`!^\+<>@\#$%&\\\=\(\'\"]/gi;
    let characters = temp.toLowerCase();
    characters = characters.replace(reg,"").replace(/\.+/g, '.');

    if (characters.charAt(0) === '.') {
        characters = characters.slice(1);
    }
    
    if (characters.charAt(characters.length-1) === '.') {
        characters = characters.slice(0, -1);
    }

    if (characters.length < 1) {
        characters = "a".repeat(3);
    }

    if (characters.length > 15) {
        characters = characters.substr(0,15);
        if (characters.charAt(characters.length-1) === '.') {
            characters = characters.slice(0, -1);
        }
    }

    if (characters.length <= 2) {
        characters += characters.substr(characters.length-1,1).repeat(3-characters.length);
    }

    return characters;
}

console.log(solution("...!@BaT#*..y.abcdefghijklm"));
console.log(solution("z-+.^."));
console.log(solution("=.="));
console.log(solution("123_.def"));
console.log(solution("abcdefghijklmn.p"));
console.log(solution("z+"));
console.log(solution(".z.z!@#@$DSFSAshgxbvaa_124"));
console.log(solution("  !@#2.$%&3.#..$%.&&*^(  "));
console.log(solution("  1``][})\|/?.>,. "));
console.log(solution(". .23456. 789012!3/ . "));
console.log(solution("zsb"));
console.log(solution("b..-...--."));