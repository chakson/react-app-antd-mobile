import React, { Component } from 'react';
import banner from '../static/images/banner.jpg';

class HomePage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      bannerHeight: 'auto',
      sectionHeight: 'auto'
    };
  }
  componentWillMount() {
    console.log(document.body.clientWidth)
    const bWidth = document.body.clientWidth;
    const bHeight = bWidth / 2.5;
    const vHeight = document.documentElement.clientHeight;
    const sHeight = (vHeight - bHeight) / 3;
    this.setState({
      bannerHeight: bHeight,
      sectionHeight: sHeight,
    });
  }
  render() {
    console.log(this.state)
    const { bannerHeight, sectionHeight } = this.state;
    const bannerStyle = {
      height: bannerHeight + 'px'
    };
    const sectionStyle = {
      height: sectionHeight + 'px'
    }
    return (
      <div className="homepage">
        <header style={bannerStyle}>
          <img src={banner} alt="banner" />
        </header>
        <div className="index-content clearfix">
          <section style={sectionStyle}>
            <i className="iconfont icon-shouyinzhongxin"></i>
            <p>我的</p>
          </section>
          <section style={sectionStyle}>
            <i className="iconfont icon-shouyinzhongxin"></i>
            <p>我的</p>
          </section>
          <section style={sectionStyle}>
            <i className="iconfont icon-shouyinzhongxin"></i>
            <p>我的</p>
          </section>
          <section>
            <i className="iconfont icon-shouyinzhongxin"></i>
            <p>我的</p>
          </section>
          <section>
            <i className="iconfont icon-shouyinzhongxin"></i>
            <p>我的</p>
          </section>
          <section>
            <i className="iconfont icon-shouyinzhongxin"></i>
            <p>我的</p>
          </section>
        </div>
      </div>
    );
  }
}

export default HomePage;
