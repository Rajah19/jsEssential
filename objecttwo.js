// const course = new Object();

// course.title = 'JavaScript Essental Training';
// course.instructor = 'Rajah V';
// course.level = 1;
// course.published = true;
// course.view = 0;

// console.log(course);

const course2 = {
  title: 'JavaScript Essental Training',
  instructor: 'Rajah V',
  level: 1,
  published: true,
  views: 0,
  updateViews: function () {
    return ++course2.views;
  },
};

console.log(course2.views);
course2.updateViews();
console.log(course2.views);
