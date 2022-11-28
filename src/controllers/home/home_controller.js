module.exports = class HomeControllers {
    static async HomeGET(req, res) {
        try {
            res.render("index")
        } catch (e) {
            console.log(e)
        }
    }
}