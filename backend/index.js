
const express = require('express');
const dotenv = require('dotenv');
const db = require('./db');
const bodyParser = require('body-parser');
const cors = require('cors');

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Rare Earth Mineral Management System Backend');
});

// Exploration Licenses
app.get('/api/exploration-licenses', async (req, res) => {
  try {
    const { rows } = await db.query('SELECT * FROM exploration_licenses');
    res.json(rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

app.post('/api/exploration-licenses', async (req, res) => {
    const { applicant_name, license_area, reconnaissance_data, prospecting_data, auction_date } = req.body;
    try {
        const { rows } = await db.query(
            'INSERT INTO exploration_licenses (applicant_name, license_area, reconnaissance_data, prospecting_data, auction_date) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [applicant_name, license_area, reconnaissance_data, prospecting_data, auction_date]
        );
        res.status(201).json(rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Mining Leases
app.get('/api/mining-leases', async (req, res) => {
    try {
        const { rows } = await db.query('SELECT * FROM mining_leases');
        res.json(rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

app.post('/api/mining-leases', async (req, res) => {
    const { lease_holder_name, lease_area, grant_date, renewal_date, auction_date } = req.body;
    try {
        const { rows } = await db.query(
            'INSERT INTO mining_leases (lease_holder_name, lease_area, grant_date, renewal_date, auction_date) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [lease_holder_name, lease_area, grant_date, renewal_date, auction_date]
        );
        res.status(201).json(rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Compliance Reports
app.get('/api/compliance-reports', async (req, res) => {
    try {
        const { rows } = await db.query('SELECT * FROM compliance_reports');
        res.json(rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

app.post('/api/compliance-reports', async (req, res) => {
    const { lease_type, lease_id, report_date, production_details, trade_details, utilization_details } = req.body;
    try {
        const { rows } = await db.query(
            'INSERT INTO compliance_reports (lease_type, lease_id, report_date, production_details, trade_details, utilization_details) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
            [lease_type, lease_id, report_date, production_details, trade_details, utilization_details]
        );
        res.status(201).json(rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Atomic Minerals Compliance
app.get('/api/atomic-minerals-compliance', async (req, res) => {
    try {
        const { rows } = await db.query('SELECT * FROM atomic_minerals_compliance');
        res.json(rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

app.post('/api/atomic-minerals-compliance', async (req, res) => {
    const { lease_type, lease_id, thorium_level, aerb_compliance_docs, dae_compliance_docs } = req.body;
    try {
        const { rows } = await db.query(
            'INSERT INTO atomic_minerals_compliance (lease_type, lease_id, thorium_level, aerb_compliance_docs, dae_compliance_docs) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [lease_type, lease_id, thorium_level, aerb_compliance_docs, dae_compliance_docs]
        );
        res.status(201).json(rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Financial Contributions
app.get('/api/financial-contributions', async (req, res) => {
    try {
        const { rows } = await db.query('SELECT * FROM financial_contributions');
        res.json(rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

app.post('/api/financial-contributions', async (req, res) => {
    const { lease_type, lease_id, contribution_date, dmf_contribution, nmet_contribution } = req.body;
    try {
        const { rows } = await db.query(
            'INSERT INTO financial_contributions (lease_type, lease_id, contribution_date, dmf_contribution, nmet_contribution) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [lease_type, lease_id, contribution_date, dmf_contribution, nmet_contribution]
        );
        res.status(201).json(rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Environmental Clearances
app.get('/api/environmental-clearances', async (req, res) => {
    try {
        const { rows } = await db.query('SELECT * FROM environmental_clearances');
        res.json(rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

app.post('/api/environmental-clearances', async (req, res) => {
    const { lease_type, lease_id, eia_report, emp_document } = req.body;
    try {
        const { rows } = await db.query(
            'INSERT INTO environmental_clearances (lease_type, lease_id, eia_report, emp_document) VALUES ($1, $2, $3, $4) RETURNING *',
            [lease_type, lease_id, eia_report, emp_document]
        );
        res.status(201).json(rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Safety Incidents
app.get('/api/safety-incidents', async (req, res) => {
    try {
        const { rows } = await db.query('SELECT * FROM safety_incidents');
        res.json(rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

app.post('/api/safety-incidents', async (req, res) => {
    const { lease_type, lease_id, incident_date, incident_details, corrective_actions } = req.body;
    try {
        const { rows } = await db.query(
            'INSERT INTO safety_incidents (lease_type, lease_id, incident_date, incident_details, corrective_actions) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [lease_type, lease_id, incident_date, incident_details, corrective_actions]
        );
        res.status(201).json(rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Waste Management
app.get('/api/waste-management', async (req, res) => {
    try {
        const { rows } = await db.query('SELECT * FROM waste_management');
        res.json(rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

app.post('/api/waste-management', async (req, res) => {
    const { lease_type, lease_id, waste_type, disposal_method, storage_details, recycling_initiatives } = req.body;
    try {
        const { rows } = await db.query(
            'INSERT INTO waste_management (lease_type, lease_id, waste_type, disposal_method, storage_details, recycling_initiatives) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
            [lease_type, lease_id, waste_type, disposal_method, storage_details, recycling_initiatives]
        );
        res.status(201).json(rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Users
app.get('/api/users', async (req, res) => {
    try {
        const { rows } = await db.query('SELECT * FROM users');
        res.json(rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

app.post('/api/users', async (req, res) => {
    const { username, password, role } = req.body;
    // In a real application, you should hash the password before storing it.
    const password_hash = password;
    try {
        const { rows } = await db.query(
            'INSERT INTO users (username, password_hash, role) VALUES ($1, $2, $3) RETURNING *',
            [username, password_hash, role]
        );
        res.status(201).json(rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
