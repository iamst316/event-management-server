let express = require('express');
let app = express();
const PORT = 5000;

app.use(express.json());
//----------------------------------------------






//----------------------------------------------

app.listen(PORT,()=>{
    console.log(`Server Running at PORT ${PORT}`);
})