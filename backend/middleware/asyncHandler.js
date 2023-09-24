// using an asyncHandler makes the code much more clean without a lot of try and catchs that is not necessary
const asyncHandler = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

export default asyncHandler;