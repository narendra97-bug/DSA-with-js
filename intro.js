let input_stdin = "";

process.stdin.on('data', data => input_stdin += data);
process.stdin.on('end', () => main());

function main() {
	//Your code goes here
	//Access standard input using the input_stdin variable
	
}