'use strict'

var comments = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

var descriptions = [
  'Тестим новую камеру!',
  'Затусили с друзьями на море',
  'Как же круто тут кормят',
  'Отдыхаем...',
  'Цените каждое мгновенье. Цените тех, кто рядом с вами и отгоняйте все сомненья. Не обижайте всех словами......',
  'Вот это тачка!'
];

function Picture(url, like, comments, description) {
  this.url = url;
  this.like = like;
  this.comments = comments;
  this.description = description;
}

var renderLikes = function (min, max) {
  return Math.floor(Math.random() * (max - min) - 1);
};

var renderRandomElement = function (arr) {
  return arr[Math.floor(Math.random () * arr.length)];
};

var renderPictures = function () {
  var pictures = [];
  return pictures;
};

for (var i = 0; i < 25; i++) {
  pictures.push(new Picture(url, renderLikes(15, 200), getComments(), getDescription()));
}

var getPicture = function (pictures) {
  pictures.forEach (elem, i) {
    pictures[i];
  }

  var image = document.querySelectorAll('.picture__img');
  image.src = picture.url; // Подставляет адрес изображения
  var pictureLikes = document.querySelectorAll('.picture__likes');
  pictureLikes.textContent = picture.getLikes(15, 200); // Количество лайков
  var pictureComments = document.querySelectorAll('.picture__comments');
  pictureComments.textContent = picture.getComments(); // Количество комментариев

  var fragment = document.createDocumentFragment(); // Document Fragment
  var picture = document.querySelector('#picture'); // Шаблон Picture
  picture.appendChild(fragment); // Добавляет fragment в шаблон

  var bigPicture = document.querySelector('.big-picture');
  bigPicture.classList.remove('hidden'); // Удаляет класс у big-picture

  var bigImage = document.querySelector('.big-picture__img');
  bigImage.src = pictures.url; // Подставляет адрес изображения

  var likesCount = document.querySelectorAll('.likes-count');
  likesCount.textContent = pictures.getLikes(15, 200); // Количество лайков

  var commentsCount = document.querySelectorAll('.comments-count');
  commentsCount.textContent = pictures.getComments(); // Количество комментариев

  // Блок комментария

  var socialComments = document.querySelectorAll('.social__comments');

  var socialPicture = document.querySelectorAll('.social__picture');
  socialPicture.appendChild = renderLikes(15, 200);

  var socialText = document.querySelectorAll('.social__text');
  socialText.appendChild = renderRandomElement(comments);

  var socialCaption = document.querySelectorAll('.social__caption');
  socialCaption.appendChild = renderRandomElement(description);

  // Скрываю элементы
  
  var commentsLoader = document.querySelector('.comments-loader');
  commentsLoader.classList.remove('comments-loader');
  commentsLoader.classlist.add('visually-hidden');

  var socialCommentsCount = document.querySelector('.social__comment-count');
  socialCommentsCount.classlist.remove('social__comment-count');
  socialCommentsCount.classList.add('visually-hidden');
};
