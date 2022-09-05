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
            '#number' => $this->configuration['time'],
            '#attached' => [
                'library' => [
                    'text_vanish/text-vanish'
                ],
            'drupalSettings' => ['text_vanish' => ['time' => $this->configuration['time']]],
            ],
            '#cache' => [
                'max-age' => 0
            ],
        ];
    }

    public function blockForm($form, FormStateInterface $form_state){
        $form['text'] = [
            '#type' => 'textfield',
            '#title' => t('Text'),
        ];
        $form['time'] = [
            '#type' => 'number',
            '#title' => t('Speed of vanishing'),
        ];

        return $form;
    }

    public function blockSubmit($form, FormStateInterface $form_state){
        $this->configuration['text'] = $form_state->getValue('text');
        $this->configuration['time'] = $form_state->getValue('time');
    }
}