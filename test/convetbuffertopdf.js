import { jsPDF } from 'jspdf';

function bufferToPDF(buffer) {
  // Create a new jsPDF instance
  const pdf = new jsPDF();

  // Load the buffer (assuming it's a PDF buffer)
  pdf.loadFile(buffer);

  // Optional: Modify the document

  // Save the PDF to a file
  pdf.save('output.pdf');
}

// Example usage
const buffer = ...; // your buffer data
bufferToPDF(buffer);
