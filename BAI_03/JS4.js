<!DOCTYPE html> 
<html> 
<body> 
  <p id="doanVan">Đây là một đoạn văn.</p> 
  <button onclick="chuyenDoiHienThi()">Chuyển đổi hiển thị</button> 
 
  <script>     
    function chuyenDoiHienThi() {       
        var doanVan = document.getElementById("doanVan"); 
        if (doanVan.style.display === "none") {
            doanVan.style.display = "block";
        } else {
            doanVan.style.display = "none";
        }

    } 
  </script> 
</body> 
</html>
