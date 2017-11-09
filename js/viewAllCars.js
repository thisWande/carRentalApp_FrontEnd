$(document).ready(function() {
    $.getJSON('http://localhost:8080/car/readAllCars', function (data) {
        $.each(data, function (index) {
            //alert(data[index].id);
            $("<tr> <td>"+data[index].id+" </td> " +
                "<td>" + data[index].name
                +" </td>  " +
                "<td>"+  data[index].surname +" </td> " +
                "<td>"+  data[index].email +" </td> " +
				"<td> <a href='updateCustomer.php?customerID="+data[index].id+"' > Update Customer </a> </td> " +
				"<td  id='deleteCustomer'> " +
				"<input class=\"btn btn-outline-success\" type='button' value='Delete Customer' onclick='deleteCustomer("+data[index].id+"); return false;'></input> </td> " +
                "</tr>")
                .prependTo(".customersTable")
        });
    });
});