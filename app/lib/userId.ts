import Cookies from 'js-cookie';

export default function getUserID() {
  // Check if the userID cookie is set
  let userID = Cookies.get('userID');

  if (!userID) {
    // Generate a new UUID
    userID = crypto.randomUUID();

    // Set the new UUID as a cookie
    Cookies.set('userID', userID, { expires: 365 }); // Expires in 1 year
  }

  return userID;
}
