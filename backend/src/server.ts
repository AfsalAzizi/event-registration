import app from "./app";
import connectDB from "./config/db";

const PORT = process.env.PORT || 5004;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server is running at http://localhost:${PORT}`);
  });
});
