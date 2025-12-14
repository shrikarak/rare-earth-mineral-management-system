
INSERT INTO exploration_licenses (applicant_name, license_area, reconnaissance_data, prospecting_data, auction_date, status) VALUES
('Tata Steel', 'Area 1, Jharkhand', 'Recon data for Area 1', 'Prospecting data for Area 1', '2024-01-15', 'Approved'),
('JSW Steel', 'Area 2, Odisha', 'Recon data for Area 2', 'Prospecting data for Area 2', '2024-02-20', 'Pending');

INSERT INTO mining_leases (lease_holder_name, lease_area, grant_date, renewal_date, auction_date, status) VALUES
('Adani Enterprises', 'Area 3, Karnataka', '2023-05-10', '2073-05-09', '2023-04-01', 'Active'),
('Vedanta Limited', 'Area 4, Rajasthan', '2022-11-20', '2072-11-19', '2022-10-15', 'Active');

INSERT INTO compliance_reports (lease_type, lease_id, report_date, production_details, trade_details, utilization_details, submitted_to_ibm, submitted_to_state_gov) VALUES
('Mining Lease', 1, '2024-03-31', 'Production: 1000 tons', 'Trade: 500 tons exported', 'Utilization: 500 tons for domestic use', true, true),
('Exploration Licence', 1, '2024-03-31', 'No production', 'No trade', 'No utilization', true, true);

INSERT INTO atomic_minerals_compliance (lease_type, lease_id, thorium_level, aerb_compliance_docs, dae_compliance_docs, status) VALUES
('Mining Lease', 1, 0.5, 'AERB docs for ML 1', 'DAE docs for ML 1', 'Approved'),
('Mining Lease', 2, 0.2, 'AERB docs for ML 2', 'DAE docs for ML 2', 'Pending');

INSERT INTO financial_contributions (lease_type, lease_id, contribution_date, dmf_contribution, nmet_contribution) VALUES
('Mining Lease', 1, '2024-04-15', 500000, 100000),
('Mining Lease', 2, '2024-04-15', 300000, 60000);

INSERT INTO environmental_clearances (lease_type, lease_id, eia_report, emp_document, ec_status) VALUES
('Mining Lease', 1, 'EIA report for ML 1', 'EMP doc for ML 1', 'Approved'),
('Exploration Licence', 1, 'EIA report for EL 1', 'EMP doc for EL 1', 'Pending');

INSERT INTO safety_incidents (lease_type, lease_id, incident_date, incident_details, corrective_actions) VALUES
('Mining Lease', 1, '2024-02-28', 'Minor injury to a worker.', 'Implemented new safety protocols.');

INSERT INTO waste_management (lease_type, lease_id, waste_type, disposal_method, storage_details, recycling_initiatives) VALUES
('Mining Lease', 1, 'Radioactive tailings', 'Secure landfill', 'Stored in sealed containers', 'Exploring recycling options.');

INSERT INTO users (username, password_hash, role) VALUES
('admin', 'password_hash_admin', 'Government Official'),
('tata_steel', 'password_hash_tata', 'Private Licence Holder'),
('researcher', 'password_hash_researcher', 'Research Body');
