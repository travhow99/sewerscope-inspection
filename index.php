<?php
/* if (false) { (empty($_SERVER['HTTPS']) || $_SERVER['HTTPS'] === "off") {
  $location = 'https://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
  header('HTTP/1.1 301 Moved Permanently');
  header('Location: ' . $location);
  exit;
} */
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <title>Sewer Scope Report</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <link href="https://fonts.googleapis.com/css?family=Cardo" rel="stylesheet">

  <link rel="stylesheet" href="./css/index.css">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8/themes/base/jquery.ui.all.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/timepicker/1.3.5/jquery.timepicker.min.css">
  <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
  <link rel="apple-touch-icon" sizes="180x180" href="./apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="./favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="./favicon-16x16.png">
  <link rel="manifest" href="./site.webmanifest">
  <link rel="mask-icon" href="./safari-pinned-tab.svg" color="#5bbad5">
  <link rel="canonical" href="https://sewerscope-inspection.com/app/">

  <script src="https://code.jquery.com/jquery-1.12.4.js"></script>

  <meta name="msapplication-TileColor" content="#db000d">
  <meta name="theme-color" content="#db000d">

</head>

<body>
  <div class="container form">
    <h1>Sewer Scope Report</h1>
    <form id="mainForm">
      <div class="input">
        <label for="companyName">Title:</label><span class='text-red'>*</span>
        <input required type="text" id="companyName" class="form-control required" placeholder="Your company name" />
      </div>
      <div class="input">
        <label for="address">Property Address:</label><span class='text-red'>*</span>
        <input required type="text" name="address" class="form-control required">
      </div>
      <div class="input">
        <label for="date">Date of Scope:</label><span class='text-red'>*</span>
        <input required type="text" name="date" id="datepicker" class="form-control required">
      </div>
      <div class="input">
        <label for="time">Time of Scope:</label><span class='text-red'>*</span>
        <input required type="text" name="time" class="timepicker form-control required">
      </div>
      <hr />

      <div class="form-group">
        <label for="location">Location of Scope / Access:</label>
        <select class="form-control" id="location">
          <option selected="true" disabled="disabled">Choose an Item</option>
          <option>Mechanical Room Wall Cleanout</option>
          <option>Basement Wall Cleanout</option>
          <option>Basement Mechanical Room Wall Cleanout</option>
          <option>Basement Floor Cleanout</option>
          <option>Crawlspace Cleanout</option>
          <option>Main Level Cleanout</option>
          <option>Roof Vent</option>
          <option>Floor Drain</option>
          <option>Floor Drain Vent</option>
          <option>Kitchen Waste Line</option>
          <option>Laundry Cleanout</option>
          <option>Garage Cleanout</option>
          <option>Basement Laundry Cleanout</option>
          <option>Cleanout located at the exterior of the house.</option>
          <option>Toilet</option>
        </select>
      </div>

      <div class="form-group">
        <label for="condition">Condition of Cleanouts:</label>
        <select class="form-control" id="condition">
          <option selected="true" disabled="disabled">Choose an Item</option>
          <option>Excessive corrosion was found near the main cleanout.</option>
          <option>Serviceable</option>
          <option>The cleanout fittings were not visible / accessible.</option>
          <option>The cleanout cap was leaking.</option>
          <option>The cleanout cap was damaged.</option>
          <option>The cleanout fitting threads were corroded / damaged.</option>
          <option>The exterior cleanouts appeared to be buried / were not accessible for inspection.</option>
          <option>There appeared to be over 100 feet between cleanouts in the lateral / main sewer line.</option>
        </select>
      </div>

      <div class="form-group">
        <label for="underfloor">Underfloor Interior Line/Pipe:</label>
        <select class="form-control" id="underfloor">
          <option selected="true" disabled="disabled">Underfloor Line Material</option>
          <option>Cast Iron</option>
          <option>Cast Iron and PVC</option>
          <option>Cast Iron and ABS</option>
          <option>PVC (Polyvinyl chloride)</option>
          <option>ABS (Acrylonitrile butadiene styrene)</option>
          <option>Plastic</option>
          <option>Galvanized Steel</option>
          <option>ADS (Advanced Drainage System)</option>
        </select>
      </div>

      <div class="form-group">
        <label for="underground">Underground Exterior/Lateral Line/ Pipe:</label>
        <select class="form-control" id="underground">
          <option selected="true" disabled="disabled">Lateral Line Material</option>
          <option>PVC (Polyvinyl chloride)</option>
          <option>SDR 35 (Standard Dimensional Ratio PVC)</option>
          <option>PVC (Polyvinyl chloride) and SDR 35 (Standard Dimensional Ratio PVC)</option>
          <option>ABS (Acrylonitrile butadiene styrene)</option>
          <option>Clay</option>
          <option>Clay and SDR 35 (Standard Dimensional Ratio PVC)</option>
          <option>Concrete</option>
          <option>Appeared to be Transite / Asbestos Cement</option>
          <option>Concrete and Transite / Asbestos Cement</option>
          <option>Plastic / High density polyethylene (HDPE)</option>
          <option>Appeared to be Orangeburg / Bermico (Bituminous fiber pipe)</option>
          <option>Cured in place pipe / Epoxy fiberglass</option>
          <option>SDR 35 (Standard Dimensional Ratio PVC) and Plastic / High density polyethylene (HDPE)</option>
          <option>PVC (Polyvinyl chloride) and Clay</option>
          <option>Clay and Concrete</option>
        </select>
      </div>

      <!-- Needs editable input !-->
      <div class="form-group">
        <label for="mainLine">Length of Main Line/Pipe:</label>
        <select class="form-control" id="mainLine">
          <option selected="true" disabled="disabled">Length of Line</option>
          <option class="number">The main sewer line/pipe was approximately {num} feet from the access point to the city tap.</option>
          <option class="number">The main sewer line/pipe was approximately {num} feet from the access point to the HOA tap.</option>
          <option class="number">The main sewer line/pipe was approximately {num} feet from the access point to the city tap.</option>
          <option class="number">The main sewer line/pipe was approximately {num} feet from the access point to the septic tap.</option>
          <option>Unknown, unable to reach city tap.</option>
        </select>
      </div>

      <!-- Needs editable input !-->
      <div class="form-group">
        <label for="lineCondition1">Main Sewer Line/Pipe Condition:</label>
        <select class="form-control" id="lineCondition1">
        </select>
      </div>

      <!-- Needs editable input !-->
      <div class="form-group">
        <label for="lineCondition2">Main Sewer Line/Pipe Condition:</label>
        <select class="form-control" id="lineCondition2">
        </select>
      </div>

      <!-- Needs editable input !-->
      <div class="form-group">
        <label for="lineCondition3">Main Sewer Line/Pipe Condition:</label>
        <select class="form-control" id="lineCondition3">
        </select>
      </div>

      <div class="" style="text-align:right">
        <a class="btn btn-primary add-condition">Additional Condition</a>
      </div>

      <div class="form-group" id="condition4">
        <label for="lineCondition4">Main Sewer Line/Pipe Condition:</label>
        <select class="form-control" id="lineCondition4">
        </select>
      </div>

      <div class="form-group">
        <label for="defects">Located Defects:</label>
        <select class="form-control" id="defects">
          <option selected="true" disabled="disabled">Located Defects</option>
          <option>None</option>
          <option class="location">Heavy root growth/accumulation was located and marked in the {location}.</option>
          <option class="location">An offset was located and marked in the {location}.</option>
          <option class="location">A crack in the main sewer line/pipe was located and marked in the {location}.</option>
          <option class="location">The belly/area that was holding water and debris in the main sewer line/pipe was located and marked in the {location}.</option>
          <option class="location">A break in the main sewer line/pipe was located and marked in the {location}.</option>
          <option class="location">The damaged tap was located and marked in the {location}.</option>
          <option>The lateral sewer line was located and marked from the house to the city tap.</option>
        </select>
      </div>

      <div class="form-group" id="video">
        <label>Video URL:</label>
        <div class="input-group">
          <span class="input-group-addon">https://</span>
          <input type="website" id="videoUrl" class="form-control">
        </div>
      </div>

      <!-- TODO: Turn into dropdown (w/ dyhnamic option to add more?) -->
      <div class="form-group">
        <label for="recommendations">Inspector Recommendations:</label>
        
        <ul id="recommendationList"></ul>

        <select class="form-control" id="recommendations">
        </select>
      </div>

      <div class="form-group">
        <label for="repairPrice">Price of Repairs:</label>
        <select class="form-control" id="repairPrice">
          <option selected disabled>Price</option>
          <?php
          for ($x = 500; $x <= 14500; $x += 500) {
            $max = number_format($x + 500);
            $min = number_format($x);

            $value = "$$min - $$max";
          ?>
            <option value="<?php echo $value; ?>"><?php echo $value; ?></option>
          <?php } ?>
          <option value="Over $15,000">Over $15,000</option>
        </select>
      </div>


      <div class="form-group">
        <label for="">Upload Images:</label>
        <input id="browse" name="files[]" type="file" onchange="previewFiles()" accept="image/*" multiple>
        <div id="preview"></div>
      </div>

      <input type="submit" value="Save" class="btn btn-default" id="submit">
    </form>
  </div>

  <div id="print" media="print"></div>
  
  <div class="loader-container">
    <p class="lead">Please wait while your PDF is generated!</p>
    <div class="loader"></div>
  </div>
  <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
  <script src="js/resources.js"></script>
  <script src="js/app.js"></script>
  <script>
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('./sw.js').then(function(registration) {
        // Registration was successful
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }, function(err) {
        // registration failed :(
        console.log('ServiceWorker registration failed: ', err);
      });
    });
  }
  </script>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/timepicker/1.3.5/jquery.timepicker.min.js"></script>
</body>

</html>