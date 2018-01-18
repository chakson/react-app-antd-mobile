import React, { Component } from 'react';
import { List, InputItem } from 'antd-mobile';
import { createForm } from 'rc-form';

class LoginPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.onGetPositionClick = this.onGetPositionClick.bind(this);
    this.state = {

    };
  }
  onGetPositionClick() {
    let that = this;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (p) {
          console.log(that.props.form)
          const { setFieldsValue } = that.props.form;
          setFieldsValue({
            shopAddress: p.coords.latitude,
          })
          console.log(p.coords.latitude, p.coords.longitude);
        },
        function (error) {
          switch (error.code) {
            case error.PERMISSION_DENIED:
              alert("您拒绝对获取地理位置的请求");
              break;
            case error.POSITION_UNAVAILABLE:
              alert("位置信息是不可用的");
              break;
            case error.TIMEOUT:
              alert("请求您的地理位置超时");
              break;
            case error.UNKNOWN_ERROR:
              alert("未知错误");
              break;
            default:
              alert("未知错误");
              break;
          }
        }, {
          enableHighAccuracy: true,
          timeout: 5000, // Infinity
          maximumAge: 0
        }
      );
    }
  }
  render() {
    const { getFieldProps } = this.props.form;
    return (
      <div>
        <List renderHeader={() => '账号信息'}>
          <InputItem
            {...getFieldProps('userName')}
            clear
            placeholder="请输入用户名"
          >用户名</InputItem>
          <InputItem
            {...getFieldProps('password')}
            clear
            type="password"
            placeholder="请输入密码"
          >密码</InputItem>
        </List>
        <List renderHeader={() => '商家信息'}>
          <InputItem
            {...getFieldProps('sellerName')}
            clear
            placeholder="请输入真实姓名"
          >真实姓名</InputItem>
          <InputItem
            {...getFieldProps('idCard')}
            clear
            placeholder="请输入身份证"
          >身份证</InputItem>
          <InputItem
            {...getFieldProps('bankCard')}
            clear
            type="bankCard"
            placeholder="请输入银行卡"
          >银行卡</InputItem>
          <InputItem
            {...getFieldProps('phone')}
            type="phone"
            clear
            placeholder="请输入手机号"
          >手机号码</InputItem>
          <InputItem
            {...getFieldProps('email')}
            clear
            placeholder="请输入Email"
          >Email</InputItem>
          <InputItem
            {...getFieldProps('shopName')}
            clear
            placeholder="请输入商家名称"
          >商家名称</InputItem>
          <InputItem
            {...getFieldProps('shopNum')}
            clear
            placeholder="请输入商户号"
          >商户号</InputItem>
          <InputItem
            {...getFieldProps('shopAddress')}
            clear
            placeholder="请输入商家地址"
          >商家地址</InputItem>
          <List.Item>
            <div
              style={{ width: '100%', color: '#108ee9', textAlign: 'center' }}
              onClick={this.onGetPositionClick}
            >
              点击获取商家地址
            </div>
          </List.Item>
        </List>
      </div>
    );
  }
}

LoginPage = createForm({})(LoginPage);
export default LoginPage;
