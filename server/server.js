const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const STAFF_FILE_PATH = path.join(__dirname, '../src/data/staff.json');

// Get all staff
app.get('/api/staff', async (req, res) => {
  try {
    const data = await fs.readFile(STAFF_FILE_PATH, 'utf8');
    const staffData = JSON.parse(data);
    res.json(staffData.staff);
  } catch (error) {
    res.status(500).json({ error: 'Error reading staff data' });
  }
});

// Add new staff member
app.post('/api/staff', async (req, res) => {
  try {
    const data = await fs.readFile(STAFF_FILE_PATH, 'utf8');
    const staffData = JSON.parse(data);
    const newStaff = {
      ...req.body,
      id: Math.max(...staffData.staff.map(s => s.id), 0) + 1
    };
    staffData.staff.push(newStaff);
    await fs.writeFile(STAFF_FILE_PATH, JSON.stringify(staffData, null, 2));
    res.json(staffData.staff);
  } catch (error) {
    res.status(500).json({ error: 'Error adding staff member' });
  }
});

// Update staff member
app.put('/api/staff/:id', async (req, res) => {
  try {
    const data = await fs.readFile(STAFF_FILE_PATH, 'utf8');
    const staffData = JSON.parse(data);
    staffData.staff = staffData.staff.map(staff => 
      staff.id === parseInt(req.params.id) ? { ...req.body, id: staff.id } : staff
    );
    await fs.writeFile(STAFF_FILE_PATH, JSON.stringify(staffData, null, 2));
    res.json(staffData.staff);
  } catch (error) {
    res.status(500).json({ error: 'Error updating staff member' });
  }
});

// Delete staff member
app.delete('/api/staff/:id', async (req, res) => {
  try {
    const data = await fs.readFile(STAFF_FILE_PATH, 'utf8');
    const staffData = JSON.parse(data);
    staffData.staff = staffData.staff.filter(staff => staff.id !== parseInt(req.params.id));
    await fs.writeFile(STAFF_FILE_PATH, JSON.stringify(staffData, null, 2));
    res.json(staffData.staff);
  } catch (error) {
    res.status(500).json({ error: 'Error deleting staff member' });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 