
# Rare Earth Mineral Management System

This web application is designed to manage the research and extraction of rare earth minerals in India, keeping in mind the regulatory and legal requirements.

## Functionalities

### Regulatory and Legal Requirements
- **Mineral Concessions:** Manage the lifecycle of different licenses like Exploration Licence (EL) and Mining Lease (ML).
- **Compliance & Reporting:** Facilitate mandatory online reporting of production, trade, and utilization of minerals to the Indian Bureau of Mines (IBM) and respective State Governments.
- **Atomic Minerals:** Integrate with the Atomic Energy Regulatory Board (AERB) and Department of Atomic Energy (DAE) compliance protocols.
- **Financial Contributions:** Automatically calculate and track contributions to the District Mineral Foundations (DMFs) and the National Mineral Exploration Trust (NMET).
- **Auctions:** Interface with e-auction platforms for managing mineral block auctions.

### Environmental and Safety Requirements
- **Environmental Clearances (EC):** Manage documentation and track the status of mandatory Environmental Impact Assessments (EIA) and Environmental Management Plans (EMP).
- **Safety Regulations:** Incorporate modules related to the Mines Act, 1952, and Mines Rules, 1955.
- **Waste Management:** Manage data on safe disposal, storage, and potential recycling initiatives.

### Technical Features
- **Centralized Database:** A secure, centralized system for all geological, exploration, production, and compliance data.
- **Data Security:** High-level cybersecurity measures to protect sensitive data.
- **Data Interoperability:** Ability to exchange data with other government systems.
- **Spatial Data Integration:** Integration with GIS to manage maps and track exploration areas.
- **Workflow Automation:** Automated workflows for license applications, approvals, and reporting.
- **Reporting and Analytics:** Tools for generating detailed reports for various government bodies.
- **User Access:** Role-based access control for different stakeholders.

## Deployment Guide

### Prerequisites
- Node.js
- Angular CLI
- PostgreSQL

### Backend Setup
1. Navigate to the `backend` directory.
2. Install dependencies: `npm install`
3. Create a `.env` file with the following content:
   ```
   PORT=3000
   DB_USER=your_db_user
   DB_HOST=your_db_host
   DB_DATABASE=your_db_name
   DB_PASSWORD=your_db_password
   DB_PORT=your_db_port
   ```
4. Start the server: `node index.js`

### Frontend Setup
1. Navigate to the `frontend` directory.
2. Install dependencies: `npm install`
3. Start the application: `ng serve`

### Database Setup
1. Create a PostgreSQL database.
2. Run the `database/schema.sql` script to create the tables.
3. Run the `database/data.sql` script to pre-fill the database with sample data.

## Copyright
Copyright 2025 Shrikara Kaudambady
