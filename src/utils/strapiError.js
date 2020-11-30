export const strapiError = (error) => {
  return error.response.data.data && error.response.data.data.length > 0
    ? error.response.data.data[0].messages[0].message
    : error.response.status === 500
    ? error.message
    : error.message;
};
