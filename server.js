const app=require("./scr/app");
require("dotenv").config();

const PORT=process.env.PORT;

app.listen(PORT,()=>{
     console.log(`${process.env.APP_NAME} running on port ${PORT}`);
});

