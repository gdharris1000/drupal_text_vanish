<?php

namespace Drupal\text_vanish\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\Core\Form\FormStateInterface;


/** 
 * Text Vanish Block
 * 
 * @Block(
 * id = "text_vanish_block",
 * admin_label = @Translation("Text Vanish Block"),
 * category = @Translation("Gareth")
 * )
 * 
*/

class TextVanishBlock extends BlockBase {
    public function build(){
        return [
            '#theme' => 'text_vanish',
            '#text' => $this->configuration['text'],
            '#attached' => [
                'library' => [
                    'text_vanish/text-vanish'
                ]
            ]
        ];
    }

    public function blockForm($form, FormStateInterface $form_state){
        $form['text'] = [
            '#type' => 'textfield',
            '#title' => t('Text'),
        ];

        return $form;
    }

    public function blockSubmit($form, FormStateInterface $form_state){
        $this->configuration['text'] = $form_state->getValue('text');
    }
}