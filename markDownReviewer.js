function updatePreview() {
    let editorContent = document.getElementById("editor").value; 
    let parsedContent = marked.parse(editorContent); 
    document.getElementById("preview").innerHTML = parsedContent;
}

function setDefault () {
    let defaultPreview = `\
# Project 2
## Markdown Reviewer
[Lets learn from freecodecamp](https://www.freecodecamp.org)\n
<button>click me!</button> we can make a button\n
we can write code together

\`look at the inline code below!\`
\`\`\`
<div></div>
\`\`\`

- Lets
- Code
- Yall
> check out block quotes\n
Be **BOLD**\n
![freeCodeCamp Logo](https://blog.adobe.com/en/publish/2022/04/26/media_1d4260b4450a0b7d7ea478ea0dedb78f810d5c58b.jpeg?width=750&format=jpeg&optimize=medium)

    `;
    document.getElementById("editor").value = defaultPreview;
    updatePreview()
}
