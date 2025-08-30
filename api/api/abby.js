// api/abby.js
export default function handler(req, res) {
  res.status(200).json({
    message: "✅ Abby is live and ready to update the backend!",
    status: "online"
  });
} 
