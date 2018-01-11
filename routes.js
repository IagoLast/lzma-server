
const lzma = require('./lzma');

function decode(req, res) {
    const encoded = '3YCAiICvhYCAgICAgIC9CAjntIUbMkyt4S6xq5e9KCiZiA/k16XZNpEjL0UplWZ1Q/1d7Fyeo+O6YbO+ve/SdpY78LbyuCUtLRobMbG00Gqla/nAmUWbPFC25c8UFmdZv9xQ57TN2apJbxha4GSyBZqka/ryXIkcOOFFdm8oOWSoqWygrr4gqYEjCWwIoYmO8B2u40fKyUTaZCSJ8aLFxVD69VBH0iQr/fOtm74JO29t8w+98YaXmGaSVdyEUVnhY56gMQ9CLkTSU1cstyMQZKPAwMcUMc0f3xoc17FMDv6LJmwHlgd93FcUvnGl3NhOI898QGJ7FH+g5+YWoTw4/pUJPldlmq37psyQCdF94ptxCXuueBuGbHMCIskSWzgGLaSRyjbHhUTQ77TbEutb8nD2SRY7h/6dgI9o95a3CGgIphRnyJK1ZYOJ+44Ez9K7lzjs294qopPOe+42syihhfn0kgeuBbnr0fD99n+omrjlw3IrC3wH7/6MRL0v8p04NMxJvaPrXPRBlORsQosBaqeM6eXoIvfhIQTssmFQm8CR+gzSufMsDZesgZq6Oc5qpbCm77vaPr83dkyBM3rWY2IZKmeF8O8p9tSe+VIloKa2taiQjUpI5nIobGF9VBXw3fphvs3oqS98aMpOGCQ/266UB65ZTIQ2baydoa+PWrGNmr6xPTzuW9Tg7tGwdesKcVkVySneLq4mNk1ZJQkc7ey/6tQ+SmcR0pv9kuJpRjRL7ns3o4gZVc3fLZDGlzezPIv/SJiJAckcgoykAolNCQqXwrKpgX9UaPUAuVAlQOD/t5ebv55LdSmlAGKfJXezvPITivrbgaOY70g3/KqKbAN+At1yNX/EqApziLb94Mx84lFfWH7uPi4U9KpsqvyOcHwUXAI=';
    lzma.decode(req.body.lzma)
        .then(result => {
            res.json(result);
        })
        .catch(err => {
            res.sendStatus(500);
        });
}

module.exports = { decode };