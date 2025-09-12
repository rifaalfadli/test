// ========> Module Pattern <========
const module = (function () {
    let privateVar = 0;

    function privateFunction() {
        console.log('Private function');
    }

    return {
        publicVar: 10,
        publicFunction: function () {
            console.log('Public function');
        }
    };
})();

console.log(module.publicVar); // Output: 10
module.publicFunction(); // Output: Public function