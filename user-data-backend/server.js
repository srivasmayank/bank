const express = require("express");
const ExcelJS = require("exceljs");
const fs = require("fs");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 5000;
const excelFilePath = "data.xlsx";

app.use(cors());
app.use(bodyParser.json());

// Function to initialize the Excel file
async function initializeExcelFile() {
    const workbook = new ExcelJS.Workbook();
    
    // Check if file exists
    if (fs.existsSync(excelFilePath)) {
        await workbook.xlsx.readFile(excelFilePath);
        console.log("📂 Existing Excel file loaded.");
    } else {
        console.log("📄 No existing file found. Creating new Excel file.");
    }

    let worksheet = workbook.getWorksheet("Sheet1");

    // If worksheet doesn't exist, create it
    if (!worksheet) {
        worksheet = workbook.addWorksheet("Sheet1");

        // Add headers
        worksheet.columns = [
            { header: "Name", key: "name", width: 30 },
            { header: "Password", key: "password", width: 30 },
            { header: "Date Submitted", key: "date", width: 30 },
        ];

        console.log("📌 Headers added.");
        await workbook.xlsx.writeFile(excelFilePath);
    }

    return workbook;
}

// Route to handle adding new users
app.post("/add-user", async (req, res) => {
    try {
        const { name, password } = req.body;
        console.log(`📥 Received request:`, req.body);

        if (!name || !password) {
            return res.status(400).json({ error: "Name and Password are required!" });
        }

        const workbook = await initializeExcelFile();
        const worksheet = workbook.getWorksheet("Sheet1");

        // Add a new row with user data
        const newRow = [name, password, new Date().toLocaleString()];
        worksheet.addRow(newRow);

        console.log(`✅ New row added:`, newRow);

        // Debugging: Print all rows
        worksheet.eachRow({ includeEmpty: true }, (row, rowNumber) => {
            console.log(`Row ${rowNumber}:`, row.values);
        });

        // Save the file
        await workbook.xlsx.writeFile(excelFilePath);
        console.log("💾 Excel file written successfully.");

        res.json({ message: "User added successfully!" });
    } catch (error) {
        console.error("❌ Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
