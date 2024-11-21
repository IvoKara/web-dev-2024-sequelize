const axios = require('axios');


async function testPostSubjectRequest() {

  const subjects = ["Math", "Science", "Arts", "History"]
  try {
    for (let i = 0; i < subjects.length; i++) {
      const response = await axios.post('http://localhost:3100/subject', {
        name: subjects[i]
      });
      console.log('Response data:', response.data);
    }
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
  }
}
async function testPostUniversityRequest() {
  try {
    const response = await axios.post('http://localhost:3100/university', {
      name: 'Sofia University',
      town: 'Sofia'
    });
    console.log('Response data:', response.data);
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
  }
}


async function testPostUserRequest() {
  try {
    const response = await axios.post('http://localhost:3000/user', {
      name: 'John Doe',
      email: 'johndoe@example.com',
      universityId: 1
    });
    console.log('Response data:', response.data);
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
  }
}
(async () => {
  await testPostSubjectRequest();
  await testPostUniversityRequest();
  await testPostUserRequest();
})()