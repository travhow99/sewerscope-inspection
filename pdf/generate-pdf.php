<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);


// echo __DIR__."/../";
// die();

// Create file if !exists
// Open file
// Write HTML to file
// Reload page?
// If file exists on page load
// Convert file to PDF 
// Download file
// Delete file
$file = fopen('report.html', 'w') or die("Unable to open file!");

$html = '<h3>Hello World</h3>';

// echo $_POST['source'];
// var_dump($_FILES['images']);
/* foreach ($_FILES['images']['tmp_name'] as $file) {
    var_dump($file);
    $html .= "<img src='".$file['tmp_name']."'>";
} */

 // Count total files
 $countfiles = count($_FILES['images']['name']);
 
 // Looping all files
 for($i=0;$i<$countfiles;$i++){
   $filename = $_FILES['images']['name'][$i];
   
   // Upload file
//    move_uploaded_file($_FILES['file']['tmp_name'][$i],'upload/'.$filename);
    $html .= "<img src='".$_FILES['images']['tmp_name'][$i]."' />";
 }

 fwrite($file, $html);
 fclose($file);

//  Save file
file_put_contents('report.html', $file);

/* 

$dompdf->loadHtml($html);

// (Optional) Setup the paper size and orientation
$dompdf->setPaper('A4');

// Render the HTML as PDF
$dompdf->render();

// Output the generated PDF to Browser
$dompdf->stream();
 */
?>

