

<?php
// Including database connections
$con = new mysqli('localhost','root','','brca');
// mysqli query to fetch all data from database
$query = "SELECT * from tbl_blog ";
$result = mysqli_query($con, $query);
$arr = array();
if(mysqli_num_rows($result) != 0) {
while($row = mysqli_fetch_assoc($result)) {
$arr[] = $row;
}
}
echo $json_info = json_encode($arr);
?>

