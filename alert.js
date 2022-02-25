

function noiti(){
    let alertContent = "Chào mừng bạn đến với ứng dụng Javascript đầu tiên."
    alert(alertContent);
    prom("name","Hãy nhập tên của bạn", "Tên của bạn là: ");
    prom("city","Hãy nhập thành phố bạn đang sống", "Thành phố bạn đang sống là:");
    prom("phone", "Hãy nhập số điện thoại của bạn", "Số điện thoại của bạn là: ");
    prom("email","Hãy nhập địa chỉ email của bạn","Địa chỉ email của bạn là: ");
    prom("job","Hãy nhập công việc hiện tại của bạn","Công việc hiện tại của bạn là: ");
    prom("interest","Hãy nhập sở thích của bạn","Sở thích của bạn là: ");
    tinhTuoi();
    document.getElementById("btn").style.display = "block";

}

function prom(id,promContnet,inner = null){
    let data = prompt(promContnet);
    if(data != null && inner != null) {
        document.getElementById(id).innerHTML =inner + data;
    }
    return 
}
function tinhTuoi(){
    let yearCurrent = new Date().getFullYear();
    let yearData = prompt("Hãy nhập năm sinh của bạn");
    while(yearData>yearCurrent)
    {
       yearData = prompt("Hãy nhập lại năm sinh của bạn");
    }
    document.getElementById("age").innerHTML ="Tuổi của bạn là: " + (yearCurrent -  yearData);
}




