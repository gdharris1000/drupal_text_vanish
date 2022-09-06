# Text Vanish Block

## About

This module provides a Drupal Block that allows a user to provide some text that will gradually disappear, character by character, at an interval set by the user.

### Compatibility

This module will work with Drupal 8 and 9.

## Installation

1. Add the folder to the **modules/custom** folder of your site.
2. Enable the module in **/admin/extend** or using Drush `drush en text_vanish`

## Usage

### Add the block

1. In the admin menu, go to **Structure** and select **Block layout**.
2. Click on the **Place block** button for the region to which you want to add the block
3. You should see **Text Vabish Block** in the list. Press the **Place block** button to add the block.

Alternativley, it can be added as a block using Drupal's Layout Builder, if you have this enabled.

### Block settings

1. Enter the text you want to vanish in the **Text** field.
2. Enter the interval that each character will disapper in milliseconds in the **Speed of Vanishing** field.
