const axios = require('axios');



async function testPutSubjectRequest() {

  const userId = 1
  const subjectIds = [3,4]
  try {
      const response = await axios.put('http://localhost:3100/user/subjects', {
        userId,
        subjects: subjectIds
      });
      console.log('Response data:', response.data);
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
  }
}
(async () => {
  await testPutSubjectRequest();
})()