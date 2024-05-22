import mongoose from "mongoose";

import app from "./app";
import config from "./config";


// const port =500;


// main().catch(err => console.log(err));


async function main() {


  try{
    await mongoose.connect(config.db_url as string);

    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`)
    })
  }catch(err){
    console.log(err)

  }
    
 
}

main()