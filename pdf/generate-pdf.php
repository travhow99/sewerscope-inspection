<?php
require_once 'dompdf/autoload.inc.php';
use Dompdf\Dompdf;


// $dir = __DIR__."/../";
// die();

// Create file if !exists
// Open file
// Write HTML to file
// Reload page?
// If file exists on page load
// Convert file to PDF 
// Download file
// Delete file
if (file_exists('report.html')) {
    chmod('report.html', 0755);
}

if (file_exists('report.pdf')) {
    chmod('report.pdf', 0755);
}

$file = fopen('report.html', 'w') or die("Unable to open file!");

$html = $_POST['text'];

// echo $_POST['source'];
// var_dump($_FILES['images']);
/* foreach ($_FILES['images']['tmp_name'] as $file) {
    var_dump($file);
    $html .= "<img src='".$file['tmp_name']."'>";
} */

$html .= '<br><br>';
 // Count total files
 if (isset($_FILES['images'])) {
    $countfiles = count($_FILES['images']['name']);
    
    // Looping all files
    for($i=0;$i<$countfiles;$i++){
    $filename = $_FILES['images']['name'][$i];
    
    // Upload file
    //    move_uploaded_file($_FILES['file']['tmp_name'][$i],'upload/'.$filename);
        $html .= "<img style='margin-left: 10px;' height='150' width='auto' src='".$_FILES['images']['tmp_name'][$i]."' />";
    }
}

//  fwrite($file, $html);
//  fclose($file);

//  Save file
// file_put_contents($dir.'report.html', $file);

$dompdf = new Dompdf();

$dompdf->loadHtml($html);

// (Optional) Setup the paper size and orientation
$dompdf->setPaper('A4');

// Render the HTML as PDF
$dompdf->render();

// Output the generated PDF to Browser
// $dompdf->stream("sample.pdf");

file_put_contents('report.pdf', $dompdf->output());

echo 'success';

