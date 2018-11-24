// 1

function Pictures(url, like, comments, description) {
  this.url = url;
  this.like = like;
  this.comments = comments;
  this.description = description;
}

var getLikes = function (min, max) {
  var like = Math.floor(Math.random() * (max - min) - 1);
  return like;
}

var getComments = function() {
  var renderComment = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
  ];

  var textComment = renderComment[Math.floor(Math.random() * renderComment.length)];
  return textComment;
}

var getDescription = function () {
  var renderDescription = [
    'Тестим новую камеру!',
    'Затусили с друзьями на море',
    'Как же круто тут кормят',
    'Отдыхаем...',
    'Цените каждое мгновенье. Цените тех, кто рядом с вами и отгоняйте все сомненья. Не обижайте всех словами......',
    'Вот это тачка!'
  ];

  var textDescription = renderDescription[Math.floor(Math.random() * renderDescription.length)];
  return textDescription;
}

var pictureArray = [];

for (var i = 0; i < 25; i++) {
  var picture = new Pictures('photos/{{i}}.jpg', getLikes(15, 200), getComments(), getDescription());
  pictureArray.push(new Pictures(i))
}

// 2

var image = document.querySelectorAll('.picture__img');
image.src = picture['photos/{{i}}.jpg'];

var pictureLikes = document.querySelectorAll('.picture__likes');
pictureLikes.textContent = picture.getLikes(15, 200);

var pictureComments = document.querySelectorAll('.picture__comments');
pictureComments.textContent = picture.getComments();

// 3

var fragment = document.createDocumentFragment();

// 4

var bigPicture = document.querySelector('.big-picture');
bigPicture.className.remove('hidden');

var bigImage = document.querySelector('.big-picture__img img');
bigImage.src = picture['photos/{{i}}.jpg'];

var likesCount = document.querySelectorAll('.likes-count');
likesCount.textContent = picture.getLikes(15, 200);

var commentsCount = document.querySelectorAll('.comments-count');
commentsCount.textContent = picture.getComments();

var pictureDescription = document.querySelectorAll('.social__comments');

// 5

var commentsLoader = document.querySelector('.comments-loader');
commentsLoader.className.remove('comments-loader');
commentsLoader.className.add('visually-hidden');

var socialCommentsCount = document.querySelector('.social__comment-count');
socialCommentsCount.className.remove('social__comment-count');
socialCommentsCount.className.add('visually-hidden');
