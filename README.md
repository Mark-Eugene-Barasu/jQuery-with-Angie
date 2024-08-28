# jQuery with Angela Yu

So, it is best practice to inject the jQuery CDN link at the bottom of body element, But before the link to JavaScript.

now, if you inject the jQuery CDN link in the head, it will not work unless you type 

    $(document).ready(function(){

        ```
        JavaScript code goes in here now

        ```
    });

So, just to save garde. just put the jQuery link at the bottom of the body element in the HTML but above the JavaScript link