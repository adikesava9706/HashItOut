const express = require('express');
const multer = require('multer');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB connection
const mongoURI = 'mongodb://localhost:27017/myteam';
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection;
db.once('open', () => {
    console.log('MongoDB connected');
});

// Multer setup for file uploads
const upload = multer();

// Mongoose schema for form data
const MemberSchema = new mongoose.Schema({
    name: String,
    email: String,
    hobbies: String,
    message: String,
    file: {
        data: Buffer, // Store file data as a Buffer
        contentType: String, // Store the file's MIME type
    },
});
const Member = mongoose.model('Member', MemberSchema);

// Routes
app.post('/add', upload.single('file'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'File is required!' });
        }
        if (!req.file.mimetype.startsWith('image/')) {
            return res.status(400).json({ message: 'Only image files are allowed!' });
        }

        // Save form data and file in MongoDB
        const newMember = new Member({
            name: req.body.name,
            email: req.body.email,
            hobbies: req.body.hobbies,
            message: req.body.message,
            file: {
                data: req.file.buffer, // Store the file data
                contentType: req.file.mimetype, // Store the file's MIME type
            },
        });
        await newMember.save();

        res.json({ message: 'Form data and file saved successfully!' });
    } catch (error) {
        console.error('Error saving data:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.get('/members', async (req, res) => {
    try {
        const members = await Member.find();

        // Map through members to include Base64 encoded image data
        const membersWithImages = members.map(member => ({
            id: member._id,
            name: member.name,
            email: member.email,
            hobbies: member.hobbies,
            message: member.message,
            file: {
                data: member.file.data.toString('base64'), // Convert Buffer to Base64
                contentType: member.file.contentType,
            },
        }));

        res.json(membersWithImages);
    } catch (error) {
        console.error('Error fetching members:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.get('/members/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const member = await Member.findById(id);

        if (!member) {
            return res.status(404).json({ message: 'Member not found' });
        }

        // Convert the file data to Base64
        const memberWithImage = {
            id: member._id,
            name: member.name,
            email: member.email,
            hobbies: member.hobbies,
            message: member.message,
            file: {
                data: member.file.data.toString('base64'),
                contentType: member.file.contentType,
            },
        };

        res.json(memberWithImage);
    } catch (error) {
        console.error('Error fetching member:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.get('/api/members', async (req, res) => {
    try {
        const members = await Member.find();

        const membersWithImages = members.map(member => ({
            id: member._id,
            name: member.name,
            email: member.email,
            hobbies: member.hobbies,
            message: member.message,
            file: {
                data: member.file.data.toString('base64'),
                contentType: member.file.contentType,
            },
        }));

        res.json(membersWithImages);
    } catch (error) {
        console.error('Error fetching members:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


app.get('/api/members/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const member = await Member.findById(id);

        if (!member) {
            return res.status(404).json({ message: 'Member not found' });
        }

        const memberWithImage = {
            id: member._id,
            name: member.name,
            email: member.email,
            hobbies: member.hobbies,
            message: member.message,
            file: {
                data: member.file.data.toString('base64'),
                contentType: member.file.contentType,
            },
        };

        res.json(memberWithImage);
    } catch (error) {
        console.error('Error fetching member:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});