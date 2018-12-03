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
    avatar: 'mg/avatar-4.svg',
    message: 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    name: 'Анна'
  },
  {
    avatar: 'img/avatar-5.svg',
    message: 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    name: 'Денис'
  },
  {
    avatar: 'mg/avatar-6.svg',
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

var showFillElement = function (element) {
  var bigPicture = document.querySelector('.big-picture').content;
  bigPicture.classList.remove('hidden');
  var socialElement = bigPicture.cloneNode(true);
  socialElement.querySelector('.big-picture__img').src = element.url;
  socialElement.querySelector('.likes-count').textContent = element.likes;
  socialElement.querySelector('.comments-count').src = element.comments;
  return socialElement;
};

var renderComments = function (element) {
  var socialComments = document.querySelector('.social__comments'); // Блок куда будут вставляться фотографии
  var socialCommentItem = document.querySelector('.social__comment').content;
  var elementComment = socialCommentItem.cloneNode(true);
  socialCommentItem.appendChild(showFillElement(pictures[0]));
  elementComment.querySelector('.social__picture').src = 'img/avatar-' + getRandomInRange(1, 6) + '.svg';
  elementComment.querySelector('.social__text').textContent = element.comments;
  socialComments.appendChild(socialCommentItem);
};

renderComments(pictures);

var socialCommentsCount = document.querySelector('.social__comment-count');
socialCommentsCount.classlist.remove('social__comment-count');
socialCommentsCount.classList.add('visually-hidden');

var commentsLoader = document.querySelector('.comments-loader');
commentsLoader.classList.remove('comments-loader');
commentsLoader.classlist.add('visually-hidden');
