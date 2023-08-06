exports.getPageAbout = (req, res) => {
    res.render('dashboard', { verifUser: req.session.userId })
}