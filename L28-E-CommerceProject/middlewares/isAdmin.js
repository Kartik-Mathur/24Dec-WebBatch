module.exports = (req,res,next)=>{
    if(req.user.role == 'admin') return next();
    return res.status(401).json({
        success: false,
        message: 'This page do not exist'
    })
}