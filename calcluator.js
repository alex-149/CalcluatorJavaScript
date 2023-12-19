const readline = require('readline');

function Calculate(x, y, math_operations) {
    if (math_operations.includes('+')) {
        return x + y;
    }
    if (math_operations.includes('-')) {
        return x - y;
    }
    if (math_operations.includes('*')) {
        return x * y;
    }
    if (math_operations.includes('/')) {
        return x / y;
    }
    if (math_operations.includes('^')) {
        return Math.pow(x, y);
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function processMathEquation() {
    rl.question('Math Equation (or type "exit" to quit): ', (z) => {
        if (z.toLowerCase() === 'exit') {
            rl.close();
        } else {
            const math_operations = [];
            const zs = z.split(' ');

            for (let i = 0; i < zs.length; i++) {
                const word = zs[i];
                if (['+', '-', '*', '/', '^'].includes(word)) {
                    math_operations.push(word);
                }
            }

            const x = parseFloat(zs[0]);
            const y = parseFloat(zs[2]);

            if (math_operations.includes('+') || math_operations.includes('-') || math_operations.includes('*') || math_operations.includes('/') || math_operations.includes('^')) {
                console.log(Calculate(x, y, math_operations));
            } else {
                console.log("Must be a valid math equation. Try again.");
            }

            processMathEquation(); // Recursive call to process the next equation
        }
    });
}

// Start the loop by calling the function
processMathEquation();
