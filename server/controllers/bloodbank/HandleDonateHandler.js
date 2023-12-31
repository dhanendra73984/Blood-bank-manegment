const HandleDonatetHandler = (app, db) => {
  app.get("/login/emp/hd", (req, res) => {
    //query
    const sqlSelect = "SELECT * FROM user_donate";

    //
    db.query(sqlSelect, (err, result) => {
      if (err) {
        console.log("**ERROR**" + err);
      }
      if (result.length > 0) {
        res.send(result);
      }
    });
  });

  app.delete("/login/emp/hd/:req_id", (req, res) => {
    //variables
    const req_id = req.params.req_id;

    //query
    const sqlDelete = "DELETE FROM user_donate WHERE req_id= ?";
    const sqlSelect1 = "SELECT * FROM user_donate WHERE req_id=?";
    const sqlSelect2 = "SELECT * FROM blood_stocks WHERE blood_group=?";
    const sqlUpdate = "UPDATE blood_stocks SET unit=? WHERE blood_group=? ";
    //
    db.query(sqlSelect1, req_id, (err, result) => {
      if (err) {
        console.log("**ERROR1**" + err);
      } else {
        result = JSON.parse(JSON.stringify(result));
        var req_blood_group = result[0].blood_group;
        var req_unit = result[0].unit;
        //
        db.query(sqlSelect2, [req_blood_group], (err, result) => {
          if (err) {
            console.log("**ERROR2**" + err);
          } else {
            result = JSON.parse(JSON.stringify(result));
        var stock_unit=result[0].unit;
            var left_unit=stock_unit+req_unit;
            //
            db.query(sqlUpdate,[left_unit,req_blood_group],(err,result)=>{
                if(err){
                    console.log("**ERROR3**"+err);
                }else{
                    //
                    db.query(sqlDelete,req_id,(err,result)=>{
                        if(err){
                            console.log("**ERROR**"+err);
                        }
                        else{
                            res.send({message: "YOUR DONATE STORED IN BLOOD BANK!"})
                        }
                    })
                }
            })

        
          }
        });
      }
    });
  });
};

export default HandleDonatetHandler;