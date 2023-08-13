import bodyParser from "body-parser";
var urlencodedParser = bodyParser.urlencoded({ extended: false }); //middileware

//module export
const EmployeeLoginHandler = (app, db) => {
  app.post("/login/emp", (req, res) => {
    //variables
    const userName = req.body.empUserName;
    const password = req.body.empPassword;

    //query
     const sqlquery = "SELECT * FROM emp_login WHERE userName= ? AND password=?";
   // const sqlSelect  = `SELECT * FROM emp_login WHERE userName= ${userName} AND password=${password}`;

    //
    db.query(sqlquery, [userName, password], (err, result) => {
      if (err) {
        res.send({ err: err });
        console.log("**ERROR**");
      }
      /////
      if (result.length > 0) {
        res.send(result);
        console.log("**RESULT SENT TO FRONT END**");
      } else {
        res.send({ message: "wrong username/password combination!" });
        console.log("**INVALID COMBINATION**");
      }
    });
  });
};

export default EmployeeLoginHandler;