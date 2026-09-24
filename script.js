const markdownInput = document.getElementById("markdown-input");
const htmlOutput = document.getElementById("html-output");
const preview = document.getElementById("preview");

function convertMarkdown() {
  const text = markdownInput.value;

  const converted = text
    // Headings (must start at line start)
    .replace(/^### (.*$)/gim, "<h3>$1</h3>")
    .replace(/^## (.*$)/gim, "<h2>$1</h2>")
    .replace(/^# (.*$)/gim, "<h1>$1</h1>")
    // Blockquotes (must start at line start)
    .replace(/^> (.*$)/gim, "<blockquote>$1</blockquote>")
    // Images
    .replace(/!\[([^\]]+)\]\(([^)]+)\)/g, '<img alt="$1" src="$2">')
    // Links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
    // Bold text (** or __)
    .replace(/(\*\*|__)(.*?)\1/g, "<strong>$2</strong>")
    // Italic text (* or _)
    .replace(/(\*|_)(.*?)\1/g, "<em>$2</em>");

  return converted;
}

markdownInput.addEventListener("input", () => {
  const result = convertMarkdown();
  htmlOutput.textContent = result;
  preview.innerHTML = result;
});