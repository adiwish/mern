const home = async(req,res)=>{
    try{
        res.send("asyn functionn");
    }
    catch (error){
        console.log(error);
    }
}
const register = async(req,res)=>{
    try{
        res.send("register page");
    }
    catch (error){
        console.log(error);
    }
}

module.exports={home,register};