import React from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";

// Data table example (can be passed as props or hardcoded)
const dataTable = [
    { id: 1, name: "John Doe", email: "john.doe@example.com" },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com" },
    { id: 3, name: "Michael Johnson", email: "michael.johnson@example.com" },
];

const ExportPDFButton = () => {
    const handleExportPDF = () => {
        // Create new jspdf instance
        const doc = new jsPDF();

        // Define columns and rows
        const columns = ["ID", "Name", "Email"];
        const rows = dataTable.map(({ id, name, email }) => [id, name, email]);

        // Add a title to the PDF
        doc.text("User Data Table", 10, 10);

        // AutoTable plugin to generate the table
        doc.autoTable({
            head: [columns],
            body: rows,
        });

        // Save the PDF
        doc.save("userdata.pdf");
    };

    return (
        <div>
            <button onClick={handleExportPDF}>Export to PDF</button>
        </div>
    );
};

export default ExportPDFButton;
