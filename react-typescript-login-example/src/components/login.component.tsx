import { Component} from "react";
//import { RouteComponentProps } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup"; 
import authService from "../services/auth.service";

function Login() {
    return(
        <div className="page">
            <div className="titleWrap">
                이메일과 비밀번호를 
                <br/>
                입력해주세요 
            </div>
            <div className="contentWrap">
                <div className="inputTitle">아이디</div>
                    <div className="inputWrap"><input className="input" type="text" /></div>
                    <div className="errorMessageWrap">올바른 이메일을 입력해주세요.</div>
                <div className="inputTitle">비밀번호</div>
                    <div className="inputWrap"><input className="input" type="text" /></div>
                    <div className="errorMessageWrap">영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
            </div>
            <div>
                <button>로그인하기</button>
            </div>
        </div>
    );
}

export default Login;