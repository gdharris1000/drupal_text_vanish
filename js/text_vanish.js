(function ($, Drupal, drupalSettings) {
  //Get time value from the block config
  drupalSettings.text_vanish.time
    ? (time = drupalSettings.text_vanish.time)
    : (time = 0);

  //Get text element
  const element_text = document.getElementById("text-vanish-content");

  //Split by character
  text_split = element_text.innerHTML.split("");

  //Add span tag to each character
  text_split_ids = [];

  for (i = 0; i < text_split.length; i++) {
    text_split_ids.push(
      "<span id='text-split-" + i + "'>" + text_split[i] + "</span>"
    );
  }

  //Replace text element with the version that has a span tag for each character
  element_text.innerHTML = text_split_ids.join("");

  //After an interval make each character disappear
  var counter = 0;

  setInterval(function () {
    if (counter < text_split.length) {
      let element_id = "text-split-" + counter;
      element = document.getElementById(element_id);
      hideText(element);
      counter++;
    }
  }, time);

  function hideText(element) {
    element.classList.add("vanished-text");
  }
})(jQuery, Drupal, drupalSettings);
