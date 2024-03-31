const extendHex = (shortHex) => {
  // write your code here
	 shortHex = shortHex.replace('#', '');

    // Check if the hex code is short
    if (shortHex.length === 3) {
        // Extend the hex code
        shortHex = shortHex[0] + shortHex[0] + shortHex[1] + shortHex[1] + shortHex[2] + shortHex[2];
    }

    // Return the full hex code with the '#' prefix
    return '#' + shortHex;
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
