import React, { Component } from 'react';
import { Carousel, Grid } from 'antd-mobile';

class HomePage extends Component {
  constructor(props, context) {
    super(props, context);
    this.onIndexPageInit = this.onIndexPageInit.bind(this);
    this.state = {
      bannerHeight: 'auto',
      contentHeight: 'auto',
      bannerData: ['1', '2', '3'],
    };
  }
  componentWillMount() {
    this.onIndexPageInit();
  }
  componentDidMount() {
    window.addEventListener('resize', this.onIndexPageInit);
    this.setState({
      bannerData: ['IJOtIlfsYdTyaDTRVrLI', 'AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn'],
    });
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
      height: contentHeight + 'px'
    };
    const itemStyle = {
      height: (contentHeight / 3) + 'px'
    }
    const itemData = Array.from(new Array(6)).map((_val, i) => ({
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
      text: `name${i}`,
    }));
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
          />
        </div>
      </div>
    );
  }
}

export default HomePage;
