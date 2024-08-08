const testController = (req, res) => {
    res.status(200).send({
      message: "Welcome user hii",
      success: true,
    });
  };
  
 module.exports = { testController };