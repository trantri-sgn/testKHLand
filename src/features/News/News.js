import { Link } from "react-router-dom";

const News = () => {
  return (
    <div className="news-section slide-right">
      <div className="news-title">
        <h2>Tin nổi bật</h2>
      </div>
      <div className="news-main">
        <Link className="news-info">
          <div className="news-info-img">
            <img
              src="https://cdnkhaihoanland.com/upload/25072021/abrrn-thumnail.jpg?v=1.0.27"
              alt="https://cdnkhaihoanland.com/upload/25072021/abrrn-thumnail.jpg?v=1.0.27"
            />
            <div className="news-info-date">
              25
              <span>07/2021</span>
            </div>
          </div>
        </Link>
        <div className="news-info-right">
          <div className="news-info-right-youtube">
            <iframe
              title="Khải Hoàn Land"
              id="VYT"
              src="https://www.youtube.com/embed/pTY_oYiqO2g?autoplay=1&amp;enablejsapi=1&amp;controls=0&amp;loop=0&amp;playsinline=1&amp;color=white&amp;rel=0&amp;;autoplay=1&mute=1;cc_load_policy=1&amp;playlist=pTY_oYiqO2g"
              frameborder="0"
              allow="autoplay"
              allowfullscreen=""
              data-gtm-yt-inspected-1_25="true"
            ></iframe>
          </div>
          <div className="main">
            <Link className="main-items-right">
              <div className="main-items-right-img">
                <img
                  src="https://cdnkhaihoanland.com/upload/19072021/u7apa-600x375-4-1626335541437628909-0-0-374-600-crop-1626335547441-63762050176432.jpg?v=0.3"
                  alt="https://cdnkhaihoanland.com/upload/19072021/u7apa-600x375-4-1626335541437628909-0-0-374-600-crop-1626335547441-63762050176432.jpg?v=0.3"
                ></img>
                <div className="news-info-date date-right ">
                  25
                  <span>07/2021</span>
                </div>
              </div>
              <div className="main-items-right-content">
                <h3>
                  KHẢI HOÀN LAND GIA NHẬP TOP DOANH NGHIỆP NIÊM YẾT TIỀM NĂNG
                  TRÊN THỊ TRƯỜNG
                </h3>
              </div>
            </Link>
            <Link className="main-items-right">
              <div className="main-items-right-img order2">
                <img
                  src="https://cdnkhaihoanland.com/web/thump/W650H406-a3472c71-b323-491d-9133-8c39429dc2e6.jpg?v=0.3"
                  alt="https://cdnkhaihoanland.com/web/thump/W650H406-a3472c71-b323-491d-9133-8c39429dc2e6.jpg?v=0.3"
                ></img>
                <div className="news-info-date ">
                  25
                  <span>07/2021</span>
                </div>
              </div>
              <div className="main-items-right-content order1">
                <h3>KHẢI HOÀN LAND: KHÁT VỌNG VƯƠN TẦM CAO MỚI</h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="footer-news">
        <Link>xem thêm</Link>
      </div>
    </div>
  );
};

export default News;
