

let message = (function(){
    let greeting = 'Hello';
    let deepGreeting = function() {
        return greeting;
    };
    return {
        deepRemix: deepGreeting,
    };

})();





console.log(message.deepRemix());
