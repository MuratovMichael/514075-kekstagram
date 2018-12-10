'use strict';

var commentsUsers = [
  {
    avatar: 'img/avatar-1.svg',
    message: 'Всё отлично!',
    name: 'Артем'
  },
  {
    avatar: 'img/avatar-2.svg',
    message: 'В целом всё неплохо. Но не всё.',
    name: 'Сергей'
  },
  {
    avatar: 'img/avatar-3.svg',
    message: 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    name: 'Дима'
  },
  {
    avatar: 'img/avatar-4.svg',
    message: 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    name: 'Анна'
  },
  {
    avatar: 'img/avatar-5.svg',
    message: 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    name: 'Денис'
  },
  {
    avatar: 'img/avatar-6.svg',
    message: 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
    name: 'Михаил'
  }
];

var descriptions = [
  'Тестим новую камеру!',
  'Затусили с друзьями на море',
  'Как же круто тут кормят',
  'Отдыхаем...',
  'Цените каждое мгновенье. Цените тех, кто рядом с вами и отгоняйте все сомненья. Не обижайте всех словами......',
  'Вот это тачка!'
];

function Picture(url, likes, comments, description) {
  this.url = url;
  this.likes = likes;
  this.comments = comments;
  this.description = description;
}

var getRandomInRange = function (min, max) {
  return Math.floor(Math.random() * (max - min) - 1);
};

var getRandomElement = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var makePicturesArray = function (number) {
  var localPictures = [];
  for (var i = 1; i <= number; i++) {
    localPictures.push(new Picture('photos/' + i + '.jpg', getRandomInRange(15, 200), getRandomElement(commentsUsers), getRandomElement(descriptions)));
  }
  return localPictures;
};

var pictures = makePicturesArray(25);

var renderPicture = function (image) {
  var pictureTemplate = document.querySelector('#picture').content;
  var pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = image.url;
  pictureElement.querySelector('.picture__likes').textContent = image.likes;
  pictureElement.querySelector('.picture__comments').textContent = image.comments;
  return pictureElement;
};

var renderPictures = function (picture) {
  var picturesElement = document.querySelector('.pictures');
  var fragment = document.createDocumentFragment();
  picture.forEach(function (elem) {
    fragment.appendChild(renderPicture(elem));
  });
  picturesElement.appendChild(fragment);
};

renderPictures(pictures);

var renderComments = function (comments) {
  var socialComments = document.querySelector('.social__comments'); // Блок куда будут вставляться фотографии
  var socialCommentItem = document.querySelector('.social__comment');
  socialComments.innerHTML = '';
  socialCommentItem.querySelector('.social__picture').src = comments.avatar;
  socialCommentItem.querySelector('.social__text').textContent = comments.message;
  socialComments.appendChild(socialCommentItem);
};

var showFillElement = function (element) {
  var bigPicture = document.querySelector('.big-picture');
  bigPicture.classList.remove('hidden');
  bigPicture.querySelector('.big-picture__img img').src = element.url;
  bigPicture.querySelector('.likes-count').textContent = element.likes;
  renderComments(element.comments);
};

var socialCommentsCount = document.querySelector('.social__comment-count');
socialCommentsCount.classList.add('visually-hidden');

var commentsLoader = document.querySelector('.comments-loader');
commentsLoader.classList.add('visually-hidden');


// Обработка событий ----------------------------------------------------


var pictureContainer = document.querySelector('.pictures'); // Родительский элемент
var imageUpload = document.querySelector('.img-upload');
var uploadFile = document.querySelector('#upload-file'); // Загрузка изображения
var uploadOverlay = document.querySelector('.img-upload__overlay'); // Форма для редактирования изображения
var uploadCancel = document.querySelector('.img-upload__cancel'); // Кнопка закрытия формы
var effectLevelPin = document.querySelector('.effect-level__pin'); // Кнопка изменения глубины эффекта фотографии
var image = document.querySelector('.big-picture__img img'); // Большое изображение

var selectedImg;

pictureContainer.addEventListener('click', function (evt) {
  var target = evt.target;

  if (target.tagName === 'img') {
    renderImage(target);
  }

  function renderImage (node) {
    if (selectedImg) {
      selectedImg.classList.remove('hidden');
    }
    selectedImg = node;
    selectedImg.classList.add('hidden');
  }
});

/*
// Открытие изображения
uploadFile.addEventListener('change', function (evt) {
  evt.preventDefault();
  uploadOverlay.classList.remove('hidden');
});

// Закрытие изображения
uploadCancel.addEventListener('click', function () {
  uploadOverlay.classList.add('hidden');
});

// Открытие полноэкранного изображения
var image = document.querySelector('.big-picture__img img');

image.addEventListener('click', function() {
  bigPicture.classList.remove('hidden');
});
*/
