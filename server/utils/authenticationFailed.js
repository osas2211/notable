module.exports = authenticationFailed = (response, message) => {
  return response.status(401).json({
    authenticated: false,
    message: `User authentication has failed: ${message}`,
  })
}
