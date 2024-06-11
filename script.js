async function downloadPDF() {
  const content = document.getElementById('content').innerText;

  // Create a new pdfmake document
  const docDefinition = {
    content: [
      {
        text: content,
        fontSize: 14,
      },
    ],
  };

  // Create a new pdfmake instance
  const pdfDoc = pdfMake.createPdf(docDefinition);

  try {
    // Hide the button during capture
    const button = document.querySelector('button');
    button.style.display = 'none';

    // Download the PDF
    pdfDoc.download('output.pdf');

    // Show the button after capture
    button.style.display = 'block';
  } catch (err) {
    console.error(err);
  }
}


