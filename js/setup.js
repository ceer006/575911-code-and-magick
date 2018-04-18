'use strict';

var AMOUNT_PLAYERS = 4;

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор',
  'Юлия', 'Люпита', 'Вашингтон'];

var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко',
  'Топольницкая', 'Нионго', 'Ирвинг'];

var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)',
  'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'];

var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var wizards = [];

var userDialog = document.querySelector('.setup');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content.querySelector('.setup-similar-item');

var getRandom = function (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

var getWizardData = function () {
  return {
    name: WIZARD_NAMES[getRandom(0, WIZARD_NAMES.length)] + ' '
    + WIZARD_SURNAMES[getRandom(0, WIZARD_SURNAMES.length)],
    coatColor: COAT_COLOR[getRandom(0, COAT_COLOR.length)],
    eyesColor: EYES_COLOR[getRandom(0, EYES_COLOR.length)]};
};

for (var i = 0; i < AMOUNT_PLAYERS; i++) {
  wizards[i] = getWizardData();
}

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

userDialog.classList.remove('hidden');

var fragment = document.createDocumentFragment();
for (i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
