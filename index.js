function myFunction(value) {
    document.getElementById("preview").innerText += value;
}
function clearPreview() {
    document.getElementById("preview").innerText = "";
}
function calculate() {
    const expr = document.getElementById("preview").innerText;
    const tokens = expr.match(/\d+|\+|\-|\*|\//g);
    if (!tokens) {
        document.getElementById("preview").innerText = "Error";
        return;
    }
    let result = Number(tokens[0]);
    for (let i = 1; i < tokens.length; i += 2) {
        const op = tokens[i];
        const num = Number(tokens[i + 1]);
        if (op === "+") result += num;
        else if (op === "-") result -= num;
        else if (op === "*") result *= num;
        else if (op === "/") result /= num;
    }
    document.getElementById("preview").innerText = result;
}
