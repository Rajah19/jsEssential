// Object constructor

function Course(title, instructor, published, views) {
  this.title = title;
  this.instructor = instructor;
  this.published = published;
  this.views = views;
  this.updateViews = function () {
    return ++this.views;
  };
}

const course = new Course('JavaScript', 'Rajah V', 'ture', 234);

const courses = [
  new Course(),
  new Course(),
];

console.log(course);
console.log(course.title);

console.log(courses);
