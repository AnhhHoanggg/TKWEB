<!DOCTYPE html> 
<html> 
<body> 
  <p id="doanVan">Đây là một đoạn văn.</p> 
  <button onclick="thayDoiMauChu()">Thay đổi màu</button>  
  <script>     
    function thayDoiMauChu() { 
    document.getElementById('doanVan').style.color = "red";
    } 
  </script> 
</body> 
</html>
