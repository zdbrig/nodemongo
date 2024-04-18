const axios = require('axios');

const BASE_URL = 'http://localhost:3000/subscribers';

async function createSubscriber() {
  try {
    const response = await axios.post(BASE_URL, {
      name: 'John Doe',
      subscribedToChannel: 'Channel 1'
    });
    console.log('Created subscriber:', response.data);
  } catch (error) {
    console.error('Error creating subscriber:', error.message);
  }
}

async function getAllSubscribers() {
  try {
    const response = await axios.get(BASE_URL);
    console.log('All subscribers:', response.data);
  } catch (error) {
    console.error('Error getting subscribers:', error.message);
  }
}

async function getSubscriberById(id) {
  try {
    const response = await axios.get(`${BASE_URL}/${id}`);
    console.log('Subscriber:', response.data);
  } catch (error) {
    console.error('Error getting subscriber:', error.message);
  }
}

async function updateSubscriber(id) {
  try {
    const response = await axios.patch(`${BASE_URL}/${id}`, {
      name: 'Updated Name'
    });
    console.log('Updated subscriber:', response.data);
  } catch (error) {
    console.error('Error updating subscriber:', error.message);
  }
}

async function deleteSubscriber(id) {
  try {
    await axios.delete(`${BASE_URL}/${id}`);
    console.log('Subscriber deleted');
  } catch (error) {
    console.error('Error deleting subscriber:', error.message);
  }
}

// Run the test functions
(async () => {
  await createSubscriber();
  await getAllSubscribers();

  const subscriberId = '60a1c1d1f1d1c1a1c1d1c1d1'; // Replace with a valid subscriber ID
  await getSubscriberById(subscriberId);
  await updateSubscriber(subscriberId);
  await deleteSubscriber(subscriberId);
})();