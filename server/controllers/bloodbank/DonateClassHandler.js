///module export
const DonateClassHandler = (app, db) => {
  app.post("/donateblood", (req, res) => {
    const blood_group = req.body.blood_group;
    const unit = req.body.unit;
    const user_id = req.body.userID;

    console.log("bloodgroup : " + blood_group);
    console.log("userID : ", user_id);
    //query
    const sqlSelect = "SELECT * FROM blood_stocks WHERE blood_group=?";
    const sqlInsert =
      "INSERT INTO  user_donate(user_id,blood_group,unit) VALUES (?,?,?)";
    //
    db.query(sqlSelect, [blood_group], (err, result) => {
      if (err) {
        console.log("**ERROR**" + err);
      } else {
        result = JSON.parse(JSON.stringify(result));
        console.log(result[0].unit);
          //
          db.query(sqlInsert, [user_id,blood_group, unit], (err, result) => {
            if (err) {
              console.log("**ERROR ACCEPTING DONATE!" + err);
            } else {
              res.send({
                message: "DONATE ACCEPETED COLLECT IT FROM THE BLOOD BANK",
              });
            }
          });
      }
    });
    
  });
};

export default DonateClassHandler;