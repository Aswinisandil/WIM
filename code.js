var submitBtn = document.getElementById("sub");

submitBtn.value = "Download PDF";



function downloadPdf() {
const pdfUrl = "./Resources/WIM SYLLABUS.pdf";

const link = document.createElement('a');
link.href = pdfUrl;
link.setAttribute('download', 'downloaded-file.pdf'); 
document.body.appendChild(link);

link.click();

document.body.removeChild(link);
}










