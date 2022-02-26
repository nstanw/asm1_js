/**
 * @description push noitice to browse when guest onclick, reuse function
 * @returns push prompt, alert and change style div
 */
function noiti(){
    promptToScreen();
    tinhTuoi();
    document.getElementById("next").style.display = "block";
}
/**
 * @description prompt and change content element
 * @param {string} id - id element
 * @param {string} promContnet - The text to display in the dialog box.
 * @param {string} inner - The text of elementID
 * @returns prompt to browse and change content element. 
If you don't want to change the element's content, don't use param
"inner"
 */
function prom(id,promContnet,inner = null){
    let data = prompt(promContnet);
    if(data != null && inner != null) {
        document.getElementById(id).innerHTML =inner + data;
    }
}
/**
 * lấy ra năm hiện tại sau đó so sánh với với năm sinh được nhập từ prompt
 * nếu năm nhập vào lớn hơn năm hiện tại thì yêu cầu nhập lại
 * hiển thị ra màn hình số tuổi
 * tuổi = năm hiện tại - năm sinh
 */
function tinhTuoi(){
    let yearCurrent = new Date().getFullYear();
    let yearData = prompt("Hãy nhập năm sinh của bạn");
    while(yearData>yearCurrent)
    {
       yearData = prompt("Hãy nhập lại năm sinh của bạn");
    }
    document.getElementById("age").innerHTML ="Tuổi của bạn là: " + (yearCurrent -  yearData);
}
/**
 * thông báo trên trình duyệt (hàm alert với nội dung lưu trong biến alertContent)
 * prompt lên trình duyệt để lấy data từ khách hàng
 * thay đổi nội dung element theo id khai báo từ hàm prom (line:19)
 */
function promptToScreen(){
    let alertContent = "Chào mừng bạn đến với ứng dụng Javascript đầu tiên."
    alert(alertContent);
    prom("name","Hãy nhập tên của bạn", "Tên của bạn là: ");
    prom("city","Hãy nhập thành phố bạn đang sống", "Thành phố bạn đang sống là:");
    prom("phone", "Hãy nhập số điện thoại của bạn", "Số điện thoại của bạn là: ");
    prom("email","Hãy nhập địa chỉ email của bạn","Địa chỉ email của bạn là: ");
    prom("job","Hãy nhập công việc hiện tại của bạn","Công việc hiện tại của bạn là: ");
    prom("interest","Hãy nhập sở thích của bạn","Sở thích của bạn là: ");
}
