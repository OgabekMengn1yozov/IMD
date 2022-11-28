const app = require("./app");
const { PORT } = require("./config");

app.listen(PORT, () => console.log(`SERVER READY AT PORT ${PORT}`));
