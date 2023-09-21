import html2canvas from 'html2canvas';
import jspdf from 'jspdf';

async function downloadpdf() {

  var doc = new jspdf()
  document.getElementById('downloadpdf').innerHTML= "Downloading PDF ..."

    await html2canvas(document.getElementById('text'),{
      useCORS:true,
      allowTaint:true,
      
    }).then((canvas) =>{
      doc.addImage(canvas.toDataURL('image/png'),'PNG',5,5)
    })

    doc.save("resume.pdf")
  document.getElementById('downloadpdf').innerHTML= "Download PDF"
}
