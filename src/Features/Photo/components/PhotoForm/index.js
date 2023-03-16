import React from "react";
import { FastField, Form, Formik } from "formik";
import { Button, ButtonDropdown, FormGroup, Spinner } from "reactstrap";
import * as yup from "yup";
import { NavLink } from "react-router-dom";

import InputField from "custom-fields/InputField";
import { PHOTO_CATEGORY_OPTIONS } from "GlobalContants/global";
import SelectField from "custom-fields/SelectField";
import PhotoRandomField from "custom-fields/PhotoRandomField";
import "./PhotoForm.scss";

function PhotoForm(props) {
  // npm i --save react-select

  //khởi tạo mặc định name các fastFiled của formik

  const validateForm = yup.object().shape({
    title: yup.string().required("This field is required"),
    categoryId: yup
      .number()
      .typeError("This field is required")
      .required("This field is required"),
    //hỗ trợ cả null và number
    photo: yup.string().required("This field is required"),
    // .when('categoryId', {
    //   is: 1,
    //   then: yup.string().required('hi'),
    // })
    //custom cho photo phụ thuộc vào giá trị của categoryId
    // photo: yup.string().required('This field is required')
  });

  return (
    <div className="editPage">
      <Formik
        initialValues={props.initialValues}
        validationSchema={validateForm}
        //formik hỗ trợ yup bằng prop này, khi values thay đổi thì đều gọi hàm này
        //==> validateForm.validate(values) trả kết quả về prop errors của Formik
        onSubmit={props.onSubmit}
      >
        {(formikProps) => {
          const { values, errors, touched, isSubmitting } = formikProps;
          //prop của Formik-quản lý tất cả cái field(FastField)
          console.log({ values, errors, touched });

          return (
            <Form>
              <FastField
                name="title"
                component={InputField}
                label="Title"
                placeholder="Eg: Wow nature ..."
                //truyền những thằng không liên quan đến logic
              />
              <FastField
                name="categoryId"
                component={SelectField}
                label="Category"
                placeholder="What's your photo category?"
                options={PHOTO_CATEGORY_OPTIONS}
                //truyền những thằng không liên quan đến logic + truyền thằng có data
              />
              <FastField
                name="photo"
                component={PhotoRandomField}
                label="Photo"
              />

              <FormGroup>
                <Button
                  color={props.isEdit ? "success" : "primary"}
                  type="submit"
                >
                  {isSubmitting ? <Spinner size="sm" /> : ""}
                  {props.isEdit ? "Update your photo" : "Add to album"}
                </Button>
              </FormGroup>
            </Form>
          );
        }}
      </Formik>

      <div className="editPage-Link">
        <Button color="primary">
        <i className="fa-solid fa-arrow-left"></i>
          <NavLink
            end
            to="/photos"
            className={({ isActive, isPending }) =>
              isPending
                ? "header__link"
                : isActive
                ? "header__link"
                : "header__link"
            }
          >
            Go to Photo Page
          </NavLink>
        </Button>
      </div>
    </div>
  );
}

export default PhotoForm;

/* FORMIK
Nhận các giá trị trong và ngoài trạng thái biểu mẫu
Xác thực và thông báo lỗi
Xử lý biểu mẫu gửi

Bằng cách sắp xếp tất cả những thứ trên vào một nơi, Formik sẽ giữ mọi thứ có tổ chức--làm cho việc kiểm tra, 
tái cấu trúc và suy luận về các biểu mẫu của bạn trở nên dễ dàng
*/

/*  customField
Cầu nối giữa UI control và formik(field)
UI control là một controlled component với props: (select, input,...)
-name
-value
-onChange: khi nào giá trị(value) bị thay đôi
-onBlur: xác định khi nào thì control này bị touched   => render formik trả lại giá trị vào hàm formikProps
4 thằng này sẽ được truyền vào từ field của FastField(Formik) đến các  UI control
như input, select, photoRandom,.....Lúc đầu sẽ truyền initialValue, sau khi các UI
control được onChange, onBlur sẽ gọi các props của field từ đó formik lấy được data
thay đổi, render lại cái UI control đó nên UI control sẽ được cập nhật + dữ liệu mới sẽ được lưu vào
formik để khi có hành vi submit thì sẽ đẩy dữ liệu ra ngoài.
*/

/* Formik với childrent là 1 function với tham số là formikProps trả về UI nhận 1 props là */
/* // initialValues là một obj chứa name của các FastField(FromGroup)
// UI: Form của Formik --> FastField(k render khi các control khác render) hoặc Filed(luôn
//render khi các control khác render)) 
//FastFiled là 1 FormGroup nhận vào name và component để custom Field, với mỗi loại
//FastField khác nhau thì truyền khác nhau


//VD1 chứa label+input (các props: name + component + label + placeholder), lúc này function trong component nhận 
//được các tham số (filed, form của Form+FastFiled trả về, type="text", label, placeholder,
//disable="false" và trong field gồm name, value, onBlur, onChange của thằng Input) */

//luồng hoạt động của thằng formik + input này ntn?
//khi input onChange, props field của thằng FastField được chạy, khả năng nó sẽ nhận event từ onChange của
//input, sau đó render lại thì formik sẽ map sự kiện đó, chạy function formikProps và truyền các đối số vào

// VD2 với thằng select (lấy từ re-select của react) thì ntn?
//thứ nhất có thêm prop OPTION lưu những option là 1 mảng gồm các obj với 2 key là value(id) + label và bỏ prop là type
//Select onChange, do onChnage của Field phải nhận 1 event, nhưng onChange của Select trả về 1 value
//gọi là selectedOption, vì vậy phải custom thành 1 eventTarget chứa value(id) rùi cho onChange của Field nhận event đó.

/*VD3 là 1 Ui custom (không như input hay select),
Gồm label + (button + img) vì vậy phải tạo 1 component UI là button + img là PhotoRandom
sau đó truyền cái PhotoRandom này vào UI control trong customField là PhotoRandomField bên cạnh 
label. Yên cầu là name+value+onChange+onBlur của field đều được bind vào Ui thật là được 
=> truyền qua PhotoRandom dạng prop sau đó lấy ra và truyền vào button + img. Tuy nhiên
onChange của input thì k xử lý, onChange của select thì truyền event, còn onChange của 
PhotoRandom (UI thật là button) thì phải custom nó sao cho onChange của field được gọi và
truyền vào cái data.
*/
