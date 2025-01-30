const { makeHash,matchHashed } = require("../utils/config");

class hashController {
    async hashPassword(req, res) {
        try {
            if (req.params.password) {
                return res.json({
            hashed: await makeHash(req.params.password)
        });
            } else {
                throw new Error("No Password Provided")
            }
        } catch (error) {
            return res.json({
                error : error.message
            })
        }
    }
    async compareHashed(req, res) {
        try {
            if (req.params.password && req.params.hashed) {
                return res.json({
            hashed: await matchHashed(req.params.hashed,req.params.password)
        });
            } else {
                throw new Error("No Password Provided")
            }
        } catch (error) {
            return res.json({
                error : error.message
            })
        }
    }
}

module.exports = new hashController();
