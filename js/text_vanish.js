(function ($, Drupal, drupalSettings) {
  drupalSettings.text_vanish.time
    ? (time = drupalSettings.text_vanish.time)
    : (time = 0);

  console.log(time);
  const element_text = document.getElementById("text-vanish-content");

  text_split = element_text.innerHTML.split("");

  text_split_ids = [];

  for (i = 0; i < text_split.length; i++) {
    text_split_ids.push(
      "<span id='text-split-" + i + "'>" + text_split[i] + "</span>"
    );
  }

  element_text.innerHTML = text_split_ids.join("");

  console.log(element_text.innerHTML);

  var counter = 0;

  setInterval(function () {
    if (counter < text_split.length) {
      let element_id = "text-split-" + counter;
      element = document.getElementById(element_id);
      hideText(element);
      counter++;
    }
  }, time * 1000);

  function hideText(element) {
    element.innerHTML = "x";
    console.log(element.innerHTML);
  }
})(jQuery, Drupal, drupalSettings);
