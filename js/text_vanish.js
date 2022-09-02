const element_text = document.getElementById("text-vanish-content");

text_split = element_text.innerHTML.split("");

text_split_ids = [];

for (i = 0; i < text_split.length; i++) {
  text_split_ids.push(
    "<span id='text-split-" + i + "'>" + text_split[i] + "</span>"
  );
}

element_text.innerHTML = text_split_ids;

console.log(element_text.innerHTML);
