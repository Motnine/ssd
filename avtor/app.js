const express = require("express");

const app = express();

app.set("view engine", "pug");
app.use(express.static('public'))
app.use("/vhod", function (request, response) {
  response.render("vhod", {
    title: "Регистрация",
    emailsVisible: true,
    emails: ["gavgav@mycorp.com", "mioaw@mycorp.com"],
    phone: "+1234567890",
  });
});
app.use("/reg", function (request, response) {
  response.render("reg", {
    title: "Регистрация",
    emailsVisible: true,
    emails: ["gavgav@mycorp.com", "mioaw@mycorp.com"],
    phone: "+1234567890",
  });
});

app.use("/", function (request, response) {
  response.render("glav", {
    title: "Glav",
    emailsVisible: true,
    emails: ["gavgav@mycorp.com", "mioaw@mycorp.com"],
    phone: "+1234567890",
  });
});
app.listen(3000);
