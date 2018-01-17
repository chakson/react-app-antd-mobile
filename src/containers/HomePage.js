import React, { Component } from 'react';
import { Carousel, Grid } from 'antd-mobile';

class HomePage extends Component {
  constructor(props, context) {
    super(props, context);
    this.onIndexPageInit = this.onIndexPageInit.bind(this);
    this.state = {
      bannerHeight: 'auto',
      contentHeight: 'auto',
      bannerData: ['IJOtIlfsYdTyaDTRVrLI', 'AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn'],
    };
  }
  componentWillMount() {
    this.onIndexPageInit();
  }
  componentDidMount() {
    window.addEventListener('resize', this.onIndexPageInit);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.onIndexPageInit);
  }
  onIndexPageInit() {
    const documentWidth = document.documentElement.clientWidth;
    const documentHeight = document.documentElement.clientHeight;
    const bannerHeight = documentWidth / 2.5;
    const contentHeight = documentHeight - bannerHeight;
    this.setState({
      bannerHeight,
      contentHeight,
    })
  }
  render() {
    const { bannerHeight, contentHeight, bannerData } = this.state;
    const contentStyle = {
      height: contentHeight + 'px',
    };
    const itemStyle = {
      height: (contentHeight / 3) + 'px',
    };
    const itemData = [
      { icon: "iconfont icon-shouyinzhongxin", text: "收银", description: '今日收银统计', iconColor: '#f5842b', fontSize: '60px' },
      { icon: "iconfont icon-shangpinguanli", text: "我的商品" , description: '秤储存商品码', iconColor: '#f65b6c', fontSize: '48px' },
      { icon: "iconfont icon-tongji", text: "销售统计" , description: '年月日销售情况', iconColor: '#01c0dc', fontSize: '50px' },
      { icon: "iconfont icon-jianyi", text: "秤砣儿建议" , description: '销售建议', iconColor: '#30c55f', fontSize: '50px' },
      { icon: "iconfont icon-shebeipeizhi", text: "我的设备" , description: '电子秤绑定', iconColor: '#cddc39', fontSize: '50px' },
      { icon: "iconfont icon-zhanghaoguanli", text: "我的账号" , description: '查看账号信息', iconColor: '#4aa1fe', fontSize: '48px' },
    ];
    return (
      <div className="homepage">
        <header>
          <Carousel
            autoplay={true}
            autoplayInterval={5000}
            infinite
            selectedIndex={0}
          >
            {bannerData.map(val => (
              <a
                key={val}
                style={{ display: 'inline-block', width: '100%', height: bannerHeight + 'px' }}
              >
                <img
                  src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                  alt=""
                  style={{ width: '100%', verticalAlign: 'top' }}
                  onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event('resize'));
                    this.setState({ imgHeight: 'auto' });
                  }}
                />
              </a>
            ))}
          </Carousel>
        </header>
        <div className="index-content" style={contentStyle}>
          <Grid
            data={itemData}
            columnNum={2}
            itemStyle={itemStyle}
            renderItem={dataItem => (
              <section className="index-item-section">
                <i className={dataItem.icon} style={{ color: dataItem.iconColor, fontSize: dataItem.fontSize }}></i>
                <div className="index-item-text">
                  <h3>{dataItem.text}</h3>
                  <p>{dataItem.description}</p>
                </div>
              </section>
            )}
          />
        </div>
      </div>
    );
  }
}

export default HomePage;
