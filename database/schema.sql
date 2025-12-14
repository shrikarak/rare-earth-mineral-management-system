
CREATE TABLE exploration_licenses (
    id SERIAL PRIMARY KEY,
    applicant_name VARCHAR(255) NOT NULL,
    license_area TEXT NOT NULL,
    reconnaissance_data TEXT,
    prospecting_data TEXT,
    auction_date DATE,
    status VARCHAR(50) DEFAULT 'Pending'
);

CREATE TABLE mining_leases (
    id SERIAL PRIMARY KEY,
    lease_holder_name VARCHAR(255) NOT NULL,
    lease_area TEXT NOT NULL,
    grant_date DATE,
    renewal_date DATE,
    auction_date DATE,
    status VARCHAR(50) DEFAULT 'Active'
);

CREATE TABLE compliance_reports (
    id SERIAL PRIMARY KEY,
    lease_type VARCHAR(50) NOT NULL,
    lease_id INTEGER NOT NULL,
    report_date DATE NOT NULL,
    production_details TEXT,
    trade_details TEXT,
    utilization_details TEXT,
    submitted_to_ibm BOOLEAN DEFAULT false,
    submitted_to_state_gov BOOLEAN DEFAULT false
);

CREATE TABLE atomic_minerals_compliance (
    id SERIAL PRIMARY KEY,
    lease_type VARCHAR(50) NOT NULL,
    lease_id INTEGER NOT NULL,
    thorium_level DECIMAL,
    aerb_compliance_docs TEXT,
    dae_compliance_docs TEXT,
    status VARCHAR(50) DEFAULT 'Pending'
);

CREATE TABLE financial_contributions (
    id SERIAL PRIMARY KEY,
    lease_type VARCHAR(50) NOT NULL,
    lease_id INTEGER NOT NULL,
    contribution_date DATE NOT NULL,
    dmf_contribution DECIMAL,
    nmet_contribution DECIMAL
);

CREATE TABLE environmental_clearances (
    id SERIAL PRIMARY KEY,
    lease_type VARCHAR(50) NOT NULL,
    lease_id INTEGER NOT NULL,
    eia_report TEXT,
    emp_document TEXT,
    ec_status VARCHAR(50) DEFAULT 'Pending'
);

CREATE TABLE safety_incidents (
    id SERIAL PRIMARY KEY,
    lease_type VARCHAR(50) NOT NULL,
    lease_id INTEGER NOT NULL,
    incident_date DATE NOT NULL,
    incident_details TEXT,
    corrective_actions TEXT
);

CREATE TABLE waste_management (
    id SERIAL PRIMARY KEY,
    lease_type VARCHAR(50) NOT NULL,
    lease_id INTEGER NOT NULL,
    waste_type VARCHAR(100),
    disposal_method TEXT,
    storage_details TEXT,
    recycling_initiatives TEXT
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(50) NOT NULL
);
