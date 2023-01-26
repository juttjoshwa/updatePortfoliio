import User from "../model/User.js" 

class useController {
    static createUser = async (req, res) => {
        const { name, email, feedback } = req.body;
        const { filename } = req.file;
         
        try {
            // if (name && email && feedback && filename) { 
            if (name && email && feedback && filename){
                const newUser = new User({
                    name : name, 
                    Email : email, 
                    feedback : feedback,
                    image : filename
                })

                const new_User = await newUser.save();
                if (new_User) {
                    return res.status(200).json(newUser)
                }
                else {
                    return res.status(400).json({ massage: "something wrong" })
                }
            }
            else {
                return res.status(400).json({ massage: "all fields are require !!" })
            }
        } catch (error) {
            return res.status(400).json(error)
        }
    }

    static getALLuser = async (req, res) => {

        try {
            const allUser = await User.find({})
            if (allUser) {
                return res.status(200).json(allUser);
            }
        } catch (error) {
            return res.status(400).json(error)
        }

    }


}

export default useController;