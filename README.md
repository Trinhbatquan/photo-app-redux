## PHOTO-REACT-REDUX
##Options
-CRA: Create React App-npm
-UI lib: Reactstrap
-React-Router
-SCSS
-JSconfig URl : jsconfig.js
-Tạo custom field, xử lý update form, submit form bằng Formik: 
    https://formik.org/
-Xử lý validation form bằng Yup: 
    https://github.com/jquense/yup
-Random Photo bằng: 
    https://picsum.photos
-Quản lý global state bằng redux (redux toolkit):
    https://redux-toolkit.js.org/
    Lợi ích : Slide = Reducer + Action, store dùng configStore
    =====> clear 
-Add, edit, remove photo
-Tìm hiểu về axios api-custom httpClient để lấy data bằng axios
   +Thiết lập một httpClient để đảm bảo các http requests và response đều đi qua nó và xử lý gộp nhiều tác vụ: gắn baseURl, thêm common header, xử lý về token, đánh chặn hai đầu, xử lý lỗi,...
   +Trong reactJS, webApp liên kết với server qua API module. API module bao gồm các api files và 1 http client.
-Phân biệt Authentication và authorization
-Phân biệt JWT (Json Web Token) và Cookie trong Authentication
-Tạo chức năng đăng nhập bằng firebase và gắn token firebase vào httpClient API Axios:
    https://github.com/firebase/firebaseui-web-react
    https://www.youtube.com/watch?v=cZAnibwI9u8
Cơ chế: Khi người dùng chưa logout thì localStorage vẫn lưu thông tin người dùng trước đó + cơ chế refesh token sau một thời gian của firebase và hàm getIdToken luôn lấy token mới nhất
====> Xử lý đợi hàm onAuthStateChanged trigger xong mới cho phép gửi request lấy API.
-Xử lý reload bằng localStorage
