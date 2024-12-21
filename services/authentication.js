import jwt from "jsonwebtoken";

const secret = "fklwe&hih";

function createTokenForUser(user) {
  const { _id, email, fullName, profileImageURL, role } = user;
  const payload = {
    _id,
    email,
    fullName,
    profileImageURL,
    role,
  };
  const token = jwt.sign(payload, secret);
  return token;
}

function validateTokenForUser(token) {
  const payload = jwt.verify(token, secret);
  return payload;
}

export { createTokenForUser, validateTokenForUser };
