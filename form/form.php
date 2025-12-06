<?php
$conn = mysqli_connect("localhost","root","","clarityclassroom")

$query = """
insert into student set name = 'Ahmad' where rollno = 11; 
""";
?>