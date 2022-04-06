export const USER_LOGIN = 'USER_LOGIN';
export const GET_TOKEN = 'GET_TOKEN';
export const GET_SCORE = 'GET_SCORE';

export const loginAction = (name, email) => ({
  type: USER_LOGIN,
  name,
  email,
});

export const getToken = (token) => ({
  type: GET_TOKEN,
  token,
});

export const getScore = (score) => ({
  type: GET_SCORE,
  score,
});

export const fetchUser = () => async (dispatch) => {
  try {
    const response = await fetch('https://opentdb.com/api_token.php?command=request');
    const data = await response.json();
    dispatch(getToken(data));
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
