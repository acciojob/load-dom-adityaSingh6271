//your JS code here. If required.
 document.addEventListener('DOMContentLoaded', function () {
        // Get the body element
        var body = document.body;

        // Check if the body is empty (contains no child nodes)
        if (body.childElementCount === 0) {
            // Create a text node with the desired string
            var textNode = document.createTextNode('DOM load success');

            // Append the text node to the body
            body.appendChild(textNode);
        }
    });

