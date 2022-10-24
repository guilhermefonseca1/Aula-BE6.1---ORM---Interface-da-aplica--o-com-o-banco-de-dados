const { Course } = require('./models');

//O Course DEVE SER USADO DE FORMA DESESTRUTURADA

async function main() {
  const newCourse = { name: 'Desenvolvimento Web' };
  const course = await Course.create(newCourse);
  console.log(course.dataValues);

  // console.log(Course);
  // const courses = await Course.findAll();
  // console.log(courses);

  // const course = await Course.findByPk(3);
  // console.log(course.dataValues);

  // const activeCourses = await Course.findAll(
  //   { where: { active: false } },
  // );
  // console.log(activeCourses);

  // await Course.update(
  //   { active: 0 },
  //   { where: { id: 1 } },
  // );

  // await Course.destroy({ where: { id: 2 }});

}

//PARA RODAR O NODE BASTA INSERIR: node e o nome do endereço do 
//arquivo, no caso src/main.js
//node src/main.js

main();