import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import postRoutes from './routes/posts.js';
//app.use(express.json());
const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: false }));
app.use(cors());
app.use('/posts', postRoutes);

const CONNECTION_URL = 'mongodb+srv://chrisong:thehobo123@cluster0.rdsxu.mongodb.net/Cluster0?retryWrites=true&w=majority';
//console.log(process.env.REACT_APP_KEY);
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);