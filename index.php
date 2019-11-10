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
  <script src="https://code.jquery.com/jquery-1.12.4.js"></script>

  <meta name="msapplication-TileColor" content="#db000d">
  <meta name="theme-color" content="#db000d">
  <!-- <meta http-equiv=”Refresh” content=”0;URL=https://www.yourdomainname.com”> -->

</head>
<body>
  <div class="container form">
    <form id="mainForm">
      <div class="input">
          <label for="companyName">Title:</label>
          <input type="text" id="companyName" class="form-control" placeholder="Your company name" />
      </div>
      <div class="input">
        <label for="address">Property Address:</label>
        <input type="text" name="address" class="form-control">
      </div>
      <div class="input">
        <label for="date">Date of Scope:</label>
        <input type="text" name="date" id="datepicker" class="form-control">
      </div>
      <div class="input">
        <label for="time">Time of Scope:</label>
        <input type="text" name="time" class="timepicker form-control">
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
          <select class="form-control" id="underfloor">
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

        <div class="form-group" id="recommendations">
          <label for="recommendations">Inspector Recommendations:</label>
          <div class="checkbox">
            <label><input type="checkbox" value="The main sewer line/pipe should be cleaned for roots and re-inspected with a camera before the inspection objection deadline, Real Estate contract deadline date; please consult with your Real Estate Professional / Realtor." />The main sewer line/pipe should be cleaned for roots and re-inspected with a camera before the inspection objection deadline, Real Estate contract deadline date; please consult with your Real Estate Professional / Realtor.</label>
          </div>

          <div class="checkbox">
            <label><input type="checkbox" value="The main sewer line/pipe should be cleaned for roots annually to minimize the potential for blockage." />The main sewer line/pipe should be cleaned for roots annually to minimize the potential for blockage.</label>
          </div>

          <div class="checkbox">
            <label><input type="checkbox" value="The main sewer line/pipe should be cleaned of scale / hydro-jetted and re-inspected with a camera before the inspection objection deadline, Real Estate contract deadline date; please consult with your Real Estate Professional / Realtor." />The main sewer line/pipe should be cleaned of scale / hydro-jetted and re-inspected with a camera before the inspection objection deadline, Real Estate contract deadline date; please consult with your Real Estate Professional / Realtor.</label>
          </div>

          <div class="checkbox">
            <label><input type="checkbox" value="The main sewer line/pipe should be repaired or replaced as needed and re-inspected with a camera before the inspection objection deadline, Real Estate contract deadline date; please consult with your Real Estate Professional / Realtor." />The main sewer line/pipe should be repaired or replaced as needed and re-inspected with a camera before the inspection objection deadline, Real Estate contract deadline date; please consult with your Real Estate Professional / Realtor.</label>
          </div>

          <div class="checkbox">
            <label><input type="checkbox" value="The main sewer line/pipe should be hydro-jetted and repaired as needed and re-inspected with a camera before the inspection objection deadline, Real Estate contract deadline date; please consult with your Real Estate Professional / Realtor." />The main sewer line/pipe should be hydro-jetted and repaired as needed and re-inspected with a camera before the inspection objection deadline, Real Estate contract deadline date; please consult with your Real Estate Professional / Realtor.</label>
          </div>

          <div class="checkbox">
            <label><input type="checkbox" value="The main sewer line/pipe appeared to be Orangeburg / Bermico (Bituminous fiber pipe); the main sewer line should be replaced before the inspection objection deadline, Real Estate contract deadline date; please consult with your Real Estate Professional / Realtor." />The main sewer line/pipe appeared to be Orangeburg / Bermico (Bituminous fiber pipe); the main sewer line should be replaced before the inspection objection deadline, Real Estate contract deadline date; please consult with your Real Estate Professional / Realtor.</label>
          </div>

          <div class="checkbox">
            <label><input type="checkbox" value="The exterior main sewer line/pipe showed evidence of past cleanings; consult with the Real Estate Professional / Seller as to the frequency of maintenance performed to estimate costs / expenses related to continued maintenance.">The exterior main sewer line/pipe showed evidence of past cleanings; consult with the Real Estate Professional / Seller as to the frequency of maintenance performed to estimate costs / expenses related to continued maintenance.</label>
          </div>

          <div class="checkbox">
            <label><input type="checkbox" value="The city tap should be evaluated by the local water district and repaired as needed before the inspection objection deadline, Real Estate contract deadline date; please consult with your Real Estate Professional / Realtor." />The city tap should be evaluated by the local water district and repaired as needed before the inspection objection deadline, Real Estate contract deadline date; please consult with your Real Estate Professional / Realtor.</label>
          </div>

          <div class="checkbox">
            <label><input type="checkbox" value="The main sewer line/pipe should be cleaned of scale / hydro-jetted and re-inspected with a camera for damage and repaired or replaced as needed before the inspection objection deadline, Real Estate contract deadline date; please consult with your Real Estate Professional / Realtor." />The main sewer line/pipe should be cleaned of scale / hydro-jetted and re-inspected with a camera for damage and repaired or replaced as needed before the inspection objection deadline, Real Estate contract deadline date; please consult with your Real Estate Professional / Realtor.</label>
          </div>

          <div class="checkbox">
            <label><input type="checkbox" value="Proper clean-outs should be provided / added." />Proper clean-outs should be provided / added.</label>
          </div>


        </div>

        <div class="form-group">
          <label for="">Upload Images:</label>
          <input id="browse" name="files[]" type="file" onchange="previewFiles()" accept="image/*" multiple>
          <div id="preview"></div>          
        </div>

        <input type="submit" value="Save" class="btn btn-default" id="submit">
    </form>
  </div>



<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
<script src="app.js"></script>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/timepicker/1.3.5/jquery.timepicker.min.js"></script>
</body>
</html>