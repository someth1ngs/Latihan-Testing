const base = require("../controllers/baseController.js");

const mockRequest = (body = {}) => ({
  body,
});
const mockResponse = () => {
  const res = {};
  res.json = jest.fn().mockReturnValue(res);
  res.status = jest.fn().mockReturnValue(res);
  return res;
};

describe("base.index function", () => {
  test('res.json called with {status:true, message:"Hello World!"}', (done) => {
    const req = mockRequest();
    const res = mockResponse();
    base.index(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      status: true,
      message: "Hello World",
    });

    done();
  });
});
