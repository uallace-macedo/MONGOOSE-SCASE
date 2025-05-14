import app from './app.js';
import envConfig from './configs/env.config.js';

const PORT = envConfig.SERVER_PORT
app.listen(PORT, () => console.log(`[SV]: Running as http://localhost:${PORT}`));
